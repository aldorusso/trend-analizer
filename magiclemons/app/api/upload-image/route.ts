import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const targetPath = formData.get("path") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No se proporcionó ningún archivo" },
        { status: 400 }
      );
    }

    if (!targetPath) {
      return NextResponse.json(
        { error: "No se proporcionó la ruta de destino" },
        { status: 400 }
      );
    }

    // Convertir el archivo a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Construir la ruta completa en el directorio public
    const publicPath = path.join(process.cwd(), "public", targetPath);
    const directory = path.dirname(publicPath);

    // Crear el directorio si no existe
    await mkdir(directory, { recursive: true });

    // Guardar el archivo
    await writeFile(publicPath, buffer);

    // Revalidar las rutas para limpiar el cache de Next.js
    revalidatePath("/");
    revalidatePath("/admin-images");

    return NextResponse.json({
      success: true,
      path: targetPath,
      message: "Imagen subida correctamente",
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    return NextResponse.json(
      { error: "Error al procesar la imagen" },
      { status: 500 }
    );
  }
}

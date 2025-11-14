"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageConfig {
  id: string;
  name: string;
  path: string;
  description: string;
}

const HOME_IMAGES: ImageConfig[] = [
  {
    id: "hero-lemon",
    name: "Hero - Limón Principal",
    path: "/limon-removebg-preview.png",
    description: "Imagen principal del hero (915x1157px recomendado)",
  },
  {
    id: "service-1-mobile",
    name: "Servicio 1 - Móvil",
    path: "/img/services/800x800_ser-01.webp",
    description: "Desarrollo Web - Vista móvil (800x800px)",
  },
  {
    id: "service-1-desktop",
    name: "Servicio 1 - Desktop",
    path: "/img/services/1000x1000_ser-01.webp",
    description: "Desarrollo Web - Vista desktop (1000x1000px)",
  },
  {
    id: "service-2-mobile",
    name: "Servicio 2 - Móvil",
    path: "/img/services/800x800_ser-02.webp",
    description: "Software a Medida - Vista móvil (800x800px)",
  },
  {
    id: "service-2-desktop",
    name: "Servicio 2 - Desktop",
    path: "/img/services/1000x1000_ser-02.webp",
    description: "Software a Medida - Vista desktop (1000x1000px)",
  },
  {
    id: "service-3-mobile",
    name: "Servicio 3 - Móvil",
    path: "/img/services/800x800_ser-03.webp",
    description: "Inteligencia Artificial - Vista móvil (800x800px)",
  },
  {
    id: "service-3-desktop",
    name: "Servicio 3 - Desktop",
    path: "/img/services/1000x1000_ser-03.webp",
    description: "Inteligencia Artificial - Vista desktop (1000x1000px)",
  },
  {
    id: "service-4-mobile",
    name: "Servicio 4 - Móvil",
    path: "/img/services/800x800_ser-04.webp",
    description: "Diseño UX/UI - Vista móvil (800x800px)",
  },
  {
    id: "service-4-desktop",
    name: "Servicio 4 - Desktop",
    path: "/img/services/1000x1000_ser-04.webp",
    description: "Diseño UX/UI - Vista desktop (1000x1000px)",
  },
  {
    id: "parallax-button",
    name: "Botón Parallax",
    path: "/img/icons/300x300_obj-btn-02.webp",
    description: "Botón rotatorio del banner parallax (300x300px)",
  },
  {
    id: "cta-icon",
    name: "CTA - Icono",
    path: "/img/icons/300x300_obj-cta-01.webp",
    description: "Icono del CTA (300x300px)",
  },
  {
    id: "cta-main-image",
    name: "CTA - Imagen Principal",
    path: "/img/illustrations/cta-img-01.webp",
    description: "Imagen grande del CTA (800x912px)",
  },
  {
    id: "cta-secondary-image",
    name: "CTA - Imagen Secundaria",
    path: "/img/illustrations/cta-img-02.webp",
    description: "Imagen pequeña del CTA - ¡Hablemos de tu Proyecto Mágico! (600x601px)",
  },
];

export default function AdminImagesPage() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    // Cargar las rutas actuales de las imágenes
    const currentImages: Record<string, string> = {};
    HOME_IMAGES.forEach((img) => {
      currentImages[img.id] = img.path;
    });
    setImages(currentImages);
  }, []);

  const handleImageUpload = async (
    imageId: string,
    file: File,
    originalPath: string
  ) => {
    try {
      setUploading(imageId);

      // Crear FormData para enviar el archivo
      const formData = new FormData();
      formData.append("file", file);
      formData.append("path", originalPath);

      // Enviar al endpoint de API
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const data = await response.json();

      // Actualizar la URL de la imagen con timestamp para forzar recarga
      setImages((prev) => ({
        ...prev,
        [imageId]: `${data.path}?t=${data.timestamp || Date.now()}`,
      }));

      alert(
        "✅ Imagen actualizada correctamente\n\n" +
          "IMPORTANTE: Para ver los cambios en el frontend:\n" +
          "1. Recarga la página principal con Ctrl+Shift+R (o Cmd+Shift+R en Mac)\n" +
          "2. Si usas navegador, limpia la caché del navegador\n" +
          "3. Los cambios pueden tardar unos segundos en reflejarse"
      );
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error al subir la imagen. Por favor intenta de nuevo.");
    } finally {
      setUploading(null);
    }
  };

  const handleFileSelect = (imageId: string, originalPath: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleImageUpload(imageId, file, originalPath);
      }
    };
    input.click();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Administrador de Imágenes - Home
        </h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Selecciona y reemplaza las imágenes de la página principal
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "2rem",
        }}
      >
        {HOME_IMAGES.map((imageConfig) => (
          <div
            key={imageConfig.id}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "1.5rem",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                aspectRatio: "1",
                position: "relative",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src={images[imageConfig.id] || imageConfig.path}
                alt={imageConfig.name}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                key={images[imageConfig.id] || imageConfig.path}
              />
            </div>

            <h3
              style={{
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
                fontWeight: "600",
              }}
            >
              {imageConfig.name}
            </h3>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "1rem",
              }}
            >
              {imageConfig.description}
            </p>

            <button
              onClick={() =>
                handleFileSelect(imageConfig.id, imageConfig.path)
              }
              disabled={uploading === imageConfig.id}
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor:
                  uploading === imageConfig.id ? "#ccc" : "#000",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                cursor: uploading === imageConfig.id ? "wait" : "pointer",
                fontWeight: "500",
              }}
            >
              {uploading === imageConfig.id
                ? "Subiendo..."
                : "Cambiar Imagen"}
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          border: "1px solid #0ea5e9",
        }}
      >
        <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          📝 Instrucciones:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "1.5rem" }}>
          <li>
            Haz clic en "Cambiar Imagen" para seleccionar una nueva imagen de
            tu computadora
          </li>
          <li>
            La imagen se subirá automáticamente y reemplazará la actual
          </li>
          <li>
            Asegúrate de usar imágenes con las dimensiones recomendadas para
            mejor calidad
          </li>
          <li>
            Formatos recomendados: PNG para transparencias, WebP o JPG para
            fotos
          </li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: "#fef3c7",
          borderRadius: "8px",
          border: "1px solid #f59e0b",
        }}
      >
        <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          ⚠️ Importante sobre la caché:
        </h3>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Después de cambiar una imagen, debes hacer una <strong>recarga forzada</strong> para ver los cambios:
        </p>
        <ul style={{ lineHeight: "1.8", paddingLeft: "1.5rem" }}>
          <li>
            <strong>Windows/Linux:</strong> Presiona <code>Ctrl + Shift + R</code>
          </li>
          <li>
            <strong>Mac:</strong> Presiona <code>Cmd + Shift + R</code>
          </li>
          <li>
            O limpia la caché del navegador completamente
          </li>
        </ul>
        <p style={{ lineHeight: "1.8", marginTop: "1rem", fontSize: "0.95rem" }}>
          Esto es necesario porque Next.js optimiza y guarda las imágenes en caché para mejor rendimiento.
        </p>
      </div>
    </div>
  );
}

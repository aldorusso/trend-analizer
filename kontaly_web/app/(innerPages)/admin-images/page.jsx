"use client";
import { useState, useEffect } from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";

export default function AdminImagesPage() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  const pages = [
    { value: "home", label: "Home" },
    { value: "features", label: "Características" },
    { value: "about", label: "Nosotros" },
    { value: "contact", label: "Contacto" },
    { value: "pricing", label: "Precios" }
  ];

  useEffect(() => {
    loadImages();
  }, [selectedPage]);

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/list-images?page=${selectedPage}`);
      const data = await response.json();
      if (data.success) {
        setImages(data.images);
      }
    } catch (error) {
      console.error("Error loading images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingIndex(index);
    const formData = new FormData();
    formData.append("file", file);

    try {
      // 1. Subir la imagen
      const uploadResponse = await fetch("/api/upload-image", {
        method: "POST",
        body: formData
      });

      const uploadData = await uploadResponse.json();

      if (uploadData.success) {
        // 2. Actualizar la referencia en el componente
        const updateResponse = await fetch("/api/update-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            component: images[index].component,
            oldPath: images[index].path,
            newPath: uploadData.path,
            page: selectedPage
          })
        });

        const updateData = await updateResponse.json();

        if (updateData.success) {
          alert(`¡Imagen actualizada exitosamente!\n\nComponente: ${images[index].component}\nNueva ruta: ${uploadData.path}\n\nLa página se recargará automáticamente.`);
          // Recargar la página completa para ver los cambios
          window.location.reload();
        } else {
          alert(`Imagen subida pero no se pudo actualizar el componente:\n${updateData.error}\n\nRuta de la imagen: ${uploadData.path}`);
        }

        loadImages();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error al subir la imagen");
    } finally {
      setUploadingIndex(null);
    }
  };

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <Header2 />
      <div id="wrapper" className="wrap">
        <div className="container py-6 xl:py-10">
          <div className="panel">
            <h1 className="h2 mb-4">Administrador de Imágenes</h1>

            {/* Selector de página */}
            <div className="mb-6">
              <label className="d-block mb-2 fw-bold">Seleccionar Página:</label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="form-select w-auto"
                style={{
                  padding: "10px 40px 10px 15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px"
                }}
              >
                {pages.map((page) => (
                  <option key={page.value} value={page.value}>
                    {page.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Lista de imágenes */}
            {loading ? (
              <p>Cargando imágenes...</p>
            ) : (
              <div className="row g-4">
                {images.length === 0 ? (
                  <div className="col-12">
                    <p>No se encontraron imágenes en esta página.</p>
                  </div>
                ) : (
                  images.map((image, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                      <div
                        className="panel p-3 border rounded-2"
                        style={{ minHeight: "350px" }}
                      >
                        {/* Imagen preview */}
                        <div
                          className="mb-3 bg-gray-100 rounded-1 overflow-hidden"
                          style={{ height: "200px" }}
                        >
                          <img
                            src={image.path}
                            alt="Preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999">Sin preview</div>';
                            }}
                          />
                        </div>

                        {/* Info */}
                        <div className="mb-2">
                          <small className="d-block text-muted mb-1">
                            <strong>Componente:</strong> {image.component}
                          </small>
                          <small
                            className="d-block text-muted"
                            style={{
                              wordBreak: "break-all",
                              fontSize: "11px"
                            }}
                          >
                            <strong>Ruta:</strong> {image.path}
                          </small>
                        </div>

                        {/* Botón de subida */}
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, index)}
                            disabled={uploadingIndex === index}
                            id={`file-${index}`}
                            style={{ display: "none" }}
                          />
                          <label
                            htmlFor={`file-${index}`}
                            className="btn btn-sm btn-primary w-100"
                            style={{
                              cursor: uploadingIndex === index ? "not-allowed" : "pointer",
                              opacity: uploadingIndex === index ? 0.6 : 1
                            }}
                          >
                            {uploadingIndex === index ? "Subiendo..." : "Reemplazar Imagen"}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

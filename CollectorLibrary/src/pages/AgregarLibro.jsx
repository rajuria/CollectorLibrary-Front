import { OtroForm } from "../components/form/form.jsx";

export function BookPage() {
  const bookFields = [
    { name: "Title", label: "Titulo del Libro", type: "text", required: true, placeholder: "Ejemplo:The Mortal Instruments" },
    { name: "AuthorID", label: "ID del Autor", type: "text", required: true, placeholder: "Ejemplo: 1" },
    { name: "Genre", label: "Genero", type: "text", placeholder: "Ejemplo: Fantasia" },
    { name: "PublicationYear", label: "Año de Publicacion", type: "text", required: true, placeholder: "Ejemplo: 2007" },
    { name: "isbn", label: "ISBN", type: "text", required: true, placeholder: "Ejemplo: 978-1416914280" },
    { name: "PageCount", label: "Numero de Paginas", type: "text", required: true, placeholder: "Ejemplo: 496" }
  ];

  const handleCreateBook = async (formData) => {
    const formattedData = JSON.stringify(formData, null, 2);
    alert(`Datos del Libro capturados!\n\n${formattedData}`);
    console.log("Listo para enviar:", formData);
  };

  return (
    <OtroForm 
      title="Crear Nuevo Libro" 
      fields={bookFields} 
      onSubmit={handleCreateBook} 
    />
  );
}
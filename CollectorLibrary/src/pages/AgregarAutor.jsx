import { OtroForm } from "../components/form/form.jsx";

export function AuthorPage() {
  const authorFields = [
    {name: "AuthorID", label: "ID del Autor", type: "text", required: true, placeholder: "Ejemplo: 1" },
    { name: "FirstName", label: "Nombre", type: "text", placeholder: "Ejemplo: Cassandra" },
    { name: "LastName", label: "Apellido", type: "text", placeholder: "Ejemplo: Clare" },
    { name: "BirthYear", label: "Año de Nacimiento", type: "text", required: true, placeholder: "Ejemplo: 1973" },
    { name: "Nationality", label: "Nacionalidad", type: "text", required: true, placeholder: "Ejemplo: Americana" }
  ];

  const handleCreateAuthor = async (formData) => {
    const formattedData = JSON.stringify(formData, null, 2);
    alert(`Datos del Autor capturados!\n\n${formattedData}`);
  };

  return (
    <OtroForm 
      title="Crear Nuevo Autor" 
      fields={authorFields} 
      onSubmit={handleCreateAuthor} 
    />
  );
}
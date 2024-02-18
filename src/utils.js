import * as Yup from "yup";

export const regisgterValidationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  last_name: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Debe ser un correo válido")
    .required("El correo es obligatorio"),
  rut: Yup.string().required("El RUT es obligatorio"), // Considera agregar una validación específica de RUT si es necesario
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  country: Yup.string().required("El país es obligatorio"),
  city: Yup.string().required("La ciudad es obligatoria"),
  accountType: Yup.string()
    .oneOf(["Vista", "Corriente", "Ahorro"], "Tipo de cuenta inválido")
    .required("El tipo de cuenta es obligatorio"),
});

export const registerInitialValues = {
  name: "",
  last_name: "",
  email: "",
  rut: "",
  password: "",
  country: "",
  city: "",
  accountType: 'Vista',
};

export const formFields = [
  { name: "name", type: "text", placeholder: "Nombre" },
  { name: "last_name", type: "text", placeholder: "Apellido" },
  { name: "email", type: "email", placeholder: "Correo Electrónico" },
  { name: "rut", type: "text", placeholder: "RUT" },
  { name: "password", type: "password", placeholder: "Contraseña" },
  { name: "country", type: "text", placeholder: "País" },
  { name: "city", type: "text", placeholder: "Ciudad" },
  {
    name: "accountType",
    type: "select",
    placeholder: "Seleccione Tipo de Cuenta",
    options: ["Vista", "Corriente", "Ahorro"],
  },
];

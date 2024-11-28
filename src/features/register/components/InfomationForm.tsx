import { Box } from "@mui/material";
import { Control, UseFormTrigger } from "react-hook-form";
import { Information } from "../models/information.model";
import { CustomTextField } from "@/components";

interface Props {
  control: Control<Information>;
  trigger: UseFormTrigger<Information>;
}

export const InformationForm = ({ control, trigger }: Props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        },
        gap: 1,
        justifyContentc: "center",
        marginTop: "10px",
      }}
    >
      <CustomTextField
        name="name"
        control={control}
        label="Nombre"
        rules={{
          required: "El nombre es requerido",
        }}
        onChange={() => trigger("name")}
      />
      <CustomTextField
        name="description"
        control={control}
        label="Descripción"
        rules={{
          required: "La descripción es requerida",
        }}
        onChange={() => trigger("description")}
      />
      <CustomTextField
        name="email"
        control={control}
        label="Correo Electrónico"
        type="email"
        rules={{
          required: "El correo electrónico es obligatorio",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "El correo debe ser de tipo restaurante@ejemplo.com",
          },
        }}
        onChange={() => trigger("email")}
      />
      <CustomTextField
        name="phone"
        control={control}
        label="Teléfono"
        onChange={() => trigger("phone")}
        rules={{
          required: "El teléfono es obligatorio",
          pattern: {
            value: /^\+57\d{10}$/,
            message:
              "El teléfono debe ser un número colombiano válido (+57 seguido de 10 dígitos)",
          },
        }}
      />
    </Box>
  );
};

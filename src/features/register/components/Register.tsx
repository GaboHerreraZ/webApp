import { Box, Typography } from "@mui/material";
import { StepperForm } from "./StepperRegister";

export const Register = () => {
  return (
    <>
      <header>
        <Box sx={{ width: "100%", display: "grid", justifyContent: "center" }}>
          <Typography>!Registra tu restaurante!</Typography>
          <p className="description">
            Únete a nuestra plataforma y llega a más clientes.
          </p>
        </Box>
      </header>
      <StepperForm />
    </>
  );
};

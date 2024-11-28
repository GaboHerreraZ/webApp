import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AddressForm } from "./AddressForm";
import { SocialMediaForm } from "./SocialMediaForm";
import { InformationSection } from "./Information";
import { useRegister } from "../hooks/useRegister";
import { CustomButton } from "@/components";

export const StepperForm = () => {
  const { informationForm, saveData } = useRegister();

  const steps = [
    {
      label: "Información general",
      optional: "¡Empecemos!",
      component: (
        <InformationSection
          control={informationForm.control}
          trigger={informationForm.trigger}
        />
      ),
    },
    {
      label: "Dirección",
      optional: "Dejanos saber donde estas ubicado",
      component: <AddressForm />,
    },
    {
      label: "Redes sociales",
      optional: "¿Cómo te pueden encontrar?",
      component: <SocialMediaForm />,
    },
    {
      label: "Imagenes",
      optional: "¡Por último!",
      component: <>imagenes</>,
    },
  ];

  const handleSubmit = () => {
    saveData();
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                <Typography variant="caption">{step.optional}</Typography>
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <>{step.component}</>
              <Box sx={{ mb: 2, display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? "Finalizar" : "Continuar"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Volver
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <CustomButton label="Registrarse" handleClick={handleSubmit} />
        </Paper>
      )}
    </Box>
  );
};

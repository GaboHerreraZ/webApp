import { CustomButton } from "@/components";
import { Avatar, Box, Container } from "@mui/material";
import { InformationForm } from "./InfomationForm";
import { useState } from "react";
import { Control, UseFormTrigger } from "react-hook-form";
import { Information } from "../models/information.model";

import defaultRestaurantLogo from "@/assets/svg/default-restaurant-logo.svg";

interface Props {
  control: Control<Information>;
  trigger: UseFormTrigger<Information>;
}

export const InformationSection = ({ control, trigger }: Props) => {
  const [urlLogo, setUrlLogo] = useState(defaultRestaurantLogo);

  const handleLogo = () => {
    setUrlLogo("");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: {
          xs: "grid",
          sm: "flex",
        },
        gap: 5,
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "grid", justifyContent: "center", gap: 2 }}>
        <Avatar
          sx={{ bgcolor: "#bdbdbd96", width: 100, height: 100, padding: 4 }}
          src={urlLogo}
        />
        <CustomButton label="Cargar Logo" handleClick={handleLogo} />
      </Box>
      <Box>
        <InformationForm control={control} trigger={trigger} />
      </Box>
    </Container>
  );
};

import { useNavigate } from "react-router-dom";
import { DASHBOARD_PERMISSION } from "../constants/authTasks";
import { useAuthStore } from "../hooks/useAuth";
import { authService } from "../services/authService";
import { CustomButton } from "@/components";

export const LoginForm = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await authService.login();
    //we gett all permisions from te user
    login([DASHBOARD_PERMISSION.READ]);
    navigate("/dashboard");
  };

  return (
    <>
      <CustomButton label="Submit" handleClick={handleSubmit} />
    </>
  );
};

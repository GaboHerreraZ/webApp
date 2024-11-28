import { Outlet, useNavigate } from "react-router-dom"
import { useAuthStore } from "../../auth/hooks/useAuth";
import { useEffect } from "react";
import MiniDrawer from "../../../components/Drawer";
import { CssBaseline } from "@mui/material";

export const Layout = ()=>{

 const navigate = useNavigate();
 const { isAuthenticated } = useAuthStore();

 
    
    useEffect(()=>{
        if (!isAuthenticated) {
          navigate("/login");
          return;
        }

    },[isAuthenticated]);



    return (
      <MiniDrawer>
        <CssBaseline />
        <Outlet />
      </MiniDrawer>
    );
}
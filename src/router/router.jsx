import {
    createBrowserRouter
  } from "react-router-dom";
import FaseInicio from "../pages/FaseInicio";
import FasePlanificacion from "../pages/FasePlanificacion";
import FaseDisenioDesarrollo from "../pages/FaseDisenioDesarrollo";
import FaseControlCalidad from "../pages/FaseControlCalidad";
import FaseCierre from "../pages/FaseCierre";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout />,
      children:[
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/fase-inicio',
          element: <FaseInicio />,
        },
        {
          path: '/fase-planificacion',
          element: <FasePlanificacion />,
        },
        {
          path: '/fase-diseno-desarrollo',
          element: <FaseDisenioDesarrollo />,
        },
        {
          path: '/fase-control-calidad-implementacion',
          element: <FaseControlCalidad />,
        },
        {
          path: '/fase-cierre',
          element: <FaseCierre />,
        },
      ]
    },
    
  ]);

  export default router;
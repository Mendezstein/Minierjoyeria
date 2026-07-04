import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ProcesoPage } from "./pages/ProcesoPage";
import { GaleriaPage } from "./pages/GaleriaPage";
import { NosotrosPage } from "./pages/NosotrosPage";
import { ContactoPage } from "./pages/ContactoPage";
import { ColeccionPage } from "./pages/ColeccionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "proceso", Component: ProcesoPage },
      { path: "galeria", Component: GaleriaPage },
      { path: "nosotros", Component: NosotrosPage },
      { path: "contacto", Component: ContactoPage },
      { path: "coleccion/:categoria", Component: ColeccionPage },
      // Cualquier ruta desconocida vuelve siempre al inicio
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

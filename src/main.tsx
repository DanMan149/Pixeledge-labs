import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router"; // adjust if needed

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

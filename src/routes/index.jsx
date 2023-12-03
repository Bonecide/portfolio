import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";

export const Routes = () => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    setIsInit(true);
  }, []);

  if (!isInit) return null;
  return <RouterProvider router={ROUTES} />;
};

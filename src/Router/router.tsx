import React from "react";

import { ContainerRoute } from "./containerRoutes.types";
import { checkPermission } from "./checkPermission";

export const appRoutes: ContainerRoute[] = [];

export const adminRoutes = checkPermission(appRoutes);

const Router: React.FC = () => {
  return <div>Router</div>;
};

export default Router;

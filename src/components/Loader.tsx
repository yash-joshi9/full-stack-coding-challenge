import React from "react";

import { Skeleton } from "@mui/material";

const Loader: React.FC = () => {
  return <Skeleton width="100%" height={40} variant="rectangular"></Skeleton>;
};

export default Loader;

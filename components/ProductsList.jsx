import React from "react";
import Product from "./Product";
import { Box } from "@mui/material";

const ProductsList = ({ productsList }) => {
  //   console.log(productsList);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      {productsList.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </Box>
  );
};

export default ProductsList;

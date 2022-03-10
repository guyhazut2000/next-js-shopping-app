import Image from "next/image";
import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
  Radio,
} from "@mui/material";

const Product = ({ product, key }) => {
  //   console.log(product.quantity);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <Typography variant="body2" align="center">
        {product.productTitle}
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={product.mainImageSource} width={200} height={200} />
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          {product.quantity.map((item) => (
            //   {Object.keys(item) + " " + Object.values(item)}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value={Object.keys(item)}
                  control={<Radio />}
                  label={Object.keys(item)}
                  disabled={Object.values(item) > 0 ? false : true}
                />
              </RadioGroup>
            </FormControl>
          ))}
        </Container>
      </Container>
      <Typography variant="body2" align="center">
        {`price: ${product.price}`}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Button variant="contained">Add to cart</Button>
        <Button variant="contained">Add to Watch List</Button>
      </Box>
    </Box>
  );
};

export default Product;

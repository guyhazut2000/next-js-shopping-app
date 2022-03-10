import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";

export default function home() {
  const list = [
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/LOVF-WD1865_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/LOVF-WD1865_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/LOVF-WD1865_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/LOVF-WD1865_V3.jpg",
      ],
      productTitle: "Eva Midi Dress",
      price: 552.14,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 3 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Deep Taupe",
    },
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V3.jpg",
      ],
      productTitle: "Tabitha Midi Dress",
      price: 716.47,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 0 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Tan Leopard",
    },
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/ELLI-WD346_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/ELLI-WD346_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/ELLI-WD346_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/ELLI-WD346_V3.jpg",
      ],
      productTitle: "Cassini Dress",
      price: 614.59,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 0 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Blue",
    },
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/NBDR-WD2392_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/NBDR-WD2392_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/NBDR-WD2392_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/NBDR-WD2392_V3.jpg",
      ],
      productTitle: "Janet Mini Dress",
      price: 650.74,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 0 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Mauve",
    },
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/MALR-WD530_V3.jpg",
      ],
      productTitle: "Tabitha Midi Dress",
      price: 716.47,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 0 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Tan Leopard",
    },
    {
      mainImageSource:
        "https://is4.revolveassets.com/images/p4/n/dt/SPDW-WD863_V1.jpg",
      imageList: [
        "https://is4.revolveassets.com/images/p4/n/dt/SPDW-WD863_V1.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/SPDW-WD863_V2.jpg",
        "https://is4.revolveassets.com/images/p4/n/dt/SPDW-WD863_V3.jpg",
      ],
      productTitle: "Eva Twisted Slit Dress",
      price: 236.63,
      quantity: [
        { xxs: 10 },
        { xs: 15 },
        { s: 20 },
        { m: 0 },
        { l: 20 },
        { xl: 0 },
      ],
      color: "Green",
    },
  ];
  return (
    <>
      <Navbar />
      <ProductsList productsList={list} />
      <Footer />
    </>
  );
}

import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skeleton from "../components/Skeleton";
import RowCards from "../components/RowCard";
import Card from "../components/Card";
export default function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Skeleton />
      <Box sx={{ my: "1em" }}>
        <RowCards />
      </Box>
      <Box sx={{ my: "1em" }}>
        <Card />
      </Box>
    </Container>
  );
}

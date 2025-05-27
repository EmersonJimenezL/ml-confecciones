"use client";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { red } from "@mui/material/colors";
import { BorderBottom } from "@mui/icons-material";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  talla: string;
  precio: number;
  imagen: string;
  stock: number;
  categoria: string;
  created_at: string;
  updated_at: string;
}

export const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Especificamos que error puede ser Error o null

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("http://localhost:3000/productos"); // Reemplaza con la URL correcta
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Producto[] = await res.json(); // Afirmamos el tipo de los datos recibidos
        console.log("respuesta del backend", data);

        setProductos(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error al cargar los productos:", err);
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Ocurrió un error desconocido"));
        }
        setIsLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (isLoading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>Error al cargar los productos: {error.message}</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {productos.map((producto) => (
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: "secondary.main",
              borderRadius: 2,
            }}
            key={producto.id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={producto.imagen}
                alt="Error al cargar la imagen"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  {producto.nombre}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ paddingBottom: 1, borderBottom: 1 }}
                >
                  {producto.descripcion}
                </Typography>
                <Typography variant="body2" color="primary">
                  <strong>Talla: </strong>
                  {producto.talla}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{
                  backgroundColor: "gray",
                  borderRadius: 3,
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
              >
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

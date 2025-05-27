"use client";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
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
          console.log(res);

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
    <div style={{ width: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        {productos.map((producto) => (
          <Card key={producto.id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {producto.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

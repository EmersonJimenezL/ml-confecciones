"use client";
import React, { useState, useEffect } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  // Agrega otras propiedades de tu producto aquí
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
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - Precio: ${producto.precio}
            {/* Puedes mostrar más detalles del producto aquí */}
          </li>
        ))}
      </ul>
    </div>
  );
};

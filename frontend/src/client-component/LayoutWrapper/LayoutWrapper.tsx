"use client";
import { Box } from "@mui/material";
import { Navbar } from "@/components";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Navbar />
      {children}
    </Box>
  );
}

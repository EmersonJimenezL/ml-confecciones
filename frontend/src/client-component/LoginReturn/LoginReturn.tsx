"use client";
import { useRouter } from "next/navigation";
import style from "../../components/global.module.css";

import React from "react";

export const LoginReturn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button onClick={handleClick} className={style.buttonStyle}>
      Volver
    </button>
  );
};

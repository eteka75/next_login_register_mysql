"use client";
import Link from "next/link";
import React from "react";
import style from "@/styles/NaveBar.module.css";
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/profil">Profil</Link>
    </div>
  );
};

export default NavBar;

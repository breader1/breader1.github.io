"use client";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const nav = () => {
  return (
    <header className="border-b border-purple-900/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 text-purple-500" />
          <span className="font-bold text-xl tracking-tight">
            Brett<span className="text-purple-500">Reader</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#about"
            className="hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-purple-400 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
          asChild
        >
          <a href="/resume/Reader_Brett_Resume.pdf" download>
            Resume
          </a>
        </Button>
      </div>
    </header>
  );
};

export default nav;

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const hero = () => {
  return (
    <section className="py-20 md:py-32 container mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-purple-500">Brett</span>
          <span className="animate-blink ml-1">_</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300">
          Junior Software Developer and Gamer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          I like to learn new things and build cool stuff.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link href="#projects">View Projects</Link>{" "}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;

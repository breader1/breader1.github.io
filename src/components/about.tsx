import { Code, Mail, Github, Linkedin } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const about = () => {
  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Code className="mr-2 text-purple-500" />
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg border-2 border-purple-500/50">
              <Image
                src="/images/BCIT-138.jpg"
                alt="Brett"
                fill
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I’m a developer who enjoys building meaningful, fun, and useful
              projects. Games have always been a big part of my life, and now I
              get to bring that same creativity and curiosity into my code.
              Every project is a chance to grow, improve, and try something new.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Full-stack development is where I spend most of my time, but I
              like exploring new tools and tech along the way. I enjoy the
              process of taking an idea from scratch and turning it into
              something real. The tech world moves fast, and I’m always looking
              forward to what I’ll learn next.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/breader1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/breader1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:brett.reader@shaw.ca">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;

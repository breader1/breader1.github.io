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
                src="/placeholder.svg?height=400&width=400"
                alt="Brett"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate software developer with a background in computer
              science and a lifelong love for video games. This intersection of
              interests has shaped my approach to development—I create
              applications that are not only functional but also engaging and
              intuitive.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With 5+ years of experience building web and mobile applications,
              I specialize in creating responsive, performant solutions that
              solve real problems. When I'm not coding, you'll find me gaming,
              contributing to open-source projects, or exploring new
              technologies.
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
                href="https://linkedin.com/breader1"
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

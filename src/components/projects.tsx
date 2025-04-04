"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChevronRight, Code, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
//TODO - refactor this so the projects are a component and dynamically loaded from a constants file
const projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Code className="mr-2 text-purple-500" />
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/images/moodzic.png"
                alt="Moodzic"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>Moodzic - AI powered Text to Audio</CardTitle>
              <CardDescription className="text-gray-400">
                A full-stack application that allows users to convert text to to
                a short audio clip.
                <br />
                <br />
                Note: We couldn't afford to keep this hosted, so the demo is no
                longer available.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  SQLite
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  JWT
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  PyTorch
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Azure
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                A full-stack web app that generates audio based on text mood
                analysis. Built with HTML, TailwindCSS, JavaScript frontend and
                Node.js backend with SQLite. Features custom JWT authentication
                and password reset functionality via email.
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  asChild
                >
                  <Link
                    href="https://github.com/breader1/COMP4537_Moodzic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/images/dynamite.png"
                alt="Project 2"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>Dynamite Goaltending</CardTitle>
              <CardDescription className="text-gray-400">
                A website for a goaltending training company. <br />
                <br />
                My first React and TypeScript project - a custom website for a
                friend's Goaltending Training business. Turned learning new tech
                into solving a real business need!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  TailwindCSS
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  HTML
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Vite
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Azure
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Developed a responsive website for a goaltending training
                business using React, TypeScript, and Tailwind CSS. Managed the
                full deployment pipeline with Azure Static Web Apps, including
                CI/CD integration and custom domain setup. As a hockey player
                myself, I had a blast producing all the photos and videos
                featured on the site—combining tech skills with time on the ice
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  asChild
                >
                  <Link
                    href="https://github.com/breader1/dynamite-goaltending-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>

                <Button
                  size="sm"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <Link
                    href="https://dynamitegoaltending.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Website
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/images/VFS.png"
                alt="Project 3"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>Vision Fire and Safety</CardTitle>
              <CardDescription className="text-gray-400">
                A website for a Fire and Safety Company.
                <br />
                <br />
                My first real-world project, tackled between semesters with a
                fellow student. Fresh off learning Laravel and PHP in school, we
                helped modernize a small business's 15-year-old website.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Laravel
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  TailwindCSS
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Composer
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Azure
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Transformed Vision Fire & Safety's online presence with a
                responsive Laravel and TailwindCSS website. Managed the entire
                process from development through Azure deployment. While it
                represents my early work, it's been running reliably with 99.99%
                uptime and, most importantly, delivers exactly what the client
                needed.
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  size="sm"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <Link
                    href="https://visionfireandsafety.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Website
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default projects;

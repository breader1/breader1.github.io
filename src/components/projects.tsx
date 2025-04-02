import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ChevronRight, Code, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

const projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Code className="mr-2 text-purple-500" />
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Project 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>Nexus Gaming Platform</CardTitle>
              <CardDescription className="text-gray-400">
                A social platform for gamers to connect and share gameplay
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
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  MongoDB
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Built a full-stack application that allows gamers to create
                profiles, share gameplay videos, and connect with other players.
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/10"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Project 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>Pixel Quest</CardTitle>
              <CardDescription className="text-gray-400">
                A retro-style browser-based RPG game
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
                  Canvas API
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  Phaser
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Developed a browser-based RPG with pixel art graphics, featuring
                turn-based combat, inventory system, and procedurally generated
                dungeons.
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/10"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Project 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle>DevQuest API</CardTitle>
              <CardDescription className="text-gray-400">
                A RESTful API for game developers
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
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
                  Express
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-500 text-purple-400"
                >
                  PostgreSQL
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Created a comprehensive API that provides game developers with
                access to game assets, user authentication, and analytics tools.
              </p>
            </CardContent>
            <CardFooter className="border-t border-purple-900/30 pt-4">
              <div className="flex gap-4 w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-purple-500 text-purple-500 hover:bg-purple-500/10"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Docs
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            View All Projects <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default projects;

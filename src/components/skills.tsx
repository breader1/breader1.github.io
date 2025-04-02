import { Gamepad2 } from 'lucide-react'
import { Cpu, Layers, Terminal } from "lucide-react";
import { CardContent } from './ui/card'
import { CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { CardHeader } from './ui/card'
import React from "react";
import { Card } from "./ui/card";

const skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Cpu className="mr-2 text-purple-500" />
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 text-purple-500" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">React</Badge>
                <Badge className="bg-purple-600">Next.js</Badge>
                <Badge className="bg-purple-600">TypeScript</Badge>
                <Badge className="bg-purple-600">Tailwind CSS</Badge>
                <Badge className="bg-purple-600">Three.js</Badge>
                <Badge className="bg-purple-600">Redux</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="mr-2 text-purple-500" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">Node.js</Badge>
                <Badge className="bg-purple-600">Express</Badge>
                <Badge className="bg-purple-600">Python</Badge>
                <Badge className="bg-purple-600">MongoDB</Badge>
                <Badge className="bg-purple-600">PostgreSQL</Badge>
                <Badge className="bg-purple-600">GraphQL</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gamepad2 className="mr-2 text-purple-500" />
                Game Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">Unity</Badge>
                <Badge className="bg-purple-600">C#</Badge>
                <Badge className="bg-purple-600">WebGL</Badge>
                <Badge className="bg-purple-600">Phaser</Badge>
                <Badge className="bg-purple-600">Game Design</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default skills;

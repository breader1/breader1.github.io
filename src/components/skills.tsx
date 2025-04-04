import { Gamepad2 } from "lucide-react";
import { Cpu, Layers, Terminal } from "lucide-react";
import { CardContent } from "./ui/card";
import { CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CardHeader } from "./ui/card";
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
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">Python</Badge>
                <Badge className="bg-purple-600">Java</Badge>
                <Badge className="bg-purple-600">C#/.NET</Badge>
                <Badge className="bg-purple-600">JavaScript</Badge>
                <Badge className="bg-purple-600">TypeScript</Badge>
                <Badge className="bg-purple-600">SQL</Badge>
                <Badge className="bg-purple-600">HTML</Badge>
                <Badge className="bg-purple-600">CSS</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="mr-2 text-purple-500" />
                Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">React</Badge>
                <Badge className="bg-purple-600">ASP.NET MVC</Badge>
                <Badge className="bg-purple-600">Next.js</Badge>
                <Badge className="bg-purple-600">Vite</Badge>
                <Badge className="bg-purple-600">Tailwind</Badge>
                <Badge className="bg-purple-600">Laravel</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gamepad2 className="mr-2 text-purple-500" />
                Tools & Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-600">Git</Badge>
                <Badge className="bg-purple-600">TFS</Badge>
                <Badge className="bg-purple-600">Node.js</Badge>
                <Badge className="bg-purple-600">SSMS</Badge>
                <Badge className="bg-purple-600">Snowflake</Badge>
                <Badge className="bg-purple-600">Azure</Badge>
                <Badge className="bg-purple-600">Docker</Badge>
                <Badge className="bg-purple-600">Firebase</Badge>
                <Badge className="bg-purple-600">NPM</Badge>
                <Badge className="bg-purple-600">Composer</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default skills;

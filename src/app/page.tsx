import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Code, Gamepad2, Cpu, Layers, Terminal, ExternalLink, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background overlay */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      {/* Grid lines overlay */}
      <div className="fixed inset-0 z-0 bg-[url('./assets/images/background.png')] bg-center opacity-5"></div>

      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="border-b border-purple-900/30 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl tracking-tight">
                Brett<span className="text-purple-500">Reader</span>
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-purple-400 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-purple-400 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </nav>
            <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
              Resume
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-500">Brett</span>
              <span className="animate-blink ml-1">_</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300">
              Software Developer & Gaming Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I build immersive digital experiences with code. Turning complex problems into elegant solutions is my
              game.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <Code className="mr-2 text-purple-500" />
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg border-2 border-purple-500/50">
                  <Image src="/placeholder.svg?height=400&width=400" alt="Brett" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate software developer with a background in computer science and a lifelong love for
                  video games. This intersection of interests has shaped my approach to development—I create
                  applications that are not only functional but also engaging and intuitive.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  With 5+ years of experience building web and mobile applications, I specialize in creating responsive,
                  performant solutions that solve real problems. When I'm not coding, you'll find me gaming,
                  contributing to open-source projects, or exploring new technologies.
                </p>
                <div className="flex gap-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:contact@brettdev.com">
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

        {/* Skills Section */}
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

        {/* Projects Section */}
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
                  <Image src="/placeholder.svg?height=300&width=500" alt="Project 1" fill className="object-cover" />
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
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      MongoDB
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Built a full-stack application that allows gamers to create profiles, share gameplay videos, and
                    connect with other players.
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
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src="/placeholder.svg?height=300&width=500" alt="Project 2" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle>Pixel Quest</CardTitle>
                  <CardDescription className="text-gray-400">A retro-style browser-based RPG game</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Canvas API
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Phaser
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Developed a browser-based RPG with pixel art graphics, featuring turn-based combat, inventory
                    system, and procedurally generated dungeons.
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
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src="/placeholder.svg?height=300&width=500" alt="Project 3" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle>DevQuest API</CardTitle>
                  <CardDescription className="text-gray-400">A RESTful API for game developers</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Node.js
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      Express
                    </Badge>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      PostgreSQL
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Created a comprehensive API that provides game developers with access to game assets, user
                    authentication, and analytics tools.
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
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
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

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
              <Mail className="mr-2 text-purple-500" />
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  Interested in working together or have a question? Feel free to reach out. I'm always open to
                  discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full bg-purple-500/10 text-purple-400">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <span className="text-gray-300">contact@brettdev.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full bg-purple-500/10 text-purple-400">
                      <Github className="h-5 w-5" />
                    </Button>
                    <span className="text-gray-300">github.com/brettdev</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full bg-purple-500/10 text-purple-400">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <span className="text-gray-300">linkedin.com/in/brettdev</span>
                  </div>
                </div>
              </div>
              <Card className="bg-gray-900/50 border-purple-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-purple-900/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Gamepad2 className="h-5 w-5 text-purple-500" />
                <span className="font-bold">
                  Brett<span className="text-purple-500">Dev</span>
                </span>
              </div>
              <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Brett. All rights reserved.</div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-purple-500/10 hover:text-purple-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:contact@brettdev.com">
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
        </footer>
      </div>
    </div>
  )
}


import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Mail className="mr-2 text-purple-500" />
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Interested in working together or have a question? Feel free to
              reach out. I'm always open to discussing new projects, creative
              ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <span className="text-gray-300">contact@brettdev.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <span className="text-gray-300">github.com/brettdev</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                >
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
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-300"
                    >
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
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-300"
                    >
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
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default contact;

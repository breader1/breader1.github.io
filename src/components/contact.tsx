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
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
const contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <Mail className="mr-2 text-purple-500" />
          Get In Touch With Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Got a project idea or just want to chat? I'm always up for new
              challenges, cool collaborations, or hearing about what you're
              working on.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                  asChild
                >
                  <Link
                    href="mailto:brett.reader@shaw.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
                <span className="text-gray-300">brett.reader@shaw.ca</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                  asChild
                >
                  <Link
                    href="https://github.com/breader1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <span className="text-gray-300">github.com/breader1</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-purple-500/10 text-purple-400"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/breader1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <span className="text-gray-300">linkedin.com/in/breader1</span>
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
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default contact;

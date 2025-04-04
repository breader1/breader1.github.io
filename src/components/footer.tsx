import { Mail } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Gamepad2 className="h-5 w-5 text-purple-500" />
            <span className="font-bold">
              Brett<span className="text-purple-500">Reader</span>
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Brett Reader. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;

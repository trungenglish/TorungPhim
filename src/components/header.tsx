"use client";

import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 md:hidden" />
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl">TorungPhim</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Movies
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            TV Shows
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Genres
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Trending
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search movies..."
                className="pl-10 w-64"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
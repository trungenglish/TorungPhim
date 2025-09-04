"use client";

import { Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-b from-black/20 to-black/80 flex items-center">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span className="bg-primary px-2 py-1 rounded text-primary-foreground">Featured</span>
            <span>2024</span>
            <span>•</span>
            <span>Action, Thriller</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>8.5</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            The Dark
            <br />
            <span className="text-primary">Knight</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, 
            Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button size="lg" className="px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Now
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Plus className="mr-2 h-5 w-5" />
              Add to List
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Duration: 152 min</span>
            <span>Rating: PG-13</span>
            <span>Release: 2008</span>
          </div>
        </div>
      </div>
    </section>
  );
}
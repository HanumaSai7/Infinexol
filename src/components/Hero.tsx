import React from 'react';
import { Building2, Landmark, CircleDollarSign, Building } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 min-h-[calc(100vh-4rem)] flex items-center pt-16 md:pt-0 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-gradient">
              <span className="block mb-4 leading-tight">Technical Expertise Should Never</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Limit Your Growth</span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl font-light text-blue-100 leading-relaxed">
              We're your Avengers-level tech team, assembling world-class expertise and superpowered solutions to accelerate your digital transformation
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 md:mt-16 text-center">
            <blockquote className="text-blue-200 italic text-lg md:text-xl font-light">
              "Infinexol's team delivered 40% faster cloud migration with exceptional precision."
            </blockquote>
            <p className="mt-4 text-blue-400 text-base md:text-lg font-medium">— Leading BFSI providers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
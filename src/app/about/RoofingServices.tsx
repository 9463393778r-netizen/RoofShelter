'use client'
import React from 'react';
import Image from 'next/image';
const RoofingServices = () => {
    const features = [
      {
        title: "Experienced Team",
        description: "Dedicated professionals with years of expertise ensure top-quality roofing solutions."
      },
      {
        title: "Quality Assurance",
        description: "We guarantee superior craftsmanship and use high-grade materials for lasting durability."
      },
      {
        title: "Customer Satisfaction",
        description: "Our priority is your satisfaction, reflected in our reliable service and excellent results."
      },
      {
        title: "Competitive Pricing",
        description: "Transparent pricing ensures value without compromising on quality or service."
      }
    ];
  
    return (
      <section className="min-h-screen bg-background text-foreground py-16 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="relative">
              {/* Vertical Text */}
              <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-4">
                  <div className="h-32 w-px bg-muted-foreground"></div>
                  <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
                    Why choose us
                  </p>
                </div>
              </div>
  
              {/* Main Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="text-foreground block">Why choose our</span>
                    <span className="text-primary">Roofing services</span>
                  </h2>
                  <p className="mt-6 text-muted-foreground text-lg max-w-xl">
                    Roofcrafters is dedicated to offering our customers top-quality products at fair prices. 
                    Expect exceptional installation and unwavering honesty throughout your project.
                  </p>
                </div>
  
                {/* Features List */}
                <div className="space-y-6 pt-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 group">
                      {/* Custom Checkmark Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <svg 
                          className="w-5 h-5 text-primary" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2.5} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Right Image with Geometric Frame */}
            <div className="relative lg:ml-auto">
              <div className="relative max-w-lg mx-auto lg:mx-0">
                {/* Geometric Frame Elements */}
                <div className="absolute -inset-4 lg:-inset-6">
                  {/* Top Left Corner */}
                  <div className="absolute top-0 left-0 w-24 lg:w-32 h-24 lg:h-32 border-t-4 border-l-4 border-foreground"></div>
                  
                  {/* Top Right Corner */}
                  <div className="absolute top-0 right-0 w-16 lg:w-24 h-16 lg:h-24 border-t-4 border-r-4 border-foreground"></div>
                  
                  {/* Bottom Left Corner */}
                  <div className="absolute bottom-0 left-0 w-16 lg:w-24 h-16 lg:h-24 border-b-4 border-l-4 border-foreground"></div>
                  
                  {/* Bottom Right Corner */}
                  <div className="absolute bottom-0 right-0 w-24 lg:w-32 h-24 lg:h-32 border-b-4 border-r-4 border-foreground"></div>
                </div>
  
                {/* Diagonal Frame Accents */}
                <div className="absolute -bottom-8 -right-8 w-40 lg:w-48 h-40 lg:h-48">
                  <div className="absolute inset-0 bg-foreground transform rotate-45 opacity-90"></div>
                  <div className="absolute inset-2 bg-background transform rotate-45"></div>
                </div>
  
                {/* Main Image */}
                <div className="relative z-10 aspect-[3/4] overflow-hidden bg-card">
                  <Image 
                    src="/images/services.jpg"
                    alt="Professional roofing contractor" 
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Bottom Frame Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
  
                {/* Accent Dot */}
                <div className="absolute -top-6 -left-6 w-4 h-4 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Background Accent Elements */}
        <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-primary/40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-primary/30"></div>
      </section>
    );
  };
  
  export default RoofingServices;
  
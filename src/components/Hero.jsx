import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl lg:text-6xl font-light text-neutral-800 leading-tight tracking-tight">
                Timeless Elegance
              </h1>
              <p className="text-lg text-neutral-600 mt-8 leading-relaxed tracking-wide">
                Discover our exquisite collection of premium jewelry, crafted for those who appreciate luxury and sophistication
              </p>
            </div>
            
            <div>
              <Link to="/collections" className="btn-primary inline-block">
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="featured-badge">
              Featured
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src="/image.png" 
                alt="Premium jewelry collection featuring elegant rings and accessories"
                className="w-full h-96 lg:h-128 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'

const About = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-tight">
            About LUXE
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content without image */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-normal text-neutral-800 mb-6 tracking-wide">
                Our Story
              </h2>
              <p className="text-neutral-600 leading-relaxed tracking-wide">
                Founded with a passion for exceptional craftsmanship, LUXE has been creating timeless 
                jewelry pieces for discerning clients who appreciate the finer things in life. Our journey 
                began with a simple mission: to create jewelry that transcends trends and becomes 
                cherished heirlooms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-normal text-neutral-800 mb-6 tracking-wide">
                Our Craftsmanship
              </h2>
              <p className="text-neutral-600 leading-relaxed tracking-wide">
                Every piece in our collection is meticulously handcrafted by master artisans with decades of 
                experience. We use only the finest materials - ethically sourced diamonds, premium gold, 
                and sterling silver - ensuring each creation meets our exacting standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-normal text-neutral-800 mb-6 tracking-wide">
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-neutral-600">
                  <svg className="w-5 h-5 text-gold-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Excellence in every detail
                </li>
                <li className="flex items-center text-neutral-600">
                  <svg className="w-5 h-5 text-gold-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ethical sourcing and sustainability
                </li>
                <li className="flex items-center text-neutral-600">
                  <svg className="w-5 h-5 text-gold-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Timeless design philosophy
                </li>
                <li className="flex items-center text-neutral-600">
                  <svg className="w-5 h-5 text-gold-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Exceptional customer service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
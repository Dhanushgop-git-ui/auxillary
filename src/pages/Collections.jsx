import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Earrings', 'Rings', 'Necklaces', 'Bracelets']

  const products = [
    {
      id: 1,
      name: "Green Sapphire Snowflake Ring",
      category: "RINGS",
      price: 2400,
      image: "/images/Diamond%20Cluster%20Ring%20_%20Green%20Sapphire%20Diamond%20Cluster%20Snowflake%20Ring%20_%20Diamond%20Snowflake%20Ring%20_%20Cluster%20Diamond%20Ring%20With%20Green%20Sapphire%20-%20Etsy.jpg",
      description: "Unique snowflake-inspired cluster ring featuring a stunning green sapphire center surrounded by brilliant diamonds in gold setting.",
      featured: true,
      type: "Rings"
    },
    {
      id: 2,
      name: "Gold Stacking Bangle Set",
      category: "BRACELETS",
      price: 1850,
      image: "/images/6-Piece%20Set%20Of%20Sleek%20Gold-Tone%20Stacking%20Bangle%20Bracelets%20For%20Women%20-%20Vintage%20&%20Minimalist%20Style,%20Iron%20Crafted,%20Perfect%20For%20Everyday%20Wear.jpg",
      description: "6-piece set of sleek gold-tone stacking bangle bracelets. Vintage & minimalist style, iron crafted, perfect for everyday wear and layering.",
      featured: true,
      type: "Bracelets"
    },
    {
      id: 3,
      name: "Twisted Diamond Bracelet",
      category: "BRACELETS",
      price: 3200,
      image: "/images/download%20(5).jpg",
      description: "Elegant twisted bracelet featuring alternating gold and diamond sections. A sophisticated piece that adds luxury to any ensemble.",
      featured: true,
      type: "Bracelets"
    },
    {
      id: 4,
      name: "Gold Pearl Stud Earrings",
      category: "EARRINGS",
      price: 950,
      image: "/images/Gold%20Pearl%20Stud%20Earrings%20_%20Simple%20Gold%20Earrings%20For%20Women.jpg",
      description: "Classic gold pearl stud earrings with textured gold surrounds. Timeless elegance perfect for everyday luxury or special occasions.",
      featured: true,
      type: "Earrings"
    },
    {
      id: 5,
      name: "Diamond Geometric Necklace",
      category: "NECKLACES",
      price: 2800,
      image: "/images/Women's%20Jewelry%20_%20Fashion%20Jewelry%20for%20Women.jpg",
      description: "Stunning geometric diamond necklace featuring mixed-cut diamonds in a sophisticated gold setting. Perfect for special occasions and elegant evenings.",
      featured: false,
      type: "Necklaces"
    },
    {
      id: 6,
      name: "Rhinestone Leaf Drop Earrings",
      category: "EARRINGS",
      price: 1650,
      image: "/images/Rhinestone%20Leaf%20Drop%20Earrings.jpg",
      description: "Exquisite leaf-inspired drop earrings with intricate rhinestone detailing. These elegant pieces capture nature's beauty in luxurious gold.",
      featured: false,
      type: "Earrings"
    }
  ]

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.type === activeFilter)

  return (
    <section className="py-20 lg:py-28 bg-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-10 tracking-tight">
            Our Collections
          </h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`btn-filter ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
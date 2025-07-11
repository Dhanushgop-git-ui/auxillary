import React from 'react'
import ProductCard from './ProductCard'

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: "Green Sapphire Snowflake Ring",
      category: "RINGS",
      price: 2400,
      image: "/image.png",
      description: "Unique snowflake-inspired cluster ring featuring a stunning green sapphire center surrounded by brilliant diamonds in gold setting.",
      featured: true
    },
    {
      id: 2,
      name: "Gold Pearl Stud Earrings",
      category: "EARRINGS",
      price: 950,
      image: "/images/Gold%20Pearl%20Stud%20Earrings%20_%20Simple%20Gold%20Earrings%20For%20Women.jpg",
      description: "Classic gold pearl stud earrings with textured gold surrounds. Timeless elegance perfect for everyday luxury or special occasions.",
      featured: true
    },
    {
      id: 3,
      name: "Diamond Geometric Necklace",
      category: "NECKLACES",
      price: 2800,
      image: "/images/Women's%20Jewelry%20_%20Fashion%20Jewelry%20for%20Women.jpg",
      description: "Stunning geometric diamond necklace featuring mixed-cut diamonds in a sophisticated gold setting. Perfect for special occasions and elegant evenings.",
      featured: true
    },
    {
      id: 4,
      name: "Rhinestone Leaf Drop Earrings",
      category: "EARRINGS",
      price: 1650,
      image: "/images/Rhinestone%20Leaf%20Drop%20Earrings.jpg",
      description: "Exquisite leaf-inspired drop earrings with intricate rhinestone detailing. These elegant pieces capture nature's beauty in luxurious gold.",
      featured: true
    },
    {
      id: 5,
      name: "Gold Stacking Bangle Set",
      category: "BRACELETS",
      price: 1200,
      image: "/images/6-Piece Set Of Sleek Gold-Tone Stacking Bangle Bracelets For Women - Vintage & Minimalist Style, Iron Crafted, Perfect For Everyday Wear.jpg",
      description: "Elegant set of 6 sleek gold-tone stacking bangles. Vintage-inspired minimalist design perfect for everyday luxury and versatile styling.",
      featured: true
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-800 mb-6 tracking-tight">
            Featured Collection
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto tracking-wide">
            Handpicked pieces that embody luxury and craftsmanship
          </p>
        </div>

        {/* Products Grid - Always 3 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection
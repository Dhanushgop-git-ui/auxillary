import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Special detailed images for specific products
  const getDetailedImage = (productName) => {
    if (productName === "Green Sapphire Snowflake Ring") {
      return "/images/A_elegant_womans_hand_wearing_a_delicate_gold_rin-1751213105123.png"
    }
    if (productName === "Gold Pearl Stud Earrings") {
      return "/images/An_elegant_woman_wearing_beautiful_gold_pearl_halo-1751213134657 copy.png"
    }
    if (productName === "Rhinestone Leaf Drop Earrings") {
      return "/images/ChatGPT Image Jun 29, 2025, 09_06_18 PM.png"
    }
    if (productName === "Diamond Geometric Necklace") {
      return "/images/ChatGPT Image Jun 29, 2025, 09_49_30 PM.png"
    }
    if (productName === "Gold Stacking Bangle Set") {
      return "/images/ChatGPT Image Jun 30, 2025, 08_29_38 PM.png"
    }
    if (productName === "Diamond Bezel Nose Ring") {
      return "/images/ChatGPT Image Jul 11, 2025, 02_54_17 PM.png"
    }
    return null
  }

  const detailedImage = getDetailedImage(product.name)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group relative">
      {/* Product Image */}
      {product.image && (
        <div 
          className="relative overflow-hidden bg-cream-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {product.featured && (
            <div className="featured-badge">
              Featured
            </div>
          )}
          <div className="w-full h-64 flex items-center justify-center p-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          
          {/* Clean Detailed Hover Overlay - Image Only */}
          {detailedImage && isHovered && (
            <div className="absolute inset-0 bg-white flex items-center justify-center z-20 transition-opacity duration-300 p-4">
              <img 
                src={detailedImage}
                alt={`${product.name} - Detailed high-resolution view`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="eager"
              />
            </div>
          )}
        </div>
      )}

      {/* Product Info */}
      <div className="p-8">
        {product.featured && !product.image && (
          <div className="mb-4">
            <span className="bg-gold-400 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}
        
        <div className="mb-3">
          <span className="text-xs font-medium text-gold-500 uppercase tracking-[0.1em]">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-normal text-neutral-800 mb-4 tracking-wide">
          {product.name}
        </h3>
        
        <p className="text-neutral-600 text-sm leading-relaxed mb-8 line-clamp-3 tracking-wide">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-neutral-800 tracking-wide">
            {formatPrice(product.price)}
          </div>
          
          <Link 
            to={`/product/${product.id}`}
            className="btn-secondary hover:shadow-lg transition-shadow duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
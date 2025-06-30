import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  // Sample product data - in a real app, this would come from an API
  const products = {
    1: {
      id: 1,
      name: "Green Sapphire Snowflake Ring",
      category: "RINGS",
      price: 2400,
      originalPrice: 2800,
      description: "Unique snowflake-inspired cluster ring featuring a stunning green sapphire center surrounded by brilliant diamonds in gold setting.",
      longDescription: "This extraordinary piece captures the delicate beauty of a snowflake in precious metal and gemstones. The centerpiece green sapphire, sourced from the finest mines of Ceylon, displays exceptional clarity and a mesmerizing forest green hue. Each surrounding diamond has been carefully selected for its brilliance and fire, creating a stunning contrast against the rich gold setting.",
      designStory: "Inspired by the intricate patterns found in nature's snowflakes, this ring represents the unique beauty that emerges from perfect symmetry. Our master craftsmen spent over 40 hours creating this piece, ensuring each diamond is positioned to maximize light reflection and create the signature snowflake silhouette.",
      stylingTips: "Perfect for special occasions or as a statement piece for evening wear. Pairs beautifully with simple gold bands or can be worn alone for maximum impact. The unique design makes it an ideal conversation starter at formal events.",
      careInstructions: "Clean gently with warm soapy water and a soft brush. Avoid harsh chemicals and ultrasonic cleaners. Store separately to prevent scratching. Professional cleaning recommended every 6 months.",
      images: [
        "/images/Diamond%20Cluster%20Ring%20_%20Green%20Sapphire%20Diamond%20Cluster%20Snowflake%20Ring%20_%20Diamond%20Snowflake%20Ring%20_%20Cluster%20Diamond%20Ring%20With%20Green%20Sapphire%20-%20Etsy.jpg",
        "/images/A_elegant_womans_hand_wearing_a_delicate_gold_rin-1751213105123.png",
        "/images/Diamond%20Cluster%20Ring%20_%20Green%20Sapphire%20Diamond%20Cluster%20Snowflake%20Ring%20_%20Diamond%20Snowflake%20Ring%20_%20Cluster%20Diamond%20Ring%20With%20Green%20Sapphire%20-%20Etsy%20copy.jpg",
        "/images/Diamond%20Cluster%20Ring%20_%20Green%20Sapphire%20Diamond%20Cluster%20Snowflake%20Ring%20_%20Diamond%20Snowflake%20Ring%20_%20Cluster%20Diamond%20Ring%20With%20Green%20Sapphire%20-%20Etsy%20copy%20copy.jpg"
      ],
      specifications: {
        metalType: "18K Yellow Gold",
        metalPurity: "75% Gold Content",
        centerStone: "1.2ct Ceylon Green Sapphire",
        accentStones: "0.8ct Total Diamond Weight",
        clarity: "VS1-VS2 Diamond Clarity",
        cut: "Round Brilliant Cut Diamonds",
        dimensions: "15mm x 15mm face",
        bandWidth: "2.5mm",
        weight: "4.2 grams",
        certification: "GIA Certified"
      },
      sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$800 x 3 payments" },
        { name: "6 Months", description: "$400 x 6 payments" },
        { name: "12 Months", description: "$200 x 12 payments" }
      ]
    },
    2: {
      id: 2,
      name: "Gold Stacking Bangle Set",
      category: "BRACELETS",
      price: 1850,
      originalPrice: 2100,
      description: "6-piece set of sleek gold-tone stacking bangle bracelets. Vintage & minimalist style, iron crafted, perfect for everyday wear and layering.",
      longDescription: "This sophisticated set of six bangles offers endless styling possibilities. Each piece is carefully crafted with varying textures and finishes, from high-polish to brushed gold tones. The collection includes different widths and subtle design variations that create visual interest when worn together or separately.",
      designStory: "Drawing inspiration from ancient Egyptian jewelry traditions, these bangles represent the timeless appeal of stacked arm adornments. The varying textures tell a story of craftsmanship evolution, from traditional hammered techniques to modern precision finishing.",
      stylingTips: "Wear all six for maximum impact, or mix and match with your existing jewelry. Perfect for both casual and formal occasions. Layer with watches or other bracelets for a curated, collected-over-time look.",
      careInstructions: "Wipe clean with a soft cloth after each wear. Avoid contact with perfumes and lotions. Store in individual pouches to prevent scratching between pieces.",
      images: [
        "/images/6-Piece%20Set%20Of%20Sleek%20Gold-Tone%20Stacking%20Bangle%20Bracelets%20For%20Women%20-%20Vintage%20&%20Minimalist%20Style,%20Iron%20Crafted,%20Perfect%20For%20Everyday%20Wear.jpg",
        "/images/ChatGPT Image Jun 30, 2025, 08_29_38 PM.png"
      ],
      specifications: {
        metalType: "Gold-Plated Iron",
        metalPurity: "18K Gold Plating",
        setIncludes: "6 Individual Bangles",
        diameter: "65mm Internal Diameter",
        width: "2mm - 8mm (Varied)",
        thickness: "1.5mm",
        weight: "45 grams (Total Set)",
        finish: "Mixed (Polish & Brushed)"
      },
      sizes: ["Small (60mm)", "Medium (65mm)", "Large (70mm)"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$617 x 3 payments" },
        { name: "6 Months", description: "$308 x 6 payments" }
      ]
    },
    3: {
      id: 3,
      name: "Twisted Diamond Bracelet",
      category: "BRACELETS",
      price: 3200,
      originalPrice: 3600,
      description: "Elegant twisted bracelet featuring alternating gold and diamond sections. A sophisticated piece that adds luxury to any ensemble.",
      longDescription: "This exquisite bracelet showcases the perfect marriage of classic design and contemporary craftsmanship. The twisted rope pattern creates dynamic movement and light play, while strategically placed diamonds add brilliant sparkle at every turn. Each diamond section is meticulously set to ensure maximum security and brilliance.",
      designStory: "The twisted rope motif has been a symbol of strength and unity throughout history. Our interpretation elevates this classic design with precision-cut diamonds that follow the natural flow of the twist, creating a piece that's both timeless and thoroughly modern.",
      stylingTips: "Perfect as a standalone statement piece or layered with simpler bracelets. The twisted design catches light beautifully, making it ideal for evening events. Complements both warm and cool-toned metals in your jewelry collection.",
      careInstructions: "Clean with a soft brush and mild soap solution. Avoid harsh chemicals and abrasive materials. Professional cleaning recommended annually to maintain diamond brilliance.",
      images: [
        "/images/download%20(5).jpg",
        "/images/ChatGPT Image Jun 30, 2025, 09_31_31 PM.png",
        "/images/download%20(5)%20copy.jpg",
        "/images/download%20(5)%20copy%20copy.jpg"
      ],
      specifications: {
        metalType: "14K White Gold",
        metalPurity: "58.3% Gold Content",
        diamonds: "1.5ct Total Weight",
        clarity: "VS2 Average",
        cut: "Round Brilliant",
        length: "7.5 inches",
        width: "6mm",
        weight: "12.8 grams",
        clasp: "Hidden Safety Clasp"
      },
      sizes: ["7 inches", "7.5 inches", "8 inches"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$1,067 x 3 payments" },
        { name: "6 Months", description: "$533 x 6 payments" },
        { name: "12 Months", description: "$267 x 12 payments" }
      ]
    }
  }

  const product = products[id]

  useEffect(() => {
    if (!product) return
    // Reset state when product changes
    setSelectedImageIndex(0)
    setIsZoomed(false)
    setSelectedSize('')
    setQuantity(1)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-neutral-800 mb-4">Product Not Found</h1>
          <Link to="/collections" className="btn-primary">
            Back to Collections
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size before adding to cart.')
      return
    }
    alert(`Added ${quantity} x ${product.name} to cart!`)
  }

  const handleRequestInfo = () => {
    alert('Request for more information sent! We will contact you within 24 hours.')
  }

  const handleAddToWishlist = () => {
    alert(`${product.name} added to your wishlist!`)
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-neutral-500 hover:text-gold-500 tracking-wide">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link to="/collections" className="text-neutral-500 hover:text-gold-500 tracking-wide">Collections</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-800 tracking-wide">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div 
                className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className={`w-full h-96 lg:h-128 object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                />
                {!isZoomed && (
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-2 rounded-full text-xs">
                    Click to zoom
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImageIndex(index)
                    setIsZoomed(false)
                  }}
                  className={`relative bg-white rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'border-gold-400 shadow-lg' 
                      : 'border-neutral-200 hover:border-gold-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-20 object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="mb-3">
                <span className="text-sm font-medium text-gold-500 uppercase tracking-[0.1em]">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-4 tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-light text-neutral-800">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-neutral-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-neutral-600 leading-relaxed tracking-wide mb-6">
                {product.longDescription}
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-medium text-neutral-800 mb-4 tracking-wide">Size</h3>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 border rounded-lg text-center transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-gold-400 bg-gold-50 text-gold-700'
                          : 'border-neutral-300 hover:border-gold-300 text-neutral-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-neutral-800 mb-4 tracking-wide">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                >
                  -
                </button>
                <span className="text-lg font-medium text-neutral-800 w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-neutral-300 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gold-400 hover:bg-gold-500 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg text-lg tracking-wide"
              >
                Add to Cart - {formatPrice(product.price * quantity)}
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleRequestInfo}
                  className="btn-secondary py-3 text-center"
                >
                  Request Info
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="border border-neutral-300 text-neutral-700 hover:border-gold-400 hover:text-gold-600 py-3 px-6 rounded-full transition-all duration-300 text-sm tracking-wide"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Payment Plans */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-medium text-neutral-800 mb-4 tracking-wide">Payment Options</h3>
              <div className="space-y-3">
                {product.paymentPlans.map((plan, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="text-neutral-700 tracking-wide">{plan.name}</span>
                    <span className="text-neutral-600 text-sm tracking-wide">{plan.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-sm text-neutral-600 tracking-wide">
                {product.inStock ? 'In Stock - Ships within 2-3 business days' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
              {/* Design Story */}
              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-4 tracking-wide">Design Story</h3>
                <p className="text-neutral-600 leading-relaxed tracking-wide text-sm">
                  {product.designStory}
                </p>
              </div>

              {/* Styling Tips */}
              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-4 tracking-wide">Styling Tips</h3>
                <p className="text-neutral-600 leading-relaxed tracking-wide text-sm">
                  {product.stylingTips}
                </p>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-4 tracking-wide">Care Instructions</h3>
                <p className="text-neutral-600 leading-relaxed tracking-wide text-sm">
                  {product.careInstructions}
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-medium text-neutral-800 mb-4 tracking-wide">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="text-neutral-500 capitalize tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-neutral-700 ml-2 tracking-wide">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
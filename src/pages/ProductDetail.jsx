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
        "/images/Diamond%20Cluster%20Ring%20_%20Green%20Sapphire%20Diamond%20Cluster%20Snowflake%20Ring%20_%20Diamond%20Snowflake%20Ring%20_%20Cluster%20Diamond%20Ring%20With%20Green%20Sapphire%20-%20Etsy%20copy.jpg",
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
      name: "Gold Pearl Stud Earrings",
      category: "EARRINGS",
      price: 950,
      originalPrice: 1100,
      description: "Classic gold pearl stud earrings with textured gold surrounds. Timeless elegance perfect for everyday luxury or special occasions.",
      longDescription: "These sophisticated pearl stud earrings feature lustrous cultured pearls nestled within intricately textured gold settings. The combination of smooth pearl surfaces and detailed metalwork creates a captivating contrast that catches light from every angle. Each pearl is hand-selected for its exceptional luster and perfectly round shape.",
      designStory: "Inspired by the timeless elegance of vintage jewelry, these earrings pay homage to the classic pearl stud while adding contemporary textural elements. The surrounding gold work draws inspiration from Art Deco sunburst patterns, creating a modern heirloom piece.",
      stylingTips: "Perfect for both day and evening wear. The neutral palette complements any outfit, from casual to formal. Ideal for layering with other earrings or wearing alone for understated elegance. The textured gold adds visual interest without overwhelming delicate features.",
      careInstructions: "Clean pearls gently with a soft, damp cloth. Avoid harsh chemicals, perfumes, and hairspray. Store separately in a soft pouch. The gold setting can be cleaned with mild soap and water.",
      images: [
        "/images/Gold%20Pearl%20Stud%20Earrings%20_%20Simple%20Gold%20Earrings%20For%20Women.jpg",
        "/images/An_elegant_woman_wearing_beautiful_gold_pearl_halo-1751213134657%20copy.png",
        "/images/Gold%20Pearl%20Stud%20Earrings%20_%20Simple%20Gold%20Earrings%20For%20Women%20copy.jpg"
      ],
      specifications: {
        metalType: "14K Yellow Gold",
        metalPurity: "58.3% Gold Content",
        pearlType: "Cultured Freshwater Pearls",
        pearlSize: "8mm Diameter",
        pearlGrade: "AAA Quality",
        setting: "Textured Halo Setting",
        backType: "Butterfly Clutch",
        weight: "3.2 grams (pair)",
        dimensions: "12mm Overall Diameter"
      },
      sizes: ["One Size"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$317 x 3 payments" },
        { name: "6 Months", description: "$158 x 6 payments" }
      ]
    },
    6: {
      id: 6,
      name: "Diamond Geometric Necklace",
      category: "NECKLACES",
      price: 2800,
      originalPrice: 3200,
      description: "Stunning geometric diamond necklace featuring mixed-cut diamonds in a sophisticated gold setting. Perfect for special occasions and elegant evenings.",
      longDescription: "This striking necklace showcases a modern interpretation of classic diamond jewelry. The geometric pendant features a carefully curated selection of diamond cuts - round brilliants, emerald cuts, and baguettes - arranged in a contemporary pattern that maximizes light reflection and creates stunning visual impact. The delicate chain perfectly balances the bold pendant design.",
      designStory: "Drawing inspiration from Art Deco architecture and modern geometric art, this necklace represents the intersection of mathematical precision and natural beauty. Each diamond is positioned to create optimal light play while maintaining perfect symmetry in the overall design.",
      stylingTips: "This statement piece is perfect for evening events, formal occasions, or when you want to elevate a simple outfit. Pairs beautifully with strapless dresses or open necklines. The geometric design complements both modern and classic styling.",
      careInstructions: "Clean with a soft brush and mild soap solution. Avoid harsh chemicals and store in a jewelry box to prevent tangling. Professional cleaning recommended every 6 months to maintain diamond brilliance.",
      images: [
        "/images/Women's%20Jewelry%20_%20Fashion%20Jewelry%20for%20Women.jpg",
        "/images/ChatGPT Image Jun 29, 2025, 09_49_30 PM.png",
        "/images/Women's%20Jewelry%20_%20Fashion%20Jewelry%20for%20Women%20copy.jpg"
      ],
      specifications: {
        metalType: "18K White Gold",
        metalPurity: "75% Gold Content",
        diamonds: "2.1ct Total Weight",
        clarity: "VS1-VS2 Average",
        cuts: "Mixed (Round, Emerald, Baguette)",
        chainLength: "18 inches",
        pendantSize: "25mm x 20mm",
        chainWidth: "1.2mm",
        weight: "8.5 grams",
        clasp: "Spring Ring Clasp"
      },
      sizes: ["16 inches", "18 inches", "20 inches"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$933 x 3 payments" },
        { name: "6 Months", description: "$467 x 6 payments" },
        { name: "12 Months", description: "$233 x 12 payments" }
      ]
    },
    7: {
      id: 7,
      name: "Rhinestone Leaf Drop Earrings",
      category: "EARRINGS",
      price: 1650,
      originalPrice: 1900,
      description: "Exquisite leaf-inspired drop earrings with intricate rhinestone detailing. These elegant pieces capture nature's beauty in luxurious gold.",
      longDescription: "These enchanting drop earrings celebrate the organic beauty of nature through meticulous craftsmanship. Each leaf is hand-detailed with precisely placed rhinestones that follow the natural veining patterns found in real leaves. The graceful drop design creates elegant movement while the intricate detailing catches and reflects light with every gesture.",
      designStory: "Inspired by the delicate beauty of autumn leaves, these earrings represent the perfect harmony between nature and luxury. Our artisans studied real leaf structures to create the most authentic and beautiful interpretation, with each rhinestone placement carefully considered to enhance the natural flow.",
      stylingTips: "Perfect for romantic dinners, garden parties, or any occasion where you want to add a touch of natural elegance. The drop design elongates the neck beautifully. Pairs wonderfully with both earth tones and jewel colors.",
      careInstructions: "Clean gently with a soft cloth. Avoid water and harsh chemicals which may affect the rhinestone settings. Store in individual pouches to prevent tangling and protect the delicate details.",
      images: [
        "/images/Rhinestone%20Leaf%20Drop%20Earrings.jpg",
        "/images/ChatGPT Image Jun 29, 2025, 09_06_18 PM.png",
        "/images/Rhinestone%20Leaf%20Drop%20Earrings%20copy.jpg"
      ],
      specifications: {
        metalType: "Gold-Plated Brass",
        metalPurity: "18K Gold Plating",
        stones: "Austrian Crystal Rhinestones",
        stoneCount: "42 Rhinestones per earring",
        dropLength: "45mm",
        leafWidth: "18mm",
        weight: "4.8 grams (pair)",
        backType: "French Hook",
        finish: "High Polish Gold"
      },
      sizes: ["One Size"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$550 x 3 payments" },
        { name: "6 Months", description: "$275 x 6 payments" }
      ]
    },
    5: {
      id: 5,
      name: "Gold Stacking Bangle Set",
      category: "BRACELETS",
      price: 1200,
      originalPrice: 1400,
      description: "Elegant set of 6 sleek gold-tone stacking bangles. Vintage-inspired minimalist design perfect for everyday luxury and versatile styling.",
      longDescription: "This sophisticated set of six stacking bangles offers endless styling possibilities. Each bangle features a sleek, minimalist design with a warm gold-tone finish that complements any outfit. The varying widths and subtle textural differences create visual interest when worn together, while each piece is beautiful enough to wear individually. Crafted with attention to detail, these bangles represent the perfect balance of vintage charm and contemporary elegance.",
      designStory: "Inspired by the timeless appeal of vintage jewelry collections, this stacking set celebrates the art of layering. The design draws from mid-century modern aesthetics, where clean lines and geometric forms created lasting beauty. Each bangle in the set has been carefully proportioned to work harmoniously with the others, creating a cohesive look that's both sophisticated and effortlessly chic.",
      stylingTips: "Perfect for creating layered looks - wear all six together for maximum impact, or mix and match with other bracelets in your collection. The neutral gold tone pairs beautifully with both warm and cool colors. Ideal for both casual and formal occasions, from office meetings to evening events. Stack with watches or wear alone for a minimalist statement.",
      careInstructions: "Clean with a soft, dry cloth to maintain the gold-tone finish. Avoid harsh chemicals, perfumes, and lotions. Store individually or in soft pouches to prevent scratching. Remove before swimming, showering, or exercising to preserve the finish.",
      images: [
        "/images/6-Piece Set Of Sleek Gold-Tone Stacking Bangle Bracelets For Women - Vintage & Minimalist Style, Iron Crafted, Perfect For Everyday Wear.jpg",
        "/images/ChatGPT Image Jun 30, 2025, 08_29_38 PM.png",
        "/images/6-Piece Set Of Sleek Gold-Tone Stacking Bangle Bracelets For Women - Vintage & Minimalist Style, Iron Crafted, Perfect For Everyday Wear copy.jpg"
      ],
      specifications: {
        metalType: "Gold-Tone Alloy",
        metalFinish: "High Polish Gold Plating",
        setCount: "6 Bangles",
        diameter: "2.5 inches (65mm)",
        widthRange: "2mm - 8mm",
        weight: "85 grams (complete set)",
        style: "Stacking Bangles",
        closure: "Slip-On Design",
        finish: "Tarnish Resistant"
      },
      sizes: ["Small (2.3\")", "Medium (2.5\")", "Large (2.7\")"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$400 x 3 payments" },
        { name: "6 Months", description: "$200 x 6 payments" }
      ]
    },
    8: {
      id: 8,
      name: "Diamond Bezel Nose Ring",
      category: "NOSE RINGS",
      price: 450,
      originalPrice: 520,
      description: "Elegant 14K gold nose ring featuring a brilliant diamond in a secure bezel setting. Perfect for those seeking sophisticated body jewelry with timeless appeal.",
      longDescription: "This exquisite nose ring combines the luxury of fine jewelry with the contemporary appeal of body art. Crafted from premium 14K gold, it features a brilliant-cut diamond securely held in a smooth bezel setting. The sleek design ensures comfort while making a sophisticated statement. The open-ended style allows for easy insertion and a secure, comfortable fit.",
      designStory: "Inspired by the growing trend of elevated body jewelry, this piece bridges the gap between traditional fine jewelry and modern self-expression. The bezel setting was chosen for its clean lines and secure hold, making it perfect for everyday wear while maintaining the luxury aesthetic our clients expect.",
      stylingTips: "Perfect for those new to nose piercings or anyone seeking an elegant upgrade. The neutral gold tone complements all skin tones and pairs beautifully with other gold jewelry. Ideal for professional settings where subtle sophistication is key.",
      careInstructions: "Clean gently with saline solution or mild soap and water. Avoid harsh chemicals and rotate gently during cleaning. Remove before swimming or sleeping. Professional piercing consultation recommended for proper sizing and insertion.",
      images: [
        "/images/ChatGPT Image Jul 11, 2025, 02_41_07 PM copy.png",
        "/images/ChatGPT Image Jul 11, 2025, 02_54_17 PM.png",
        "/images/ChatGPT Image Jul 11, 2025, 02_41_07 PM copy.png"
      ],
      specifications: {
        metalType: "14K Yellow Gold",
        metalPurity: "58.3% Gold Content",
        gemstone: "0.03ct Diamond",
        clarity: "VS2 Diamond Clarity",
        cut: "Round Brilliant Cut",
        setting: "Bezel Setting",
        gauge: "20G (0.8mm)",
        diameter: "8mm Internal",
        gemSize: "2mm",
        weight: "0.8 grams",
        finish: "High Polish"
      },
      sizes: ["20G", "18G"],
      inStock: true,
      paymentPlans: [
        { name: "Full Payment", description: "Pay in full today" },
        { name: "3 Months", description: "$150 x 3 payments" }
      ]
    }
  }

  const product = products[id]

  useEffect(() => {
    // Scroll to top when component mounts or product changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
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
    if (product.sizes && product.sizes.length > 1 && !selectedSize) {
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
            {product.sizes && product.sizes.length > 1 && (
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
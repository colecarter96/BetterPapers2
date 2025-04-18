import ImageCarousel from '../../components/Carousel';

const product = {
  id: '1',
  title: 'Retro Collection #1',
  price: '9.99',
  description: 'A nostalgic journey through the golden age of technology. This wallpaper features a classic GameBoy design that will transport you back to simpler times.',
  images: [
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  ],
  additionalImages: [
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
    'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  ]
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-3 md:px-4 lg:px-4 py-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          {/* Carousel */}
          <div className="w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-[-1rem]">
            <div className="block md:hidden">
              <ImageCarousel images={product.images} interval={4000} width={70} />
            </div>
            <div className="hidden md:block lg:hidden">
              <ImageCarousel images={product.images} interval={4000} width={40} />
            </div>
            <div className="hidden lg:block">
              <ImageCarousel images={product.images} interval={4000} width={30} />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center max-w-md mx-auto lg:mx-0 lg:ml-[-0.5rem]">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-2xl font-medium text-blue-500">${product.price}</p>
            </div>
            
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            <button className="bg-gray-900 text-white py-3 px-6 rounded-none mb-8 hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Additional Images */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Views</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.additionalImages.map((image, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
} 
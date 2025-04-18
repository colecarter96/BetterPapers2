import ProductCard, { QuoteCard } from '../components/ProductCard';

const images = [
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
];

const quotes = [
  "Life is too short to not enjoy every moment",
  "Find joy in the little things",
  "Your happiness is your responsibility",
  "Every day is a new opportunity",
  "Be present, be grateful",
  "Live life with purpose and passion"
];

const categories = [
  {
    title: "Retro Collection",
    description: "Relive the golden age of technology with our retro-inspired wallpapers.",
    images: images
  },
  {
    title: "Minimalist Series",
    description: "Clean, simple designs for a modern digital aesthetic.",
    images: images
  },
  {
    title: "Gaming Edition",
    description: "Show your gaming pride with these vibrant designs.",
    images: images
  }
];

export default function Wallpapers() {
  const allProducts = categories.flatMap((category, index) =>
    category.images.map((image, imgIndex) => ({
      type: 'product',
      data: {
        id: `${category.title.toLowerCase().replace(/\s+/g, '-')}-${imgIndex + 1}`,
        image,
        title: `${category.title} #${imgIndex + 1}`,
        price: (9.99 + imgIndex).toFixed(2)
      }
    }))
  );

  // Insert quote cards every third position
  const items = allProducts.reduce((acc: any[], item, index) => {
    if (index > 0 && index % 3 === 0) {
      acc.push({
        type: 'quote',
        data: {
          quote: `"${quotes[Math.floor(index / 3) % quotes.length]}"`
        }
      });
    }
    acc.push(item);
    return acc;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Our Wallpaper Collections</h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover our curated selection of digital wallpapers designed to transform your devices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          item.type === 'quote' ? (
            <QuoteCard key={`quote-${index}`} quote={item.data.quote} />
          ) : (
            <ProductCard
              key={`product-${index}`}
              id={item.data.id}
              image={item.data.image}
              title={item.data.title}
              price={item.data.price}
            />
          )
        ))}
      </div>
    </div>
  );
} 
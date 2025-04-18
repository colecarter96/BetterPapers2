interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
}

interface QuoteCardProps {
  quote: string;
}

const quotes = [
  "Life is too short to not enjoy every moment",
  "Find joy in the little things",
  "Your happiness is your responsibility",
  "Every day is a new opportunity",
  "Be present, be grateful",
  "Live life with purpose and passion"
];

export const QuoteCard = ({ quote }: QuoteCardProps) => (
  <div className="bg-blue-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 flex items-center justify-center min-h-[300px]">
    <p className="text-white text-xl font-medium text-center">{quote}</p>
  </div>
);

const ProductCard = ({ id, image, title, price }: ProductCardProps) => (
  <a href={`/wallpapers/${id}`} className="block">
    <div className="bg-white rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-blue-500 font-medium">${price}</p>
        </div>
        <button className="w-full mt-4 bg-gray-700 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  </a>
);

export default ProductCard; 

import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

const products = [
  {
    id: 1,
    name: "Fresh Fruits Bundle",
    price: 24.99,
    category: "Food",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&q=80",
  },
  {
    id: 2,
    name: "Premium Laptop",
    price: 999.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
  },
  {
    id: 4,
    name: "Kitchen Mixer",
    price: 299.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500&q=80",
  },
];

export const ProductGrid = () => {
  return (
    <div className="container px-4 py-8">
      <h2 className="mb-6 text-2xl font-semibold">Featured Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="product-card group">
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 p-4">
              <Badge variant="secondary">{product.category}</Badge>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-lg font-bold">${product.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

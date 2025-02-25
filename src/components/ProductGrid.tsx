import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

const products = [
  // Snacks & Food
  {
    id: 1,
    name: "Fresh Fruits Bundle",
    price: 24.99,
    category: "Snacks & Food",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&q=80",
  },
  {
    id: 2,
    name: "Mixed Nuts Pack",
    price: 19.99,
    category: "Snacks & Food",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&q=80",
  },
  {
    id: 3,
    name: "Organic Trail Mix",
    price: 14.99,
    category: "Snacks & Food",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&q=80",
  },
  
  // Electronics
  {
    id: 4,
    name: "Premium Laptop",
    price: 999.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
  },
  {
    id: 6,
    name: "4K Smart TV",
    price: 799.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
  },
  
  // Vehicles
  {
    id: 7,
    name: "SUV Crossover",
    price: 32999.99,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80",
  },
  {
    id: 8,
    name: "Electric Sedan",
    price: 45999.99,
    category: "Vehicles",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&q=80",
  },
  
  // Bikes
  {
    id: 9,
    name: "Mountain Bike",
    price: 899.99,
    category: "Bikes",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&q=80",
  },
  {
    id: 10,
    name: "Road Bike",
    price: 1299.99,
    category: "Bikes",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80",
  },
  
  // Mobiles
  {
    id: 11,
    name: "Flagship Smartphone",
    price: 999.99,
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80",
  },
  {
    id: 12,
    name: "Budget Phone",
    price: 299.99,
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1597740985671-a58d7d11a72b?w=500&q=80",
  },
  
  // Home
  {
    id: 13,
    name: "Modern Sofa",
    price: 899.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
  },
  {
    id: 14,
    name: "Coffee Table",
    price: 199.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1532372320978-9d4f23e9e2d7?w=500&q=80",
  },
  
  // Kitchen
  {
    id: 15,
    name: "Stand Mixer",
    price: 299.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500&q=80",
  },
  {
    id: 16,
    name: "Coffee Maker",
    price: 129.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1570486829671-acd99a75b2bc?w=500&q=80",
  },
  
  // Toys
  {
    id: 17,
    name: "Building Blocks Set",
    price: 49.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
  },
  {
    id: 18,
    name: "Remote Control Car",
    price: 79.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&q=80",
  },
  {
    id: 19,
    name: "Educational Robot Kit",
    price: 129.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1531525797753-909788756a3d?w=500&q=80",
  },
  {
    id: 20,
    name: "Plush Teddy Bear",
    price: 24.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1559454403-b4fb0b0b2b3f?w=500&q=80",
  },
  {
    id: 21,
    name: "Art Supply Set",
    price: 39.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
  },
  {
    id: 22,
    name: "Science Experiment Kit",
    price: 44.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80",
  },
  {
    id: 23,
    name: "Wooden Train Set",
    price: 89.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80",
  },
  {
    id: 24,
    name: "Dollhouse Mansion",
    price: 199.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?w=500&q=80",
  },
  {
    id: 25,
    name: "Musical Keyboard",
    price: 59.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1545293527-e26058c5b48b?w=500&q=80",
  },
  {
    id: 26,
    name: "Interactive Globe",
    price: 49.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1576239088647-8ea2781c1c76?w=500&q=80",
  },
  {
    id: 27,
    name: "Basketball Set",
    price: 34.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1494199505258-5f95387f933c?w=500&q=80",
  },
  {
    id: 28,
    name: "Play Kitchen Set",
    price: 129.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&q=80",
  },
  {
    id: 29,
    name: "Magic Kit",
    price: 29.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1632507127789-bee443b0d0be?w=500&q=80",
  },
  {
    id: 30,
    name: "Racing Track Set",
    price: 89.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&q=80",
  },
  {
    id: 31,
    name: "Puzzle Collection",
    price: 19.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1576334761529-68c11de19f71?w=500&q=80",
  },
  {
    id: 32,
    name: "Dinosaur Figure Set",
    price: 44.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=500&q=80",
  },
  {
    id: 33,
    name: "Drawing Tablet",
    price: 69.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1589136777351-efef7e0fa5e3?w=500&q=80",
  },
  {
    id: 34,
    name: "Action Figure Pack",
    price: 39.99,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1558507334-57300f59f0bd?w=500&q=80",
  }
];

interface ProductGridProps {
  selectedCategory: string | null;
}

export const ProductGrid = ({ selectedCategory }: ProductGridProps) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container px-4 py-8">
      <h2 className="mb-6 text-2xl font-semibold">
        {selectedCategory ? `${selectedCategory} Products` : "Featured Products"}
      </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
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
      )}
    </div>
  );
};

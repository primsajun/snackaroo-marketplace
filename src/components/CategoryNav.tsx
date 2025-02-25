
import { Laptop, ShoppingBag, Car, Bike, Smartphone, Home, Coffee, Gamepad } from "lucide-react";

const categories = [
  { name: "Snacks & Food", icon: ShoppingBag },
  { name: "Electronics", icon: Laptop },
  { name: "Vehicles", icon: Car },
  { name: "Bikes", icon: Bike },
  { name: "Mobiles", icon: Smartphone },
  { name: "Home", icon: Home },
  { name: "Kitchen", icon: Coffee },
  { name: "Toys", icon: Gamepad },
];

export const CategoryNav = () => {
  return (
    <div className="container px-4 py-8">
      <h2 className="mb-6 text-2xl font-semibold">Categories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center gap-2">
            <div className="category-icon">
              <category.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

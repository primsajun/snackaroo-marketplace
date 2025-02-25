
import { Laptop, ShoppingBag, Car, Bike, Smartphone, Home, Coffee, Gamepad } from "lucide-react";
import { Button } from "./ui/button";

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

interface CategoryNavProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryNav = ({ selectedCategory, onSelectCategory }: CategoryNavProps) => {
  return (
    <div className="container px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Categories</h2>
        {selectedCategory && (
          <Button 
            variant="ghost" 
            onClick={() => onSelectCategory(null)}
            className="text-sm text-muted-foreground"
          >
            Clear filter
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
            className={`flex flex-col items-center gap-2 ${
              selectedCategory === category.name ? "scale-105" : ""
            }`}
          >
            <div className={`category-icon ${
              selectedCategory === category.name ? "bg-primary text-white" : ""
            }`}>
              <category.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

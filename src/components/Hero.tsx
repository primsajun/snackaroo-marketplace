
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="container relative px-4 py-16 sm:py-24">
        <div className="animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
            Shop the best collection of products across multiple categories. From electronics to home appliances, we've got you covered.
          </p>
          <Button size="lg" className="font-semibold">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

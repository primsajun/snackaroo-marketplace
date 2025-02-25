
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryNav } from "@/components/CategoryNav";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryNav />
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;

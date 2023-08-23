import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import ProductList from "@/components/ProductList";

const products = [
  {
    id: "1",
    category: "T-Shirt",
    name: "Apple T-shirt",
    price: "$14.00",
    images: ["/img/products/Apple.jpg"],
  },
  {
    id: "2",
    category: "T-Shirt",
    name: "Github T-Shirt",
    price: "$3.00",
    images: ["/img/products/github.jpg"],
  },
  {
    id: "3",
    category: "Hoodie",
    name: "Hoodie",
    price: "$11.00",
    images: ["/img/products/Hoodie.jpg"],
  },
  {
    id: "4",
    category: "T-Shirt",
    name: "Microsoft T-Shirt",
    price: "$4.00",
    images: ["/img/products/Microsoft.jpg"],
  },
  {
    id: "5",
    category: "T-Shirts",
    name: "NPM T-Shirt",
    price: "$3.00",
    images: ["/img/products/npm.jpg"],
  },
  {
    id: "6",
    category: "T-Shirts",
    name: "React T-Shirt",
    price: "$5.00",
    images: ["/img/products/react.jpg"],
  },
  {
    id: "7",
    category: "T-Shirts",
    name: "Go T-Shirt",
    price: "$7.00",
    images: ["/img/products/go.jpg"],
  },
  {
    id: "8",
    category: "T-Shirts",
    name: "Java T-Shirt",
    price: "$2.00",
    images: ["/img/products/java.jpg"],
  },
];

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/hero.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <ShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div>
      </div>
    </Container>
  );
}

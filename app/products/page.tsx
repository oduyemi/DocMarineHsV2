import { ProductCatalogue } from "@/components/products/catalogue";
import { ProductCategories } from "@/components/products/categories";
import { ProductsHero } from "@/components/products/hero";
import { ProductQuality } from "@/components/products/quality";


export default function ProductsWa() {
  return (
    <main>
      <ProductsHero/>
      <ProductCategories />
      <div id="product-catalogue">
        <ProductCatalogue />
      </div>
      <ProductQuality />
    </main>
  );
}

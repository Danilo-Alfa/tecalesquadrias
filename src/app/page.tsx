import { FloatingCta } from "@/components/sections/FloatingCta";
import { CategoryBanners } from "@/components/store/CategoryBanners";
import { CategoryTiles } from "@/components/store/CategoryTiles";
import { CtaBanner } from "@/components/store/CtaBanner";
import { FactoryBlock } from "@/components/store/FactoryBlock";
import { ProductDetails } from "@/components/store/ProductDetails";
import { ProductGrid } from "@/components/store/ProductGrid";
import { StoreFooter } from "@/components/store/StoreFooter";
import { StoreHeader } from "@/components/store/StoreHeader";
import { StoreHero } from "@/components/store/StoreHero";
import { Topbar } from "@/components/store/Topbar";
import { WhatsBar } from "@/components/store/WhatsBar";
import { localBusinessJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd()]),
        }}
      />
      <Topbar />
      <StoreHeader />
      <WhatsBar />
      <main>
        <StoreHero />
        <CategoryBanners />
        <ProductGrid />
        <CategoryTiles />
        <CtaBanner />
        <FactoryBlock />
        <ProductDetails />
      </main>
      <StoreFooter />
      <FloatingCta />
    </>
  );
}

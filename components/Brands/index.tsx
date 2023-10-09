"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "TailAdmin",
    image: "/images/brands/us.svg",
    link: "/blog?type=usa",
  },
  {
    id: 2,
    name: "UIdeck",
    image: "/images/brands/au.svg",
    link: "/blog?type=australia",
  },
  {
    id: 3,
    name: "Tailgrids",
    image: "/images/brands/ca.svg",
    link: "/blog?type=canada",
  },
  {
    id: 4,
    name: "Lineicons",
    image: "/images/brands/de.svg",
    link: "/blog?type=germany",
  },
  {
    id: 5,
    name: "GrayGrids",
    image: "/images/brands/fr.svg",
    link: "/blog?type=france",
  },
  {
    id: 6,
    name: "TailAdmin",
    image: "/images/brands/gb.svg",
    link: "/blog?type=uk",
  },
  {
    id: 7,
    name: "TailAdmin",
    image: "/images/brands/hm.svg",
  },
  {
    id: 8,
    name: "TailAdmin",
    image: "/images/brands/ie.svg",
    link: "/blog?type=ireland",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <Link
        href={brand?.link ?? ""}
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} width={60} height={60} />
      </Link>
    </div>
  );
};

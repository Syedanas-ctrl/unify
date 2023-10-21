"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "USA",
    image: "/images/brands/us.svg",
    link: "/blog?type=usa",
  },
  {
    id: 2,
    name: "Austrailia",
    image: "/images/brands/au.svg",
    link: "/blog?type=australia",
  },
  {
    id: 3,
    name: "Canada",
    image: "/images/brands/ca.svg",
    link: "/blog?type=canada",
  },
  {
    id: 4,
    name: "Germany",
    image: "/images/brands/de.svg",
    link: "/blog?type=germany",
  },
  {
    id: 5,
    name: "France",
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
    name: "UK",
    image: "/images/brands/hm.svg",
    link: "/blog?type=uk",
  },
  {
    id: 8,
    name: "Ireland",
    image: "/images/brands/ie.svg",
    link: "/blog?type=ireland",
  },
  {
    id: 9,
    name: "Europe",
    image: "/images/brands/eu.svg",
    link: "/blog?type=europe",
  },
  {
    id: 10,
    name: "Japan",
    image: "/images/brands/jp.svg",
    link: "/blog?type=japan",
  },
  {
    id: 11,
    name: "Israel",
    image: "/images/brands/il.svg",
    link: "/blog?type=israel",
  },
  {
    id: 12,
    name: "South Korea",
    image: "/images/brands/kr.svg",
    link: "/blog?type=south-korea",
  },
  {
    id: 13,
    name: "Switzerland",
    image: "/images/brands/ch.svg",
    link: "/blog?type=switzerland",
  },
  {
    id: 14,
    name: "Singapore",
    image: "/images/brands/sg.svg",
    link: "/blog?type=singapore",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp  rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              <p className="grayscale font-bold md:text-5xl text-4xl text-[#50d71e] mx-3 mb-6 md:text-center">
                Study in
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </div>
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
    <div className="mx-3 flex items-center justify- py-[15px] sm:mx-4 xl:mx-6 2xl:mx-8 ">
      <Link
        href={brand?.link ?? ""}
        className="flex flex items-center justify-start gap-4 relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} width={60} height={60} />
        <p className="font-semibold text-3xl text-[#50d71e] text-center">
          {brand?.name}
        </p>
      </Link>
    </div>
  );
};

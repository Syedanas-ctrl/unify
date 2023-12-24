"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Blog } from "@/types/blog";
import { useSearchParams } from "next/navigation";
import { countryCovers } from "@/components/Blog/country-covers";

const Blog = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("type");
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const blogsReference = collection(db, "blogs");

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getDocs(blogsReference);
      if (search) {
        setBlogsData(
          response?.docs
            ?.map(
              (doc) =>
                ({
                  ...doc?.data(),
                  id: doc?.id,
                } as Blog)
            )
            ?.filter((blog) => blog?.type?.includes(search))
        );
        return;
      }
      setBlogsData(
        response?.docs
          ?.map(
            (doc) =>
              ({
                ...doc?.data(),
                id: doc?.id,
              } as Blog)
          )
          ?.filter((blog) => !blog?.type?.includes("destination"))
      );
    };
    fetchBlogs();
  }, [search]);
  const background = Object.keys(countryCovers)?.includes((search || "").toLowerCase()) ? countryCovers?.[search?.toLowerCase() as keyof typeof countryCovers] : "";
  return (
    <>
      <Breadcrumb pageName="Blog Grid" description="Our blogs" />

      <section style={{backgroundImage: `url(${background})`}} className="pt-[120px] mt-4 bg-cover bg-center bg-no-repeat pb-[120px] min-h-[800px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-y-4">
            {blogsData?.map((blog) => (
              <div
                key={blog.title}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <Link href={`/blog/${blog.id}`}>
                  <SingleBlog blog={blog} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

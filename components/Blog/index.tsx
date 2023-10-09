'use client';
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { Blog } from "@/types/blog";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Blog = () => {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const blogsReference = collection(db, "blogs");
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getDocs(blogsReference);
      setBlogsData(
        response.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as Blog)
        )
      );
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogsData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

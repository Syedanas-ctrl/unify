"use client";
import { remark } from "remark";
import html from "remark-html";
import { useEffect, useState } from "react";
import Contact from "@/components/Contact";
import { Blog } from "@/types/blog";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

async function markdown(markdown: any) {
  const result = await remark().use(html).process(markdown);
  return result.value.toString();
}

const BlogSidebarPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const blogId = params.id;
  const blogsReference = collection(db, "blogs");
  const [blogsData, setBlogsData] = useState<Blog>({
    id: blogId,
    title: "",
    description: "",
    content: "",
    type: "",
  });
  useEffect(() => {
    if (!blogId || blogsData.title) return;
    const fetchBlogs = async () => {
      //get blog by id
      const response = await getDocs(blogsReference);
      const blog = response.docs.find((doc) => doc.id === blogId);
      if (blog) {
        setBlogsData({
          ...blog.data(),
          id: blog.id,
        } as Blog);
      } else {
        setBlogsData({
          id: "",
          title: "",
          description: "",
          content: "",
          type: "",
        });
      }
    };
    fetchBlogs();
  }, [blogId]);

  return (
    <>
      <section className="overflow-hidden pt-[180px]">
        <div className="container ">
          <div className="flex w-full flex-col">
            <div className="prose max-w-none px-4 dark:prose-invert ">
              <h1>{blogsData?.title}</h1>
              <h3>{blogsData?.description}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: blogsData?.content }}
              ></div>
            </div>
            <div className="w-full px-4">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;

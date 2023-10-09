"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const PostBlog = () => {
  const blogsReference = collection(db, "blogs");
  const { quill, quillRef } = useQuill();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    type: "",
  });
  const [content, setContent] = useState("");

  const submit = async () => {
    if (!blog.title || !blog.type || !content) {
      window.alert("Please fill all the fields");
      return;
    }
    const response = await addDoc(blogsReference, {
      title: blog?.title || "",
      type: blog?.type?.split(",") || "",
      description: blog?.description || "",
      content: content,
    });
    if (response.id) {
      window.alert("Blog added successfully");
      setBlog({
        title: "",
        type: "",
        description: "",
      });
      setContent("");
    } else {
      window.alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <>
      <Breadcrumb pageName="Blog Playground" description="Our blogs" />

      <section className="pb-[120px]">
        <div className="container">
          <input
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            className="-mx-4 mb-4 rounded border border-dark bg-white px-4 py-2 text-dark md:w-full lg:w-[800px]"
            type="text"
            placeholder="Title"
          />
          <textarea
            value={blog?.description}
            onChange={(e) =>
              setBlog({
                ...blog,
                description: e.target.value,
              })
            }
            placeholder="Description"
            className="-mx-4 mb-4 rounded border border-dark bg-white px-4 py-2 text-dark md:w-full lg:w-[800px]"
          ></textarea>
          <input
            value={blog.type}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault(); // Prevent the input of spaces
              }
            }}
            onChange={(e) => setBlog({ ...blog, type: e.target.value })}
            className="-mx-4 mb-4 rounded border border-dark bg-white px-4 py-2 text-dark md:w-full lg:w-[800px]"
            type="text"
            placeholder="Type"
          />
          <div className="-mx-4 flex flex-wrap justify-start">
            <div
              style={{
                width: 800,
                height: 500,
                backgroundColor: "white",
                color: "black",
              }}
            >
              <div ref={quillRef} />
            </div>
          </div>
          <button
            onClick={submit}
            className="ease-in-up mt-16 hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default PostBlog;

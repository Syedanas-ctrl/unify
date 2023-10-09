"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { usePathname } from "next/navigation";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const EditBlog = () => {
  const path = usePathname();
  const blogId = path.split("/")?.[2];
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    type: "",
  });
  const [content, setContent] = useState("");
  const { quill, quillRef } = useQuill();
  const blogsReference = collection(db, "blogs");

  const modifyBlog = async () => {
    if (!blog?.title || !blog?.type || !content || !blogId) {
      window.alert("Please fill all the fields");
      return;
    }
    const blogDocToModify = doc(db, "blogs", blogId);
    await updateDoc(blogDocToModify, {
      title: blog?.title,
      type: blog?.type?.split(","),
      description: blog?.description,
      content: content,
    })
      .then(() => {
        window.alert("Blog updated successfully");
      })
      .catch(() => {
        window.alert("Something went wrong");
      });
  };

  useEffect(() => {
    if (!blogId) return;
    const fetchBlogs = async () => {
      //get blog by id
      const response = await getDocs(blogsReference);
      const blog = response?.docs?.find((doc) => doc.id === blogId);
      setContent(blog?.data()?.content || "");
      setBlog({
        title: blog?.data()?.title || "",
        type: blog?.data()?.type?.join(",") || "",
        description: blog?.data()?.description || "",
      });
    };
    fetchBlogs();
  }, [blogId]);

  useEffect(() => {
    if (quill) {
      quill?.clipboard?.dangerouslyPasteHTML(content);
    }
  }, [content]);

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <>
      <Breadcrumb pageName="Edit playground" description="Edit for a purpose" />

      <section className="pb-[120px]">
        <div className="container">
          <input
            value={blog?.title}
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
            value={blog?.type}
            onChange={(e) => setBlog({ ...blog, type: e.target.value })}
            className="-mx-4 mb-4 rounded border border-dark bg-white px-4 py-2 text-dark md:w-full lg:w-[800px]"
            type="text"
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault(); // Prevent the input of spaces
              }
            }}
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
            onClick={modifyBlog}
            className="ease-in-up mt-16 hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default EditBlog;

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

const CreateBlog = () => {
  const [blog_heading, setBlog_heading] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [description, setDescription] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const createPost = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("blog_heading", blog_heading);
    formData.append("summary", summary);
    formData.append("description", description);
    formData.append("file", files[0]);
  
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Blog post created successfully!");
        // Show success message using Swal.fire
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.error("Failed to create blog post");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  

  return (
    <div>
      <h2 className="text-xl md:text-3xl font-bold py-4">Create A Blog</h2>
      <div >
        <form onSubmit={createPost} className="grid gap-5 mx-20">
          <input
          className="input input-bordered input-warning w-full"
            value={blog_heading}
            type="title"
            placeholder="Title"
            onChange={(e) => setBlog_heading(e.target.value)}
          />
          <input
          className="input input-bordered input-warning w-full"
            value={summary}
            type="summary"
            placeholder="Summary"
            onChange={(e) => setSummary(e.target.value)}
          />
          <input onChange={(e) => setFiles(e.target.value)} type="file" />
          <ReactQuill
            value={description}
            onChange={(newValue) => setDescription(newValue)}
            theme="snow"
            modules={modules}
            formats={formats}
          ></ReactQuill>
          <button className="btn bg-[#FD6585] hover:bg-[#ED0058] my-16 md:my-8">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

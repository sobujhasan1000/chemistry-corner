import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { imageUpload } from "../../../api/utils";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { addBlog } from "../../../api/fetch";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const CreateBlog = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState("");

  const onSubmit = async (data) => {
    const image = data.image[0];
    // Using await here to wait for the imageUpload promise to resolve
    imageUpload(image)
      .then((imageData) => {
        const imageUrl = imageData?.data?.display_url;
        const blogData = {
          blog_heading: data.blog_heading,
          summary: data.summary,
          category: data.category,
          description: value,
          image_url: imageUrl,
          author_name: user.displayName,
          author_email: user.email,
          author_img: user.photoURL,
          blog_time: new Date(),
        };
        addBlog(blogData)
          .then((result) => {
            if (result.insertedId) {
              toast.success("Blog Added");
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Create a Blog - Chemistry Corner</title>
      </Helmet>
      {/* <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Create a Blog</h1>
        </div>
      </div> */}
      <h1 className="text-black text-3xl text-center font-bold">
        Create a Blog
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-5 my-20"
      >
        <div>
          <input
            {...register("blog_heading", { required: true })}
            className="input input-bordered input-warning w-full bg-white text-black"
            placeholder="Blog Title..."
          />
        </div>
        <div>
          <input
            {...register("summary", { required: true })}
            className="input input-bordered input-warning w-full bg-white text-black"
            placeholder="Blog Summary..."
          />
        </div>
        <div>
          <select
            {...register("category", { required: true })}
            className="input input-bordered input-warning w-full bg-white text-black"
          >
            <option>Choose a category</option>
            <option value="news">News</option>
            <option value="dating-tips">Dating Tips</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="non-binary">Non-binary</option>
          </select>
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <button
          type="submit"
          className="btn bg-[#FD6585] hover:bg-[#ED0058] my-16 md:my-8 border-0 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

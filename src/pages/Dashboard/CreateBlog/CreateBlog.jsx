import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { imageUpload } from "../../../api/utils";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { addBlog } from "../../../api/fetch";
import { toast } from "react-hot-toast";

const CreateBlog = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState("");
  // const [description, setDescription] = useState("");
  // const handleDescriptionChange = (content) => {
  //   setDescription(content);
  //   setValue("description", content);
  // };

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
          imageUrl: imageUrl,
          author_name: user.displayName,
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
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 mx-20">
        <div>
          <input
            {...register("blog_heading", { required: true })}
            className="input input-bordered input-warning w-full"
          />
        </div>
        <div>
          <input
            {...register("summary", { required: true })}
            className="input input-bordered input-warning w-full"
          />
        </div>
        <div>
          <select
            {...register("category", { required: true })}
            className="input input-bordered input-warning w-full"
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
          className="btn bg-[#FD6585] hover:bg-[#ED0058] my-16 md:my-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

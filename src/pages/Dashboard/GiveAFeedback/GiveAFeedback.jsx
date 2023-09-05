import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import siteLoader from "/ccLoader.gif";
import useSingleUser from "../../../Hooks/useSingleUser";
import { toast } from "react-hot-toast";

const GiveAFeedback = () => {
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user?.email);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_API_URL}/feedbacks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Feedback Send Successfully`);
          reset();
        }
      });
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Give a Feedback - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Give a Feedback</h1>
        </div>
      </div>

      <div className="my-20 md:w-3/5 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5"
        >
          <div className="form-control hidden">
            <input
              type="text"
              name="name"
              defaultValue={singleUser.name}
              {...register("name")}
              readOnly
              placeholder="Your Name..."
              className="bg-white border border-yellow-500 p-3 text-black outline-none capitalize"
            />
          </div>
          <div className="form-control hidden">
            <input
              type="text"
              name="image"
              defaultValue={singleUser.image}
              {...register("image")}
              readOnly
              placeholder="Your Photo URL..."
              className="bg-white border border-yellow-500 p-3 text-black outline-none"
            />
          </div>
          <div className="form-control">
            <select
              name="feedbackType"
              {...register("feedbackType")}
              required
              className="bg-white border border-yellow-500 p-3 text-black outline-none"
            >
              <option value="" disabled>
                Select Feedback Type
              </option>
              <option value="positive feedback">Positive Feedback</option>
              <option value="suggestion">Suggestion</option>
              <option value="bug report">Bug Report</option>
              <option value="complaint">Complaint</option>
              <option
                value="feature
              request"
              >
                Feature Request
              </option>
              <option value="general feedback">General Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-control">
            <input
              type="number"
              name="feedbackRating"
              {...register("feedbackRating", { min: 0, max: 5 })}
              required
              placeholder="Give a Rating...e.g 5"
              className="bg-white border border-yellow-500 p-3 text-black outline-none"
            />
            {errors.feedbackRating && (
              <span className="text-[#ED0058]">
                Rating will be minimum 0 to maximum 5
              </span>
            )}
          </div>
          <div className="form-control">
            <textarea
              name="feedbackDetails"
              {...register("feedbackDetails")}
              required
              placeholder="Give your feedback here..."
              cols="30"
              rows="5"
              className="bg-white border border-yellow-500 p-3 text-black outline-none"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Submit Feedback"
              className="p-3 bg-[#ED0058] text-white border border-[#ED0058] hover:text-black hover:bg-white transition-all ease-in-out duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveAFeedback;

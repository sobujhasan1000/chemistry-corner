import { useForm } from "react-hook-form";
import { sendNotes } from "../../api/fetch";
import { toast } from "react-hot-toast";
import Container from "../shared/Container";

const SendANote = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (contactInfo) => {
    console.log(contactInfo);
    sendNotes(contactInfo)
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Information sent successfully`);
          reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <Container>
      <div className="flex flex-col items-center gap-10 w-full my-20">
        <h1 className="text-yellow-500 text-3xl">Send Us a Note</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 md:w-full container mx-auto"
        >
          <div className="form-control">
            <input
              type="text"
              name="name"
              {...register("name")}
              required
              placeholder="Enter Your Full Name"
              className="p-2 bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none text-black"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="phone"
              {...register("phone")}
              required
              placeholder="Enter Your Phone Number"
              className="p-2 bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none text-black"
            />
          </div>
          <div className="form-control md:col-span-2">
            <input
              type="email"
              name="email"
              {...register("email")}
              required
              placeholder="Enter Your Email"
              className="p-2 bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none text-black"
            />
          </div>
          <div className="form-control md:col-span-2">
            <textarea
              name="message"
              {...register("message")}
              required
              cols="30"
              rows="10"
              placeholder="Enter you message..."
              className="p-2 bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none text-black"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <input
              type="submit"
              value="Send"
              className="px-5 py-2 bg-[#ED0058] border hover:bg-white hover:text-black hover:border hover:border-[#ED0058] text-white rounded-lg cursor-pointer duration-300"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SendANote;

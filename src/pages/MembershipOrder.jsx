import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import packages from "../assets/membershipjson.json";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import useSingleUser from "../Hooks/useSingleUser";
import siteLoader from "/ccLoader.gif";
import { Helmet } from "react-helmet-async";
import { postOrder } from "../api/fetch";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const MembershipOrder = () => {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user?.email);
  const { name, email } = singleUser;
  const { id } = useParams();
  const packageId = parseInt(id, 10);
  const selectedPackage = packages[packageId];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setPaymentLoading(true);
    console.log(data);
    const orderInfo = {
      ...data,
      orderTime: new Date(),
      price: selectedPackage.price,
      package: selectedPackage.packageName,
    };
    console.log(orderInfo);
    postOrder(orderInfo)
      .then((result) => {
        window.location.replace(result.url);
        if (result.insertedId) {
          toast.success("Payment successful");
          setPaymentLoading(false);
          reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setPaymentLoading(false);
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
    <>
      <Helmet>
        <title>Membership Order - Chemistry Corner</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row  items-center justify-center gap-12 container mx-auto my-20 px-2 md:px-0">
        <div>
          <div className="gap-2 bg-gradient-to-b from-pink-200 to-lime-100 text-center hover:shadow-2xl rounded-lg px-2  border-2 border-red-400">
            <h1 className="text-2xl font-bold py-8 text-black">
              {selectedPackage.packageName}
            </h1>
            <h1 className="text-2xl font-bold py-2 text-black">
              ${selectedPackage.price}
            </h1>
            <span className="divider"></span>
            <ul>
              {selectedPackage.packInclude.map((feature, i) => (
                <li
                className="text-xl border-b border-gray-400 flex items-center mx-auto w-84 gap-3 py-6"
                key={i}
              >
                <FaCheckCircle className="text-blue-400 text-center" />
                <span>{feature}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4 border-2 border-red-400 bg-rose-200 rounded-md"> 
        <h2 className="text-center py-4 mt-4 font-bold text-xl">Fill up empty area</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 p-8 "
          >
            <div className="form-control">
              <input
                type="text"
                name="name"
                defaultValue={name}
                {...register("name")}
                readOnly
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={email}
                {...register("email")}
                readOnly
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
                placeholder="Your Email..."
              />
            </div>
            <div className="form-control">
              <select
                name="currency"
                {...register("currency")}
                required
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
              >
                <option value="" disabled>
                  Currency
                </option>
                <option value="bdt">BDT</option>
                <option value="usd">USD</option>
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="address"
                {...register("address")}
                required
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
                placeholder="Your Address..."
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="postCode"
                {...register("postCode")}
                required
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
                placeholder="Your Post Code..."
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="phone"
                {...register("phone")}
                required
                className="p-2 bg-white text-black border border-yellow-500 outline-none"
                placeholder="Your Phone Number..."
              />
            </div>
            <div className="form-control">
              {paymentLoading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                <>
                  <input
                    type="submit"
                    value="pay"
                    className="btn bg-[#ED0058] p-2 hover:bg-[#e76b99]  text-black capitalize border border-yellow-500 outline-none cursor-pointer"
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MembershipOrder;

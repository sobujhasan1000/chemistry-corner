import { useContext } from "react";
import { useParams } from "react-router-dom";
import packages from "../assets/packages.json";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import useSingleUser from "../Hooks/useSingleUser";
import siteLoader from "/ccLoader.gif";
import { Helmet } from "react-helmet-async";

const MembershipOrder = () => {
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user?.email);
  const { name, email } = singleUser;
  const { id } = useParams();
  const packageId = parseInt(id, 10);
  const selectedPackage = packages[packageId];

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto my-20 px-2 md:px-0">
        <div>
          <div className="bg-[#fff] text-center hover:shadow-2xl border border-gray-200">
            <h1 className="text-2xl font-bold py-8 text-black">
              {selectedPackage.packageName}
            </h1>
            <p className="px-10 py-8 bg-[#eca9c2] text-xl text-black">
              {selectedPackage.packInfo}
            </p>
            <h1 className="text-2xl font-bold py-2 text-black">
              ${selectedPackage.price}
            </h1>
            <span className="divider"></span>
            <ul>
              {selectedPackage.packInclude.map((feature, i) => (
                <li className=" text-xl text-black" key={i}>
                  <FaCheckCircle className="text-blue-400 mb-[-20px] ml-[50px]" />
                  {feature} <span className="divider px-4"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
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
              <input
                type="submit"
                value="pay"
                className="p-2 bg-white text-black capitalize border border-yellow-500 outline-none cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MembershipOrder;

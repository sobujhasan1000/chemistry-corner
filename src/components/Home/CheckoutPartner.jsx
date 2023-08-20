import React from "react";
import Container from "../shared/Container";
import { BsSearchHeart } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CheckoutPartner = () => {
  const genders = [
    {
      label: "Male",
      value: "male",
      selected: true,
    },
    { label: "Female", value: "female" },
    { label: "Non-Binary", value: "non-binary" },
  ];
  const minAges = [
    {
      label: "18",
      value: 18,
      selected: true,
    },
    { label: "19", value: 19 },
    { label: "20", value: 20 },
    { label: "21", value: 21 },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
  ];
  const maxAges = [
    {
      label: "30",
      value: 30,
      selected: true,
    },
    { label: "31", value: 31 },
    { label: "32", value: 32 },
    { label: "33", value: 33 },
    { label: "34", value: 34 },
    { label: "35", value: 35 },
  ];
  const countries = [
    {
      label: "Choose your country",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { label: "USA", value: "usa" },
    { label: "UK", value: "uk" },
    { label: "Canada", value: "canada" },
    { label: "Ireland", value: "ireland" },
    { label: "France", value: "france" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="py-8 md:py-24 rounded-lg bg-slate-100">
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-end gap-4"
        >
          <div>
            <label className="label">
              <span className="text-lg text-[#656565]">I am</span>
            </label>
            <select
              name="gender"
              {...register("gender")}
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
            >
              {genders.map((gender, i) => (
                <option
                  key={i}
                  className="md:text-[20px]"
                  defaultValue={gender.value}
                >
                  {gender?.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-lg text-[#656565]">Looking for</span>
            </label>
            <select
              name="gender"
              {...register("gender")}
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
            >
              {genders.map((gender, i) => (
                <option
                  key={i}
                  className="md:text-[20px]"
                  defaultValue={gender.value}
                >
                  {gender?.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">
              <span className="text-lg text-[#656565]">Age</span>
            </label>
            <div className="flex justify-center items-center gap-1">
              <select
                name="minAge"
                {...register("minAge")}
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA]  py-[3px] text-[20px] select w-full"
              >
                {minAges.map((item, i) => (
                  <option
                    key={i}
                    className="md:text-[20px]"
                    defaultValue={item.value}
                  >
                    {item?.label}
                  </option>
                ))}
              </select>
              <span className="text-4xl text-[#656565]">-</span>
              <select
                name="maxAge"
                {...register("maxAge")}
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[3px] text-[20px] select w-full"
              >
                {maxAges.map((item, i) => (
                  <option
                    key={i}
                    className="md:text-[20px]"
                    defaultValue={item.value}
                  >
                    {item?.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="text-lg text-[#656565]">Country</span>
            </label>
            <select
              name="country"
              {...register("country")}
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
            >
              {countries.map((country, i) => (
                <option
                  key={i}
                  className={`text-[20px] ${country.hidden && "hidden"}`}
                  disabled={country?.disabled}
                  defaultValue={country?.value}
                >
                  {country?.label}
                </option>
              ))}
            </select>
          </div>
          <Link
            to="find-partner"
            className="text-xl font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3 cursor-pointer"
          >
            <BsSearchHeart size={25} />

            <input type="submit" value="Find your partner" />
          </Link>
        </form>
      </Container>
    </div>
  );
};

export default CheckoutPartner;

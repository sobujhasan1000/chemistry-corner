import Container from "../shared/Container";
import { BsSearchHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CheckoutPartner = () => {
  const navigate = useNavigate();

  const genders = [
    {
      label: "Male",
      value: "male",
    },
    { label: "Female", value: "female", selected: true },
    { label: "Non-Binary", value: "non-binary" },
  ];
  const minAges = [
    {
      label: "21",
      value: 21,
      selected: true,
    },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
    { label: "24", value: 24 },
    { label: "25", value: 25 },
    { label: "26", value: 26 },
    { label: "27", value: 27 },
  ];
  const maxAges = [
    {
      label: "27",
      value: 27,
      selected: true,
    },
    { label: "28", value: 28 },
    { label: "29", value: 29 },
    { label: "30", value: 30 },
    { label: "31", value: 31 },
    { label: "32", value: 32 },
    { label: "33", value: 33 },
  ];
  const countries = [
    {
      label: "Choose location",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { label: "Bangladesh", value: "bangladesh" },
    { label: "India", value: "india" },
    { label: "Nepal", value: "nepal" },
    { label: "USA", value: "usa" },
    { label: "UK", value: "uk" },
    { label: "Canada", value: "canada" },
  ];
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const gender = form.gender.value;
    const minAge = form.minAge.value;
    const maxAge = form.maxAge.value;
    const country = form.country.value;
    navigate("find-partner", {
      state: {
        gender: gender,
        minAge: minAge,
        maxAge: maxAge,
        country: country,
      },
    });
  };

  return (
    <div className="py-8 md:py-24 rounded-lg bg-slate-100">
      <Container>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 items-end gap-4"
        >
          <div>
            <label className="label">
              <span className="text-lg text-[#656565]">I am</span>
            </label>
            <select className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full">
              {genders.map((gender, i) => (
                <option key={i} className="md:text-[20px]">
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
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
            >
              {genders.map((gender, i) => (
                <option
                  key={i}
                  className="md:text-[20px]"
                  value={gender.value}
                  selected={gender.selected}
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
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA]  py-[3px] text-[20px] select w-full"
              >
                {minAges.map((item, i) => (
                  <option
                    key={i}
                    className="md:text-[20px]"
                    value={item.value}
                    selected={item.selected}
                  >
                    {item?.label}
                  </option>
                ))}
              </select>
              <span className="text-4xl text-[#656565]">-</span>
              <select
                name="maxAge"
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[3px] text-[20px] select w-full"
              >
                {maxAges.map((item, i) => (
                  <option
                    key={i}
                    className="md:text-[20px]"
                    value={item.value}
                    selected={item.selected}
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
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[20px] select w-full"
            >
              {countries.map((country, i) => (
                <option
                  key={i}
                  className={`text-[20px] ${country.hidden && "hidden"}`}
                  disabled={country?.disabled}
                  value={country?.value}
                  selected={country.selected}
                >
                  {country?.label}
                </option>
              ))}
            </select>
          </div>
          <button className="text-xl font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3 cursor-pointer">
            <BsSearchHeart size={25} />
            <input
              type="submit"
              value="Find your partner"
              className="cursor-pointer"
            />
          </button>
        </form>
      </Container>
    </div>
  );
};

export default CheckoutPartner;

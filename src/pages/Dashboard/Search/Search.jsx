import { useNavigate } from "react-router-dom";
import { BsSearchHeart } from "react-icons/bs";

const Search = () => {
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
      label: "Select location",
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
    <div>
      <div className="flex flex-col w-auto h-auto bg-gradient-to-b from-pink-200 to-white">
        <div className="grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-14 mb-8 md:mt-14 md:mb-6">
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter text-black font-bold ">
              Search Your Partner,
            </h1>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl filter text-black font-bold ">
              Then Explore.
            </h1>
            <p className="text-xl my-5 text-center ">
              We provide you always your dream person. We always make our users
              happy by proving many choices.
            </p>
          </div>
          <div>
            <div className="rounded-lg mx-10">
              <form
                onSubmit={handleFormSubmit}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-4 justify-center"
              >
                <div>
                  <fieldset className="border border-solid border-pink-500 px-2 rounded-sm">
                    <legend className="label">
                      <span className="text-lg text-gray-800">I am</span>
                    </legend>
                    <select className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[14px] select w-full">
                      {genders.map((gender, i) => (
                        <option key={i} className="md:text-[18px]">
                          {gender?.label}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border border-solid border-pink-500 px-2 rounded-sm">
                    <legend className="label">
                      <span className="text-lg text-gray-800">Looking for</span>
                    </legend>
                    <select
                      name="gender"
                      className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[14px] select w-full"
                    >
                      {genders.map((gender, i) => (
                        <option
                          key={i}
                          className="md:text-[18px]"
                          value={gender.value}
                          selected={gender.selected}
                        >
                          {gender?.label}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border border-solid border-pink-500 px-2 rounded-sm">
                    <legend className="label">
                      <span className="text-lg text-gray-800">Age</span>
                    </legend>
                    <div className="flex justify-center items-center gap-1">
                      <select
                        name="minAge"
                        className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[3px] text-[14px] select w-full"
                      >
                        {minAges.map((item, i) => (
                          <option
                            key={i}
                            className="md:text-[18px]"
                            value={item.value}
                            selected={item.selected}
                          >
                            {item?.label}
                          </option>
                        ))}
                      </select>
                      <span className="h-1 w-full bg-black lg:w-1/3"></span>
                      <select
                        name="maxAge"
                        className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[3px] text-[14px] select w-full"
                      >
                        {maxAges.map((item, i) => (
                          <option
                            key={i}
                            className="md:text-[18px]"
                            value={item.value}
                            selected={item.selected}
                          >
                            {item?.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <fieldset className="border border-solid border-pink-500 px-2 rounded-sm">
                    <legend className="label">
                      <span className="text-lg text-gray-800">Location</span>
                    </legend>
                    <select
                      name="country"
                      className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] text-[14px] select w-full"
                    >
                      {countries.map((country, i) => (
                        <option
                          key={i}
                          className={`text-[18px] ${
                            country.hidden && "hidden"
                          }`}
                          disabled={country?.disabled}
                          value={country?.value}
                          selected={country.selected}
                        >
                          {country?.label}
                        </option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="text-base font-medium px-3 col-span-full md:col-span-1 py-3 rounded uppercase text-white bg-[#ED0058] hover:bg-[#a33f64] flex justify-center items-center gap-2 md:gap-3 cursor-pointer">
                  <BsSearchHeart size={25} />
                  <input type="submit" value="Find your partner" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

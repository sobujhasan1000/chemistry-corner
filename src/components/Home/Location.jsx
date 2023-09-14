import { FaSearch } from "react-icons/fa";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";

const Location = () => {
  const countries = [
    {
      country: "bangladesh",
      image: "https://bitly.ws/TVcF",
    },
    {
      country: "india",
      image: "https://bitly.ws/TVdb",
    },
    {
      country: "nepal",
      image: "https://bitly.ws/TVdz",
    },
    {
      country: "usa",
      image: "https://bitly.ws/TVdS",
    },
    {
      country: "uk",
      image: "https://bitly.ws/TVex",
    },
    {
      country: "canada",
      image: "https://bitly.ws/TVf2",
    },
  ];
  return (
    // <Container>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-1 md:pt-24 pt-4 pb-8">
          {countries.map(({ country, image }, i) => (
            <div
              key={i}
              className="md:h-64 relative overflow-hidden group transition duration-300 transform rounded-xl shadow-xl lg:hover:-translate-y-2 hover:shadow-2xl mx-2 my-2"
            >
              <div className="relative">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={image}
                  alt="country image"
                />
                <p className="uppercase absolute top-2 transform group-hover:scale-110 text-white opacity-0 group-hover:opacity-60 font-signature w-11/12 text-[150px] duration-200 ease-linear text-center">
                  {country}
                </p>
              </div>
              <div className="uppercase absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-2xl font-medium font-signature text-gray-100">
                  {country}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-2/5 w-full flex flex-col justify-center items-center">
          <Heading
            title={"Meet Singles in Your Area"}
            subTitle={
              "If you want to meet local singles for dating, companionship, friendship, or even more, you have come to the right place."
            }
          />
          <button className="bg-[#ED0058] hover:bg-[#a33f64] text-white p-4 md:px-6 md:py-4 md:text-2xl capitalize rounded flex items-center">
            <FaSearch className="mr-2" />
            <Link to="/countries">
              <span>Find your partner</span>
            </Link>
          </button>
        </div>
      </div>
    // </Container>
  );
};

export default Location;

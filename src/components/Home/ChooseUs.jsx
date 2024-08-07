import choosePhoto from "../../assets/choose us2.jpg";
import { FaBandcamp, FaUser, FaWeixin } from "react-icons/fa";
import Heading from "../shared/Heading";
import Container from "../shared/Container";
const ChooseUs = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center my-4 gap-4">
        <div className="lg:w-2/3">
          <div className="text-center">
            <Heading
              title={"Why choose chemistry corner"}
              subTitle={"Here’s why lots of people choose our website."}
            />
          </div>
          <div className="flex flex-col md:flex-row  justify-center text-center gap-4">
            <div className=" rounded-md border-4 border-red-300 p-4 ">
              <h1 className="text-3xl py-2">
                <span className="flex items-center justify-center mb-4 text-[#ED0058]">
                  <FaUser size={50} />
                </span>
                Simple to Use
              </h1>
              <p>
                chemistry corner is very easy to use - just choose your and your partner’s
                gender, age, and location, and you’re all set!
              </p>
            </div>
            <div className="py-10 rounded-md border-4 border-red-300 p-4">
              <h1 className="text-3xl py-2">
                <span className="flex items-center justify-center mb-4 text-[#ED0058]">
                  <FaBandcamp size={50} />
                </span>
                Smart Matching
              </h1>
              <p>
                Our matching system is based on geolocation and interests. It
                helps you find the best people to meet or spend time with.
              </p>
            </div>
            <div className="py-10 rounded-md border-4 border-red-300 p-4">
              <h1 className="text-3xl py-2">
                {" "}
                <span className="flex items-center justify-center mb-4 text-[#ED0058]">
                  <FaWeixin size={50} />
                </span>
                Cool Community
              </h1>
              <p>
                Besides being #1 dating service, we have a supportive and
                understanding community that’s always ready to help.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img className="rounded-md" src={choosePhoto} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ChooseUs;

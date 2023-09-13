import { FaCheckCircle } from "react-icons/fa";
// import { ImCross } from "react-icons/im";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";
import membershipjon from "../../assets/membershipjson.json";
import { Helmet } from "react-helmet-async";

const MemberShip = () => {
  return (
    <>
      <Helmet>
        <title>Membership - Chemistry Corner</title>
      </Helmet>

      <Container >
        <div className="text-black my-10">
        <div className="text-center  py-6">
          <h1 className="text-[40px] font-bold text-black">Membership Levels</h1>
          <p>
            Our dating platform is like a breath of fresh air. Clean and trendy
            design with ready <br /> to use features we are sure you will love.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 py-10">
          {membershipjon?.map((item, i) => (
            <div
              className="gap-2 bg-gradient-to-r from-lime-200 to-pink-400 text-center hover:shadow-2xl rounded-md"
              key={i}
            >
              <h1 className="text-2xl font-bold py-8">{item.packageName}</h1>
              {/* <p className="px-10 py-8 bg-[#eca9c2] text-xl">{item.packInfo}</p> */}
              <h1 className="text-2xl font-bold py-2">${item.price}</h1>
              <span className="divider"></span>
              <ul className="mb-8">
                {item.packInclude.map((feature, i) => (
                  <li className=" text-xl border-b border-gray-400  flex items-center mx-auto w-96 gap-4 py-8 " key={i}>
                    <FaCheckCircle className="text-blue-400  text-center"  />
                    <span>{feature} </span>
                    {/* <span className="divider px-4"></span> */}
                  </li>
                ))}
              </ul>

              <Link
                to={`/membership/${i}`}
                className="btn text-white hover:text-black bg-[#ED0058] mb-4 hover:bg-[#e76b99] shadow-xl uppercase"
              >
                select plan
              </Link>
            </div>
          ))}
        </div>
        </div>
       
      </Container>
    </>
  );
};

export default MemberShip;

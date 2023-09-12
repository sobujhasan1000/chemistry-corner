import { FaCheckCircle } from "react-icons/fa";
import { ImCross} from "react-icons/im";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";
import packages from "../../assets/packages.json";
import { Helmet } from "react-helmet-async";

const MemberShip = () => {
  return (
    <>
      <Helmet>
        <title>Membership - Chemistry Corner</title>
      </Helmet>

      <Container className="my-10 bg-[#bbd2ec] text-black">
        <div className="text-center bg-[#f1f7fe] py-6">
          <h1 className="text-[40px] font-bold">Membership Levels</h1>
          <p>
            Our dating platform is like a breath of fresh air. Clean and trendy
            design with ready <br /> to use features we are sure you will love.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 bg-[#f1f7fe] py-10">
          {packages.map((item, i) => (
            <div
              className="gap-2 bg-gradient-to-r from-lime-200 to-green-400 text-center hover:shadow-2xl rounded-md"
              key={i}
            >
              <h1 className="text-2xl font-bold py-8">{item.packageName}</h1>
              <p className="px-10 py-8 bg-[#eca9c2] text-xl">{item.packInfo}</p>
              <h1 className="text-2xl font-bold py-2">${item.price}</h1>
              <span className="divider"></span>
              <ul>
              {item.packInclude.map((features, i) => (
  <li className="text-xl" key={i}>
    
    {features.included ? (
      <FaCheckCircle className="text-blue-400 mb-[-20px] ml-[50px]" />
    ) : (
      <ImCross className="text-red-400 mb-[-20px] ml-[50px]" />
    )}
    {features.feature} <span className="divider px-4"></span>
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
      </Container>
    </>
  );
};

export default MemberShip;

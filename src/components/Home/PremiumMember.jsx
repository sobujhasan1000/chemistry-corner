import premium from "../../assets/premium.jpg";
import Container from "../shared/Container";
import { Link } from "react-router-dom";

const PremiumMember = () => {
  return (
    <div
      className="hero h-screen text-white object-top justify-start bg-top mb-24"
      style={{ backgroundImage: `url(${premium})`, height: 450 }}
    >
      <Container>
        <div className="text-left  space-y-4">
          <h1 className="text-4xl md:text-5xl font-signature text-white">
            Premium <span className="text-[#ED0058]">Membership</span>
          </h1>
          <p className="max-w-md">
            Enjoy the benefits of our dating services membership! Use the
            psychological matching to find the best people and experience other
            great bonuses.
          </p>
          <div className="flex flex-row justify-start items-center gap-2">
            <Link to={"/membership"}>
              <button className="px-6 py-2 text-xl capitalize bg-[#ED0058] text-white rounded-lg hover:text-white hover:bg-[#a33f64]">
                view options
              </button>
            </Link>
            <h2 className="text-xl border px-6 py-2 rounded-md border-[#a33f64]">
              14 days for free
            </h2>
          </div>
        </div>{" "}
      </Container>
    </div>
  );
};

export default PremiumMember;

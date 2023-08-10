import premium from "../../assets/premium.jpg";
import Container from "../shared/Container";

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
            <button className="btn text-xl capitalize">view all options</button>
            <h2 className="text-xl">14 days for free</h2>
          </div>
        </div>{" "}
      </Container>
    </div>
  );
};

export default PremiumMember;

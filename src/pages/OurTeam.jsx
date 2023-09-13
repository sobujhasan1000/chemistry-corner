import { Helmet } from "react-helmet-async";
import ourTeam1 from "/our-team-1.jpg";
import ourTeam2 from "/our-team-2.jpg";
import ourTeam3 from "/our-team-3.jpg";
import ourTeam4 from "/our-team-4.jpg";
import SendANote from "../components/ContactUs/SendANote";

const OurTeam = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Chemistry Corner</title>
      </Helmet>
      <div>
        <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
          <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">Our Team</h1>
          </div>
        </div>
        <div className="my-20 container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" w-64 rounded-sm shadow-2xl">
              <img
                src={ourTeam1}
                alt="team member image"
                className="w-full rounded-t-sm"
              />
              <div className="p-5 text-center">
                <p className="text-gray-500 text-sm">Founder, CEO</p>
                <h1 className="text-black text-xl font-signature">
                  Linda Allen
                </h1>
              </div>
            </div>
            <div className=" w-64 rounded-sm shadow-2xl">
              <img
                src={ourTeam2}
                alt="team member image"
                className="w-full rounded-t-sm"
              />
              <div className="p-5 text-center">
                <p className="text-gray-500 text-sm">Manager</p>
                <h1 className="text-black text-xl font-signature">
                  Scott Evans
                </h1>
              </div>
            </div>
            <div className=" w-64 rounded-sm shadow-2xl">
              <img
                src={ourTeam3}
                alt="team member image"
                className="w-full rounded-t-sm"
              />
              <div className="p-5 text-center">
                <p className="text-gray-500 text-sm">Human Resource Manager</p>
                <h1 className="text-black text-xl font-signature">
                  Patricia Parker
                </h1>
              </div>
            </div>
            <div className=" w-64 rounded-sm shadow-2xl">
              <img
                src={ourTeam4}
                alt="team member image"
                className="w-full rounded-t-sm"
              />
              <div className="p-5 text-center">
                <p className="text-gray-500 text-sm">Operation Handler</p>
                <h1 className="text-black text-xl font-signature">Mary Lee</h1>
              </div>
            </div>
          </div>
          <div className="shadow-2xl">
            <SendANote></SendANote>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;

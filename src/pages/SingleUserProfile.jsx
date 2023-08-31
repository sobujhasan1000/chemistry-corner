import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import { BsInfoCircle } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import useSingleMember from "../Hooks/useSingleMember";
import { useParams } from "react-router-dom";
import siteLoader from "/ccLoader.gif";
import Container from "../components/shared/Container";

const SingleUserProfile = () => {
  const { id } = useParams();

  const [singleMember, loading] = useSingleMember(id);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }
  return (
    <div>
      <Container>
        <div className="w-full h-[40vh] flex flex-col items-center justify-center gap-5 bg-[#FD6585]">
          <img
            src={singleMember?.image}
            alt="User Image"
            className="w-40 h-40 rounded-full"
          />
          <h1 className="text-3xl text-black font-signature capitalize">
            {singleMember?.name}
          </h1>
        </div>
        <div>
          <div className="border-b border-black py-7">
            <div className="flex items-center justify-between container mx-auto">
              <h1 className="inline-flex items-center gap-1 text-black">
                <BsInfoCircle />
                Information
              </h1>
              <p className="text-black">Email: {singleMember?.email}</p>
            </div>
          </div>
          <div className="container mx-auto my-8 flex flex-row">
            <div>
              <h1 className="text-2xl text-black">Basic Information</h1>
              <div className="flex items-center gap-20 border border-black p-4 my-4 w-full">
                <h1 className="text-black inline-flex items-center gap-1">
                  <CiStopwatch />
                  Active 10 days ago
                </h1>
                <AiOutlineLine className="text-black rotate-90" />
                <h1 className="text-black inline-flex items-center gap-1">
                  {singleMember?.age && <FaUser />}
                  {singleMember?.age ? singleMember?.age : "Age is not set yet"}
                  {singleMember?.age && " years old"}
                </h1>
              </div>
              <p className="text-black">{singleMember?.bio}</p>
              <div className="w-full my-10">
                <div className="grid grid-cols-2 border-y border-black py-4">
                  <p className="text-black">I&apos;m a</p>
                  <p
                    className={`text-black ${
                      singleMember?.gender && "capitalize"
                    }`}
                  >
                    {singleMember?.gender
                      ? singleMember?.gender
                      : "Gender is not set yet"}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">Looking for a</p>
                  <p className="text-black">Male / Female (sample data)</p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">Country</p>
                  <p
                    className={`text-black ${
                      singleMember?.country && "capitalize"
                    }`}
                  >
                    {singleMember?.country
                      ? singleMember?.country
                      : "Country is not set yet"}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">City</p>
                  <p
                    className={`text-black ${
                      singleMember?.city && "capitalize"
                    }`}
                  >
                    {singleMember?.city
                      ? singleMember?.city
                      : "City is not set yet"}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">Date of Birth</p>
                  <p className="text-black">
                    {singleMember?.dob
                      ? singleMember?.dob
                      : "Date of Birth is not set yet"}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">Marital Status</p>
                  <p
                    className={`text-black ${
                      singleMember?.maritalStatus && "capitalize"
                    }`}
                  >
                    {singleMember?.maritalStatus
                      ? singleMember?.maritalStatus
                      : "Marital status is not set yet"}
                  </p>
                </div>
                <div className="grid grid-cols-2 border-b border-black py-4">
                  <p className="text-black">Education</p>
                  <p
                    className={`text-black ${
                      singleMember?.education && "capitalize"
                    }`}
                  >
                    {singleMember?.education
                      ? singleMember?.education
                      : "Education is not set yet"}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-black">Photos</h1>
                <div className="flex flex-col md:flex-row items-center gap-2 mt-5">
                  <img src={user1} alt="" className="w-56 h-40" />
                  <img src={user2} alt="" className="w-56 h-40" />
                  <img src={user3} alt="" className="w-56 h-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleUserProfile;

import userDemoImage from "/user.png";
import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import { BsInfoCircle } from "react-icons/bs";
import { CiStopwatch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

const SingleUserProfile = () => {
  return (
    <div>
      <div className="w-full h-[40vh] flex flex-col items-center justify-center gap-5 bg-[#FD6585]">
        <img src={userDemoImage} alt="User Image" className="w-40 h-40" />
        <h1 className="text-3xl text-black font-signature">User Name</h1>
      </div>
      <div>
        <div className="border-b border-black py-7">
          <div className="flex items-center justify-between container mx-auto">
            <h1 className="inline-flex items-center gap-1 text-black">
              <BsInfoCircle />
              Information
            </h1>

            <p className="text-black">user@gmail.com</p>
          </div>
        </div>
        <div className="container mx-auto my-8 flex flex-row">
          <div>
            <h1 className="text-2xl text-black">Basic Information</h1>
            <div className="flex items-center gap-20 border border-black p-4 my-4 w-1/2">
              <h1 className="text-black inline-flex items-center gap-1">
                <CiStopwatch />
                Active 10 days ago
              </h1>
              <AiOutlineLine className="text-black rotate-90" />
              <h1 className="text-black inline-flex items-center gap-1">
                <FaUser />
                24 years old
              </h1>
            </div>
            <p className="text-black">
              This is bio <br /> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nobis vero distinctio laboriosam adipisci sint
              voluptas. Eligendi est aliquid quae veniam dolorem ullam fuga
              facilis voluptatibus deleniti nesciunt eum eaque minus, velit
              molestias magni exercitationem sapiente, consectetur, beatae cum
              maxime nobis labore iusto! Quidem vero eos deleniti assumenda
              tempore odio molestias consequatur beatae atque voluptatibus,
              facere non amet recusandae est fugiat, adipisci, iusto veniam
              placeat quam temporibus totam nihil! Aperiam, recusandae incidunt
              commodi adipisci excepturi dolore impedit enim unde perferendis
              perspiciatis exercitationem repellat quasi, ut ipsum illum
              eligendi doloremque itaque ex corrupti corporis quia. Vitae harum
              a laborum, distinctio quod itaque.
            </p>
            <div className="w-1/2 my-10">
              <div className="grid grid-cols-2 border-y border-black py-4">
                <p className="text-black">I&apos;m a</p>
                <p className="text-black">Female</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">Looking for a</p>
                <p className="text-black">Male</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">Country</p>
                <p className="text-black">USA</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">City</p>
                <p className="text-black">Los Angles</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">Date of Birth</p>
                <p className="text-black">5/12/1990</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">Marital Status</p>
                <p className="text-black">Single</p>
              </div>
              <div className="grid grid-cols-2 border-b border-black py-4">
                <p className="text-black">Education</p>
                <p className="text-black">BBA</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-black">Photos</h1>

              <div className="flex gap-2 mt-5">
                <img src={user1} alt="" className="w-56 h-40" />
                <img src={user2} alt="" className="w-56 h-40" />
                <img src={user3} alt="" className="w-56 h-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserProfile;

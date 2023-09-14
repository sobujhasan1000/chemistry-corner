import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const ConnectionCard = ({ user }) => {
  return (
    <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
      <img
        src={
          user?.image ||
          "https://i.pinimg.com/originals/bc/37/8c/bc378c7c42cc2fe83b3c666b73d684e9.jpg"
        }
        alt="user image"
        className="object-cover w-full h-56 md:h-64 xl:h-80"
      />

      <div className="bg-pink-100 px-8 py-6 bg-opacity-60 opacity-0 hover:opacity-100 text-gray-800 absolute inset-0 transition-opacity font-bold duration-200 flex flex-col justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-3xl text-center">{user?.name}</p>
          <p className="text-[#ED0058] italic text-center">{user?.email}</p>
        </div>
        <p className="uppercase inline-flex items-center gap-1 justify-center mt-7">
          <MdLocationPin />
          {user?.country}
        </p>
        <Link
          to={`/view-profile/${user?._id}`}
          className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full text-white border-0 mt-auto "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ConnectionCard;

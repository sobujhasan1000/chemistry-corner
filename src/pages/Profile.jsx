import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import user4 from "/user4.jpg";
import { AuthContext } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { Link } from "react-router-dom";
import useSingleUser from "../Hooks/useSingleUser";
import siteLoader from "/ccLoader.gif";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [singleUser, loading] = useSingleUser(user?.email);
  console.log("first 2", singleUser);

  const {
    image,
    name,
    gender,
    email,
    city,
    address,
    age,
    bio,
    contact,
    country,
    maritalStatus,
    height,
    weight,
    education,
    dob,
    profession,
    interests,
  } = singleUser;

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }

  const isProfileIncomplete =
    !image ||
    !name ||
    !gender ||
    !email ||
    !city ||
    !education ||
    !age ||
    !bio ||
    !contact ||
    !dob ||
    !country ||
    !maritalStatus ||
    !height ||
    !weight ||
    !profession;

  return (
    <div className="py-4 bg-pink-100 rounded">
      <Helmet>
        <title>My Profile - Chemistry Corner</title>
      </Helmet>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-6 ms-4">
          <div className="bg-gray-100 md:w-3/12 p-4 rounded-xl shadow-xl">
            <div className="bg-white p-3 border-t-4 border-green-400 rounded shadow-sm">
              <div className="overflow-hidden">
                <img className="h-auto w-full mx-auto" src={image} alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {name}
              </h1>
              <h1 className="text-gray-900 leading-8 text-base my-1">Bio</h1>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {bio}
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-9/12 md:px-4 relative">
            <div className="bg-white p-3 shadow-xl rounded-xl w-full">
              <div className="flex items-center gap-2 text-gray-900 leading-8 px-4">
                <FaUser className="text-xl" />
                <span className="text-2xl font-semibold">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2 capitalize">{name}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2 capitalize">{gender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">{contact}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Age</div>
                    <div className="px-4 py-2">{age} years</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Height (cm)</div>
                    <div className="px-4 py-2">{height} cm</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Weight (kg)</div>
                    <div className="px-4 py-2">{weight} kg</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Address</div>
                    <div className="px-4 py-2">{address}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">City</div>
                    <div className="px-4 py-2 capitalize">{city}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Country</div>
                    <div className="px-4 py-2 uppercase">{country}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800">{email}</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Education</div>
                    <div className="px-4 py-2 uppercase">{education}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Date of Birth</div>
                    <div className="px-4 py-2">{dob}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Marital Status
                    </div>
                    <div className="px-4 py-2 capitalize">{maritalStatus}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Profession</div>
                    <div className="px-4 py-2 capitalize">{profession}</div>
                  </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-4 lg:flex lg:flex-col">
                  <div className="px-4 py-2 font-semibold col-span-1">
                    My Interests
                  </div>
                  <div className="px-4 py-2 capitalize col-span-3 flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-2">
                    {interests?.slice(0, 7).map((interest, i) => (
                      <div key={i} className="text-xs">
                        <p className="border border-[#ED0058] p-1 text-black">
                          {interest.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/dashboard/update-profile">
                <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                  Edit Profile
                </button>
              </Link>
            </div>
            <div>
              {isProfileIncomplete && (
                <div className=" bg-white absolute inset-0 my-4 w-full h-full flex flex-col items-center justify-center gap-5 bg-opacity-90 backdrop-blur-sm">
                  <h1 className="text-black text-xl font-semibold text-center md:text-left">
                    Please Edit your profile to see your details.
                  </h1>
                  <Link to="/dashboard/update-profile">
                    <button className="bg-[#ee236e] text-white px-5 py-2">
                      Edit Profile
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="bg-gray-100 shadow-xl my-6 px-4 py-4 md:py-2 rounded-xl">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <TfiGallery className="text-2xl font-bold" />
                <span className="text-2xl font-bold"> My Photos</span>
              </div>
              <div className="flex flex-col md:flex-row items-center py-2 gap-4 my-3">
                <div className="w-full md:w-2/5 border border-black rounded-lg px-5 py-10">
                  <form>
                    <div className="form-control flex flex-col items-start gap-5">
                      <label htmlFor="photos" className="text-black text-lg">
                        Add More Photos
                      </label>
                      <input type="file" />
                    </div>
                  </form>
                </div>
                <Swiper
                  slidesPerView={2}
                  spaceBetween={5}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper w-full md:w-3/5"
                >
                  <SwiperSlide>
                    <img
                      src={user1}
                      alt=""
                      className="w-44 md:w-full h-44 rounded-lg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={user2}
                      alt=""
                      className="w-44 md:w-full h-44 rounded-lg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={user3}
                      alt=""
                      className="w-44 md:w-full h-44 rounded-lg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={user4}
                      alt=""
                      className="w-44 md:w-full h-44 rounded-lg"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

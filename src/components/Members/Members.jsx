import { useContext, useEffect, useState } from "react";
import siteLoader from "/ccLoader.gif";
import Container from "../shared/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaMapMarkerAlt,
  FaRegHeart,
  FaRegStar,
  FaRegComment,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import membersBg from "../../assets/membersBg.jpg";
import { Helmet } from "react-helmet-async";
import {
  addToFavorite,
  createChatConversation,
  getAllMembers,
  getGenderWiseMembers,
  giveLike,
  membersSearch,
  removeFromFavorite,
  removeLike,
} from "../../api/fetch";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import useGetLikes from "../../Hooks/useGetLikes";
import useGetFavorite from "../../Hooks/useGetFavorite";
import useSingleUser from "../../Hooks/useSingleUser";

const Members = () => {
  const { user } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user.email);
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likes, likeRefetch, likesLoading] = useGetLikes();
  const [favorites, favRefetch, favLoading] = useGetFavorite();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMembers().then((data) => setMembers(data));
  }, []);

  const handleMembers = (gender) => {
    setCurrentPage(1);
    getGenderWiseMembers(gender).then((data) => setMembers(data));
  };

  const handleSearch = () => {
    membersSearch(search).then((member) => setMembers(member));
  };

  const handleFavorite = (id) => {
    const favInfo = {
      name: user?.displayName,
      email: user?.email,
      userId: id,
    };
    addToFavorite(favInfo)
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Added to favorite`);
          favRefetch();
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // When removing from favorites
  const handleRemoveFromFavorite = (id) => {
    removeFromFavorite(id)
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Removed from favorite`);
          favRefetch();
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleAddLike = (id) => {
    const userInfo = {
      name: user?.displayName,
      email: user?.email,
      userId: id,
    };
    giveLike(id, userInfo)
      .then(() => {
        likeRefetch();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  const handleRemoveLike = (id) => {
    removeLike(id)
      .then(() => {
        likeRefetch();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // ====handle chat functionality=====
  const handleChat = (receiverId) => {
    setLoading(true);
    const chatInfo = {
      senderId: singleUser._id,
      receiverId: receiverId,
    };
    createChatConversation(chatInfo)
      .then(() => {
        setLoading(false);
        navigate("/dashboard/messages");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    if (loading) {
      navigate("/dashboard/messages");
    }
  };

  const membersPerPage = 6;
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
  const totalPages = Math.ceil(members.length / membersPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? "bg-pink-500 text-white"
              : "bg-pink-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const genderLists = [
    { label: "all", value: "" },
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "non-binary", value: "non-binary" },
  ];

  if (likesLoading && favLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }

  return (
    <div style={{ backgroundImage: `url(${membersBg})` }} className="mx-1">
      <Helmet>
        <title>Members - Chemistry Corner</title>
      </Helmet>
      <div>
        <div className="page-header-bg w-full h-64 bg-no-repeat bg-cover bg-center">
          <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-4">
              Find Your Partner with Names.
            </h1>
            <div className="flex items-center p-1 md:p-2 md:space-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="flex bg-gray-100 p-2 w-36 md:w-60 md:space-x-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-100 outline-none"
                  type="text"
                  placeholder="Search by Name ..."
                />
              </div>

              <button
                onClick={handleSearch}
                className="bg-[#ED0058] py-2 md:py-3 px-3 md:px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="text-center">
          <Tabs className="mt-10">
            <TabList className="md:w-1/2 mx-auto whitespace-nowrap text-center grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-3 md:gap-10 py-3">
              {genderLists.map((item, i) => (
                <Tab
                  key={i}
                  onClick={() => handleMembers(item?.value)}
                  className="bg-[#ED0058] hover:bg-[#ed0057b0] text-white capitalize font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl cursor-pointer"
                >
                  {item?.label}
                </Tab>
              ))}
            </TabList>
            {genderLists.map((i, index) => (
              <TabPanel key={index}>
                <div className="grid justify-center items-center gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 pt-24">
                  {currentMembers.map((item) => (
                    <div
                      className="card w-80 md:w-96  rounded-3xl shadow-xl flex justify-center items-center mx-auto mt-16 mb-12"
                      key={item._id}
                    >
                      <div className="p-1 rounded-3xl transform-gpu transition-all selection:bg-sky-100 h-full grid place-items-center bg-gradient-to-tl to-[#FFD3A5] from-[#FD6585] dark:selection:bg-white/10">
                        <div className="bg-white px-12 pt-16 pb-14 shadow-2xl shadow-black/[0.2] rounded-3xl text-center flex flex-col justify-center max-w-md transition-colors">
                          <div className="select-none">
                            <img
                              src={item?.image}
                              className="shadow-2xl shadow-black/[0.2] rounded-3xl h-60 w-60 mx-auto -mt-40 transform-gpu transition-all hover:scale-105"
                              style={{ userSelect: "none" }}
                              alt="avatar"
                            />
                            <div className="flex flex-row items-center justify-center gap-5 mt-5">
                              {likes.some(
                                (member) => member.userId === item._id
                              ) ? (
                                <button
                                  className="p-2"
                                  onClick={() => handleRemoveLike(item._id)}
                                >
                                  <FaHeart className="text-2xl text-[#ED0058]" />
                                </button>
                              ) : (
                                <button
                                  className="p-2"
                                  onClick={() => handleAddLike(item._id)}
                                >
                                  <FaRegHeart className="text-2xl text-black hover:text-[#ED0058]" />
                                </button>
                              )}

                              {favorites.some(
                                (member) => member.userId === item._id
                              ) ? (
                                <button
                                  className="p-2"
                                  onClick={() =>
                                    handleRemoveFromFavorite(item._id)
                                  }
                                >
                                  <FaStar className="text-2xl text-[#ED0058]"></FaStar>
                                </button>
                              ) : (
                                <button
                                  className="p-2"
                                  onClick={() => handleFavorite(item._id)}
                                >
                                  <FaRegStar className="text-2xl text-black hover:text-[#ED0058]" />
                                </button>
                              )}

                              <button
                                className="p-2"
                                onClick={() => handleChat(item._id)}
                              >
                                <FaRegComment className="text-2xl text-black hover:text-[#ED0058]" />
                              </button>
                            </div>
                          </div>

                          <h1 className="mt-12 text-3xl font-bold text-slate-800 capitalize">
                            {item?.name}
                          </h1>

                          <p className="mt-4 text-slate-600">
                            {item?.bio?.slice(0, 70)}...
                          </p>
                          <p>
                            <span className="flex justify-center items-center py-3 gap-1 text-sm leading-normal text-[#94A3B8] font-bold uppercase">
                              <FaMapMarkerAlt />
                              {item?.country}
                            </span>
                          </p>

                          <div className="card-actions">
                            <Link
                              to={`/view-profile/${item._id}`}
                              className="btn bg-[#FD6585] hover:bg-[#ED0058] w-full text-white border-0"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center pb-8 items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
                  >
                    Previous
                  </button>
                  {renderPageNumbers()}
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
                  >
                    Next
                  </button>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default Members;

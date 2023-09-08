import { FiSearch } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
const users = [
  {
    image:
      "https://i.ibb.co/56Rcygk/freestocks-9-UVml-Ib0w-JU-unsplash.jpg",
    name: "Alice Robertson",
    message: "Message for Alice Robertson",
    time: "10:46 AM",
    status: "1",
  },
  {
    image:
      "https://i.ibb.co/XF1BGvx/tamara-bellis-Brl7bqld05-E-unsplash.jpg",
    name: "Joanna Gonzalez",
    message: "Message for Joanna Gonzalez",
    time: "09:06 AM",
    status: <TiTick color="pink" size="0.8rem" />,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLi_BSePjHLv0mWV4jUzOwNwO8Ce_G79Yal19X-9pRK5_H4kQpSxCe6hjBfP2_Ku6bKM&usqp=CAU",
    name: "Lina Roy",
    message: "Message for Line",
    time: "01:34 PM",
    status: <TiTick color="pink" size="0.8rem" />,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aU6t55CbwoX_sgLT74XD1sMomgOM9NYkV7nv9L3QEcpy-97-Xv7Sc1Mp_rSOhOL8YVo&usqp=CAU",
    name: "Jessica Giloy",
    message: "Message for Jessica Giloy",
    time: "3:29 PM",
    status: <TiTick color="pink" size="0.8rem" />,
  },
  {
    image:
      "https://i.ibb.co/nzCKB6S/lina2.webp",
    name: "Lina Gomes",
    message: "Message for Lina Gomes",
    time: "4:08 PM",
    status: "1",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU",
    name: "Elizabeth Olsen",
    message: "Message for Elizabeth Olsen",
    time: "8:30 AM",
    status: <TiTick color="pink" size="0.8rem" />,
  },
];
const UserArea = () => {
  return (
    <div>
      <div className="p-4 bg-gray-100" style={{ height: "100vh" }}>

        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img
              src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile"
              className="rounded-full border-1 border-pink-800 w-16 h-16 object-cover"
            />
            <div className="mt-2.5 font-bold">
              <h1 className="text-md text-pink-600">Gravid Christofer</h1>
              <h2 className="text-xs text-gray-500">Senior Developer</h2>
            </div>
          </div>

        </div>


        <div className="my-4 py-2">
          <div className="relative flex items-center text-gray-400">
            <FiSearch className="w-5 h-5 absolute ml-3" size="0.8rem" />
            <input
              type="text"
              placeholder={`Search Friends`}
              className="rounded-2xl pl-10 py-1.5 w-full"
            />
          </div>
        </div>


        {users &&
          users.map((user) => {
            return (
              <Link key={user.name} className="flex space-x-3 my-4">
                <div>
                  <img
                    src={user.image}
                    alt="profile"
                    className="rounded-full w-12 h-10 object-cover"
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div className="">
                    <h1 className="text-pink-600 text-sm font-bold">
                      {user.name}
                    </h1>
                    <p className="text-gray-500 text-xs">{user.message}</p>
                  </div>
                  <div>
                    <p
                      className="text-gray-500 mt-0.5"
                      style={{ fontSize: "10px" }}
                    >
                      {user.time}
                    </p>
                    <p
                      className={`text-white ${
                        user.status === "1" ? "bg-pink-700" : "bg-gray-100"
                      } rounded-full w-4 text-center float-right mt-1`}
                      style={{ fontSize: "10px" }}
                    >
                      {user.status}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default UserArea;

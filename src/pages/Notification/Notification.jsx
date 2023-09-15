import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div>
      <div className="w-full">
        <div>
          <div>
            <div className="flex justify-evenly items-center gap-2 py-1 mx-auto my-1 rounded-lg hover:shadow-lg hover:bg-pink-300">
              <div>
                <div className="h-[50px] w-[50px]">
                  <img
                    className="rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span className="text-lg text-gray-900">
                  Emma would like you.
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-2 py-1 mx-auto my-1 rounded-lg hover:shadow-lg hover:bg-pink-300">
              <div>
                <div className="h-[50px] w-[50px]">
                  <img
                    className="rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span className="text-lg text-gray-900">
                  Emma would like you.
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-2 py-1 mx-auto my-1 rounded-lg hover:shadow-lg hover:bg-pink-300">
              <div>
                <div className="h-[50px] w-[50px]">
                  <img
                    className="rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span className="text-lg text-gray-900">
                  Emma would like you.
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-evenly items-center mx-auto rounded-lg">
              <Link
                to="/dashboard/notifications"
                className="btn bg-red-500 hover:bg-[#ED0058] my-16 md:my-8 border-0 text-white shadow-xl capitalize"
              >
                See all notification
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

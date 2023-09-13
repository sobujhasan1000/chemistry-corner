const Notification = () => {
  return (
    <div>
      <div className="w-full">
        <div>
          <div>
            <div className="flex justify-center items-center gap-2 p-3 bg-pink-200 rounded-lg shadow-xl mx-auto max-w-sm my-2">
              <div>
                <div className="h-[52px] w-[52px]">
                  <img
                    className="rounded-full"
                    src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span className="text-lg font-semibold text-gray-900">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

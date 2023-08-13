import RegisterComponent from "../ModalComponents/RegisterComponent";
import { FaUser } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LoginComponent from "../ModalComponents/LoginComponent";
const Register = () => {
  return (
    <div className=" bg-[#ee236e] w-2/3 md:w-96 p-2 absolute top-4 md:top-[25%] left-10 md:left-40 right-0 md:right-0 z-20">
      <div className="bg-[#ED0058] px-2 md:px-4 py-3 md:py-6">
        <h1 className="text-base md:text-xl text-white mb-4">
          Create an Account / Login
        </h1>
        <p className="text-xs md:text-sm text-white mb-3">
          Please Register / Log In to visit all features of Chemistry Corner.{" "}
          <span className="italic">
            Just Click the Sign Up button to open{" "}
            <strong className="underline">Sign up and Login</strong> modal.
          </span>
        </p>

        <div>
          <div className="w-full flex justify-end mt-5">
            <button
              className="flex items-center gap-2 bg-[#e84681]  text-white px-3 md:px-5 py-2 cursor-pointer"
              onClick={() => window.my_modal_3.showModal()}
            >
              <FaUser className="text-white" /> Sign Up
            </button>
          </div>
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box md:w-1/2 bg-[#ED0058]">
            {/* max w 5xl */}
            <button
              onClick={() => window.my_modal_3.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h1 className="text-white text-2xl font-bold mb-5">
              Register / Login
            </h1>
            <Tabs>
              <TabList className="flex items-center justify-center gap-5">
                <Tab
                  className="text-black bg-white hover:text-[#ED0058] duration-300 cursor-pointer outline-none p-2"
                  selectedClassName="font-semibold "
                >
                  Register
                </Tab>
                <Tab
                  className="text-black bg-white hover:text-[#ED0058] duration-300 cursor-pointer outline-none px-4 py-2"
                  selectedClassName="font-semibold "
                >
                  Login
                </Tab>
              </TabList>

              <TabPanel>
                <RegisterComponent></RegisterComponent>
              </TabPanel>
              <TabPanel>
                <LoginComponent close={close}></LoginComponent>
              </TabPanel>
            </Tabs>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Register;

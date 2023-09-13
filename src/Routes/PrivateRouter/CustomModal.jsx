import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RegisterComponent from "../../components/ModalComponents/RegisterComponent";
import LoginComponent from "../../components/ModalComponents/LoginComponent";
import { FaUser } from "react-icons/fa";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const CustomModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      // style={customStyles}
    >
      <div className="flex flex-col items-center justify-center gap-5 h-full">
        <h1 className="text-[#ED0058] text-xl md:text-2xl text-center">
          You Are not Authenticated. Please Login / Register First.
        </h1>
        <div>
          <div className="w-full flex justify-end mt-5">
            <button
              className="flex items-center gap-2 bg-[#e84681]  text-white px-3 md:px-5 py-2 cursor-pointer"
              onClick={() => window.my_modal_3.showModal()}
            >
              <FaUser className="text-white" /> Login / Sign Up
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
    </Modal>
  );
};

export default CustomModal;

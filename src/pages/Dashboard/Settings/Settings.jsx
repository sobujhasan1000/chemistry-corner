import Container from "../../../components/shared/Container";

const Settings = () => {
  return (
    <Container>
      <div className="mt-10 md:mt-0 lg:mt-0">
        <h1 className="text-2xl text-black">Account Setttings</h1>
        <p className="text-sm text-[#ED0058]">
          Choose your privacy settings to your own
        </p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-3 md:grid-cols-2 mb-5">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-black">Your Account Info</h1>
          </div>
          <div>
            <p className="text-[#ED0058]">Hide / Show</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Email</h1>
              <p className="text-sm text-[#ED0058]">
                Your email is : mshipan657@gmail.com
              </p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Contact No.</h1>
              <p className="text-sm text-[#ED0058]">
                Your contact number is : 01622543390
              </p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Height</h1>
              <p className="text-sm text-[#ED0058]">Your height is : 156 cm</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Weight</h1>
              <p className="text-sm text-[#ED0058]">Your weight is : 56 kg</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Address</h1>
              <p className="text-sm text-[#ED0058]">Your address is : Mirpur</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">City</h1>
              <p className="text-sm text-[#ED0058]">Your city is : Dhaka</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Country</h1>
              <p className="text-sm text-[#ED0058]">
                Your country is : Bangladesh
              </p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Education</h1>
              <p className="text-sm text-[#ED0058]">Your education is : BBA</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Marital Status</h1>
              <p className="text-sm text-[#ED0058]">
                Your marital status is : Single
              </p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Gender</h1>
              <p className="text-sm text-[#ED0058]">Your gender is : Female</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Age</h1>
              <p className="text-sm text-[#ED0058]">Your age is : 28</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Date of Birth</h1>
              <p className="text-sm text-[#ED0058]">Your dob is : 1995-10-12</p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Profession</h1>
              <p className="text-sm text-[#ED0058]">
                Your profession is : Student
              </p>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Interests</h1>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-2 items-center">
            <div className="col-span-2 md:col-span-1">
              <h1 className="text-black">Photos</h1>
            </div>
            <input type="checkbox" className="toggle toggle-secondary" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Settings;

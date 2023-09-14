import { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import useSingleUser from "../Hooks/useSingleUser";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../api/utils";
import { modifyUser } from "../api/auth";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [singleUser] = useSingleUser(user?.email);
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
  } = singleUser;
  const { control, register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/profile";

  const options = [
    { value: "travel-and-exploration", label: "Travel and exploration" },
    { value: "hiking", label: "Hiking" },
    { value: "biking", label: "Biking" },
    { value: "camping", label: "Camping" },
    { value: "painting", label: "Painting" },
    { value: "drawing", label: "Drawing" },
    { value: "photography", label: "Photography" },
    { value: "cooking", label: "Cooking" },
    { value: "yoga", label: "Yoga" },
    { value: "cooking", label: "Cooking" },
    { value: "running", label: "Running" },
    { value: "weightlifting", label: "Weightlifting" },
    { value: "cricket", label: "Cricket" },
    { value: "football", label: "Football" },
    { value: "reading", label: "Reading" },
    { value: "dancing", label: "Dancing" },
    { value: "watching-movies", label: "Watching Movies" },
    { value: "food", label: "Food" },
    { value: "concerts", label: "Concerts" },
    { value: "live-music-events", label: "Live Music Events" },
    { value: "meditation", label: "Meditation" },
    { value: "volunteer", label: "Volunteer" },
    { value: "charity-work", label: "Charity Work" },
    { value: "casual-dating", label: "Casual Dating" },
    { value: "long-term-commitment", label: "Long Term Commitment" },
    { value: "family-values", label: "Family Values" },
    { value: "parenting-interests", label: "Parenting Interests" },
    { value: "cultural", label: "Cultural" },
    { value: "religious-beliefs", label: "Religious Beliefs" },
    { value: "political-interests", label: "Political Interests" },
    { value: "astronomy", label: "Astronomy" },
    { value: "pet-lovers", label: "Pet Lovers" },
    { value: "volunteer", label: "Volunteer" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    const image = data.photo[0];
    imageUpload(image).then((imageData) => {
      const imageUrl = imageData?.data?.display_url;
      updateUserProfile(data.name, imageUrl).then(() => {
        setUser({
          ...user,
          displayName: data.name,
          photoURL: imageUrl,
        });
        const userInfo = {
          name: data.name,
          email: data.email,
          image: imageUrl,
          gender: data.gender,
          age: parseInt(data.age),
          profession: data.profession.toLowerCase(),
          bio: data.bio,
          contact: data.contact,
          height: parseFloat(data.height),
          weight: parseFloat(data.weight),
          address: data.address,
          city: data.city.toLowerCase(),
          country: data.country.toLowerCase(),
          education: data.education.toLowerCase(),
          dob: data.dob,
          maritalStatus: data.maritalStatus.toLowerCase(),
          interests: data.interests,
        };
        modifyUser(userInfo, user.email).then((modifiedData) => {
          if (modifiedData.modifiedCount > 0) {
            setLoading(false);
            toast.success(`Users information updated successfully`);
            navigate(from, { replace: true });
            reset();
          }
        });
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Update Profile - Chemistry Corner</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-100 min-h-screen py-10">
          <div className="container mx-auto px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-20">
              <div className="bg-gray-100 md:w-3/12 p-4">
                <div className="bg-white p-3 border-t-4 border-green-400 rounded shadow-sm">
                  <div className="overflow-hidden">
                    <img className="h-auto w-full mx-auto" src={image} alt="" />
                    <div className="my-3">
                      <label htmlFor="photoURL" className="text-black">
                        Upload Photo
                      </label>
                      <input
                        type="file"
                        name="photo"
                        {...register("photo")}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {name}
                  </h1>
                  <h1 className="text-gray-900 leading-8 text-base my-1">
                    Bio
                  </h1>
                  <textarea
                    name="bio"
                    defaultValue={bio}
                    className="bg-white x-3 py-1 border border-[#ee236e]"
                    cols="35"
                    rows="5"
                    {...register("bio")}
                  ></textarea>

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

              <div className="md:w-9/12 p-4 ">
                <div className="bg-white p-3 shadow-sm rounded-sm w-full">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <FaUser />
                    <span className="tracking-wide">Update Profile</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm gap-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Name</div>
                        <input
                          type="text"
                          name="name"
                          defaultValue={name}
                          {...register("name")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Gender</div>
                        <select
                          name="gender"
                          defaultValue={gender}
                          {...register("gender")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-Binary</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <input
                          type="text"
                          name="contact"
                          defaultValue={contact}
                          {...register("contact")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Age</div>
                        <input
                          type="text"
                          name="age"
                          defaultValue={age}
                          {...register("age")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Height (cm)
                        </div>
                        <input
                          type="number"
                          name="height"
                          defaultValue={height}
                          {...register("height")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Weight (kg)
                        </div>
                        <input
                          type="number"
                          name="weight"
                          defaultValue={weight}
                          {...register("weight")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Address</div>
                        <input
                          type="text"
                          name="address"
                          defaultValue={address}
                          {...register("address")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">City</div>
                        <input
                          type="text"
                          name="city"
                          defaultValue={city}
                          {...register("city")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Country</div>
                        <input
                          type="text"
                          name="country"
                          defaultValue={country}
                          {...register("country")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <input
                          type="email"
                          name="email"
                          defaultValue={email}
                          {...register("email")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          readOnly
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Education</div>
                        <input
                          type="text"
                          name="education"
                          defaultValue={education}
                          {...register("education")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Date of Birth
                        </div>
                        <input
                          type="date"
                          name="dob"
                          {...register("dob")}
                          defaultValue={dob}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Marital Status
                        </div>
                        <select
                          name="maritalStatus"
                          defaultValue={maritalStatus}
                          {...register("maritalStatus")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="single">Single</option>
                          <option value="married">Married</option>
                          <option value="divorce">Divorce</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Profession
                        </div>
                        <input
                          type="text"
                          name="profession"
                          defaultValue={profession}
                          {...register("profession")}
                          className="px-3 py-1 bg-white border border-[#ee236e]"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center mt-2">
                      <div className="px-4 py-2 font-semibold text-gray-700 text-sm">
                        Add your interests
                      </div>
                      <Controller
                        name="interests"
                        control={control}
                        render={({ field }) => (
                          <CreatableSelect
                            {...field}
                            options={options}
                            isMulti
                            isSearchable
                            placeholder="Select your interests..."
                            className="py-1 bg-white w-full col-span-3 placeholder:text-black"
                            styles={{
                              control: (baseStyles, state) => ({
                                ...baseStyles,
                                borderColor: state.isFocused
                                  ? "#ee236e"
                                  : "#ee236e",
                                borderRadius: state.isFocused ? "0" : "0",
                                color: state.isFocused ? "black" : "black",
                              }),
                            }}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                {loading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  <div className="flex items-center justify-center">
                    <input
                      type="submit"
                      className="block text-white hover:text-[#ED0058] text-sm font-semibold rounded-lg hover:bg-white focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 cursor-pointer bg-[#ED0058] border border-[#ED0058] transition-all ease-in-out duration-300"
                      value="Update Profile"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfile;

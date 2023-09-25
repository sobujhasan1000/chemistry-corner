import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useContext, useState } from "react";
import { imageUpload } from "../../../api/utils";
import { TfiGallery } from "react-icons/tfi";
import { AuthContext } from "../../../providers/AuthProvider";
import useSingleUser from "../../../Hooks/useSingleUser";
import { updateUserPhotos } from "../../../api/auth";
import toast from "react-hot-toast";

const MyPhotos = () => {
  const { user } = useContext(AuthContext);
  const [singleUser, loading] = useSingleUser(user?.email);
  const [selectedFiles, setSelectedFiles] = useState([]);
  //   const [uploadedPhotoLinks, setUploadedPhotoLinks] = useState([]);
  const [uploading, setUploading] = useState(false);
  console.log(singleUser.photos);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);

    const newUploadedPhotoLinks = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const image = selectedFiles[i];
      const imageData = await imageUpload(image);
      const imageUrl = imageData?.data?.display_url;

      if (imageUrl) {
        newUploadedPhotoLinks.push(imageUrl);
      }
    }
    console.log(newUploadedPhotoLinks);
    // setUploadedPhotoLinks(newUploadedPhotoLinks);
    // console.log(uploadedPhotoLinks);
    updateUserPhotos(singleUser._id, newUploadedPhotoLinks)
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Photos added");
          setUploading(false);
          //   setSelectedFiles([]);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        // setSelectedFiles([]);
        setUploading(false);
      });
  };

  return (
    <>
      <div className="bg-gray-100 shadow-xl my-6 px-4 md:py-2 rounded-xl">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <TfiGallery className="text-2xl font-bold" />
          <span className="text-2xl font-bold"> My Photos</span>
        </div>
        <div className="flex flex-col md:flex-row items-center py-2 gap-4 mt-3">
          <div className="border border-black px-5 py-10">
            <form>
              <div className="form-control flex flex-col items-start gap-5">
                <label htmlFor="photos" className="text-black text-lg">
                  Add More Photos
                </label>
                <input type="file" multiple onChange={handleFileChange} />
                <button onClick={handleUpload}>
                  {uploading ? "Image uploading..." : "Upload Photos"}
                </button>
              </div>
            </form>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {singleUser.photos && singleUser.photos.length !== 0 ? (
              <>
                {singleUser.photos.map((item) => (
                  <SwiperSlide key={item}>
                    <img
                      src={`${item}`}
                      alt="Photos"
                      className="w-full h-44 rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <span>No Photos added</span>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MyPhotos;

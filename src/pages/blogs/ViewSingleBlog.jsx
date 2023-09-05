import { useParams } from "react-router-dom";
import useSingleBlog from "../../Hooks/useSingleBlog";
import siteLoader from "/ccLoader.gif";
import Container from "../../components/shared/Container";
import BlogCategories from "./BlogCategories";
import { BsCalendarEvent } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import RelatedPost from "./RelatedPost";
import NewBlogPosts from "./NewBlogPosts";
import moment from "moment";

function convertHtmlToPlainText(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
}

const ViewSingleBlog = () => {
  const { id } = useParams();
  const [singleBlog, loading] = useSingleBlog(id);
  console.log("single blog", singleBlog);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={siteLoader} alt="Website Loader" />
      </div>
    );
  }
  return (
    <div>
      <Container>
        <div className="w-full h-[40vh] flex flex-col items-center justify-center gap-5 bg-[#FD6585]">
          <h1 className="text-3xl text-white font-signature capitalize">
            Blog Details
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10 container mx-auto my-20 items-start justify-center">
          <div className="w-full md:w-1/2">
            <img
              src={singleBlog.image_url}
              alt="Blog Photo"
              className="w-full"
            />
            <div className="py-4 flex items-center gap-10 border-b border-black">
              <p className="inline-flex items-center gap-1 text-black font-semibold text-sm md:text-base">
                <BsCalendarEvent className=" text-gray-400" />
                {moment(singleBlog.blog_time).format("Do MMM, YYYY- hh:m a")}
              </p>
              <p className="inline-flex items-center gap-1 text-black font-semibold text-sm md:text-base">
                <PiUserCircle className="text-xl text-gray-400" />
                {singleBlog.author_name}
              </p>
              <p className="inline-flex items-center gap-1 text-black font-semibold text-sm md:text-base">
                <AiOutlineHeart className="text-xl text-gray-400" />
                {singleBlog.total_likes}
              </p>
            </div>

            <div className="my-10">
              <h1 className="text-black text-lg md:text-xl font-signature mb-8">
                {singleBlog.blog_heading}
              </h1>
              <p className="text-sm text-gray-500">
                {convertHtmlToPlainText(singleBlog.description)}
              </p>
            </div>
            <div className="flex items-center gap-5 border-b border-black pb-10">
              <button className="px-3 py-1 bg-white hover:bg-[#ED0058] text-black hover:text-white border border-black hover:border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                News
              </button>
              <button className="px-3 py-1 bg-white hover:bg-[#ED0058] text-black hover:text-white border border-black hover:border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                Blog
              </button>
              <button className="px-3 py-1 bg-white hover:bg-[#ED0058] text-black hover:text-white border border-black hover:border-[#ED0058] rounded-md transition-all ease-in-out duration-300">
                Tips
              </button>
            </div>
            <div className="mt-10">
              <h1 className="text-black text-lg md:text-xl font-signature mb-10">
                Related Posts
              </h1>

              <RelatedPost />
            </div>
          </div>
          <div className="md:w-1/4 hidden md:block">
            <BlogCategories />
            <NewBlogPosts />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ViewSingleBlog;

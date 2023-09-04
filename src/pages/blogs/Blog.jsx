import { FcBusinessman, FcLike, FcMms, FcOvertime } from "react-icons/fc";
import Container from "../../components/shared/Container";
import { Helmet } from "react-helmet-async";
import BlogCategories from "./BlogCategories";
import NewblogPosts from "./NewblogPosts";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../api/fetch";
import { Link } from "react-router-dom";

function convertHtmlToPlainText(html) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(1);

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, []);

  const blogsPerPage = 6;
  const indexOfLastBlog = currentBlog * blogsPerPage;
  const indexOfLastblog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfLastblog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentBlog(i)}
          className={`px-3 py-1 rounded-md ${
            currentBlog === i
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

  return (
    <div>
      <Helmet>
        <title>Blogs - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Blogs</h1>
        </div>
      </div>
      <Container>
        <div className="lg:flex">
          <div className="my-4 text-black text-center grid lg:grid-cols-3 w-full justify-items-center lg:w-2/3 gap-2 ">
            {currentBlogs.map((blog, i) => (
              <div
                key={i}
                className="my-8 gap-4 hover:shadow-2xl duration-300 border border-gray-200"
              >
                <div className="p-6">
                  <img
                    className="rounded-md w-full h-60"
                    src={blog.image_url}
                    alt=""
                  />
                </div>
                <div className="flex items-center justify-center p-4">
                  <div>
                    <h1 className="lg:text-2xl p-2">{blog.blog_heading}</h1>
                    <p className="flex gap-2 items-center justify-center text-sm">
                      <FcBusinessman />
                      {blog.author_name}
                      <FcOvertime />
                      {formatDate(blog.blog_time)} <FcLike />
                      {blog.total_likes} <FcMms />
                      {blog.comments?.length}
                    </p>
                    <p className="p-4">
                      {convertHtmlToPlainText(blog.description).slice(0, 100)}
                      ...
                    </p>
                    <Link
                      to={`/view-blog/${blog._id}`}
                      className="btn bg-[#FD6585] hover:bg-[#ED0058] text-white border-0"
                    >
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ============== categories secton================= */}
          <div className="lg:w-1/3 my-11">
            <BlogCategories></BlogCategories>
            <NewblogPosts></NewblogPosts>
          </div>
        </div>
        <div className="flex justify-center pb-8 items-center space-x-2">
          <button
            onClick={() => setCurrentBlog(currentBlog - 1)}
            disabled={currentBlog === 1}
            className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
          >
            Previous
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => setCurrentBlog(currentBlog + 1)}
            disabled={currentBlog === totalPages}
            className="px-3 py-1 rounded-md bg-pink-200 hover:bg-pink-400"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Blog;

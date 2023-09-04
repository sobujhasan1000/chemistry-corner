import { Link } from "react-router-dom";

const NewblogPosts = ({ blogs }) => {
  const sortedBlogs = blogs.sort((a, b) => {
    const timestampA = new Date(a.blog_time).getTime();
    const timestampB = new Date(b.blog_time).getTime();
    return timestampB - timestampA;
  });

  const lastThreeBlogs = sortedBlogs.slice(0, 3);

  return (
    <div className="text-center">
      <h1 className="mt-8 text-2xl text-black font-bold">New Posts</h1>
      {lastThreeBlogs.map((blog) => (
        <Link
          to={`/view-blog/${blog._id}`}
          className="flex lg:h-36 p-6 ml-4 hover:shadow-2xl"
          key={blog._id}
        >
          <img className="rounded-md" src={blog.image_url} alt="" />
          <div className="font-bold pl-2">
            <h1>{blog.blog_heading}</h1>
            <h2 className="text-red-400">{`${new Date(
              blog.blog_time
            ).toLocaleDateString("en-US")}`}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewblogPosts;

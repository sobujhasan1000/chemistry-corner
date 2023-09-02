const BlogCategories = () => {
  return (
    <div>
      <h1 className="text-center lg:pt-20 text-xl text-black">Categories</h1>
      <div className="ml-4 lg:ml-20 pl-2 pt-6">
        <h2 className="mb-4 flex items-center justify-between text-gray-500">
          News <span className="inline-block">6</span>
        </h2>
        <h2 className="mb-4 flex items-center justify-between text-gray-500">
          Dating Tips <span className="inline-block">6</span>
        </h2>
        <h2 className="mb-4 flex items-center justify-between text-gray-500">
          Men <span className="inline-block">6</span>
        </h2>
        <h2 className="mb-4 flex items-center justify-between text-gray-500">
          Women <span className="inline-block">6</span>
        </h2>
        <h2 className="mb-4 flex items-center justify-between text-gray-500">
          Non-binary <span className="inline-block">6</span>
        </h2>
      </div>
    </div>
  );
};

export default BlogCategories;

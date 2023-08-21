import React from "react";

const BlogCategories = () => {
  return (
    <div>
      <h1 className="text-center lg:pt-20 text-xl">Categories</h1>
      <div className="ml-4 lg:ml-20 pl-2 pt-6">
        <h2 class="mb-4 flex items-center justify-between">News <span className="inline-block">6</span></h2>
        <h2 class="mb-4 flex items-center justify-between">Dating Tips <span className="inline-block">6</span></h2>
        <h2 class="mb-4 flex items-center justify-between">Men <span className="inline-block">6</span></h2>
        <h2 class="mb-4 flex items-center justify-between">Women <span className="inline-block">6</span></h2>
        <h2 class="mb-4 flex items-center justify-between">Non-binary <span className="inline-block">6</span></h2>
      </div>
    </div>
  );
};

export default BlogCategories;

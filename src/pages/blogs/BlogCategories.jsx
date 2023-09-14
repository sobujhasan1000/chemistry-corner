import { useEffect, useState } from "react";

const BlogCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      .then((response) => response.json())
      .then((data) => {
        const categoryCounts = {};
        data.forEach((blog) => {
          if (categoryCounts[blog.category]) {
            categoryCounts[blog.category]++;
          } else {
            categoryCounts[blog.category] = 1;
          }
        });

        const categoriesArray = Object.keys(categoryCounts).map((category) => ({
          name: category,
          count: categoryCounts[category],
        }));

        setCategoriesData(categoriesArray);
      });
  }, []);

  return (
    <div className=" w-2/3 ">
      <h1 className=" text-2xl text-black font-bold mb-5">Categories</h1>
      <div>
        {categoriesData.map((category) => (
          <h2
            key={category.name}
            className="mb-4 flex items-center justify-between text-gray-500 capitalize"
          >
            {category.name}{" "}
            <span className="inline-block">{category.count}</span>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;

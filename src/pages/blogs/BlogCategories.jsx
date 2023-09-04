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
    <div>
      <h1 className="text-center lg:pt-20 text-2xl text-black font-bold">
        Categories
      </h1>
      <div className="ml-4 lg:ml-20 pl-2 pt-6">
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

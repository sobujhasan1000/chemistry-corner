import React from "react";
import { FcBusinessman, FcLike, FcMms, FcOvertime } from "react-icons/fc";
import Container from "../../components/shared/Container";
import { Helmet } from "react-helmet-async";
import BlogCategories from "./BlogCategories";
import NewblogPosts from "./NewblogPosts";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {

  const { data: Blogs = [], refetch } = useQuery(
    ["blogs"],
    async () => {
      const res = await fetch(`${import.meta.env}/blogs`);
      return res.json();
    }
  );
  console.log(Blogs)

  // const blogs = [
  //   {
  //     blog_heading: "The Importance of Regular Exercise",
  //     description:
  //       "In this blog post, we explore the numerous benefits of maintaining a regular exercise routine.",
  //     author_name: "Jane Smith",
  //     blog_time: "2023-08-16 15:00:00",
  //     total_likes: 126,
  //     image_url:
  //       "https://i.ibb.co/J2ZCf11/pexels-anastasiya-lobanovskaya-792729.jpg",
  //     comments: [
  //       {
  //         user: "JohnDoe82",
  //         comment_text:
  //           "Great article! Exercise has really helped improve my overall health and mood.",
  //       },
  //       {
  //         user: "FitnessFanatic",
  //         comment_text:
  //           "I couldn't agree more. It's incredible how much difference a consistent workout routine can make.",
  //       },
  //     ],
  //   },
  //   {
  //     blog_heading: "Exploring Mindfulness Meditation",
  //     description:
  //       "Learn about the transformative effects of mindfulness meditation on mental well-being.",
  //     author_name: "Alex Johnson",
  //     blog_time: "2023-08-17 10:30:00",
  //     total_likes: 87,
  //     image_url: "https://i.ibb.co/Vm7YMLJ/pexels-jennifer-murray-1067194.jpg",
  //     comments: [
  //       {
  //         user: "ZenSeeker",
  //         comment_text:
  //           "I've personally experienced so much clarity and peace through mindfulness practice.",
  //       },
  //       {
  //         user: "MindfulObserver",
  //         comment_text:
  //           "This post is a great reminder of how important it is to take time for ourselves.",
  //       },import Blogs from './../../components/Home/Blogs';

  //     ],
  //   },
  //   {
  //     blog_heading: "The Art of Creative Writing",
  //     description:
  //       "Discover the techniques and inspiration behind effective and imaginative creative writing.",
  //     author_name: "Eleanor Turner",
  //     blog_time: "2023-08-18 14:15:00",
  //     total_likes: 102,
  //     image_url: "https://i.ibb.co/5KfJWrf/pexels-hong-son-3942878.jpg",
  //     comments: [
  //       {
  //         user: "WordWeaver",
  //         comment_text:
  //           "I've been looking for ways to improve my writing skills. This post is really helpful!",
  //       },
  //       {
  //         user: "InkDreamer",
  //         comment_text:
  //           "Eleanor Turner always has the best advice for aspiring writers.",
  //       },
  //     ],
  //   },
  //   {
  //     blog_heading: "Exploring Culinary Delights: A Food Adventure",
  //     description:
  //       "Embark on a culinary journey as we explore diverse cuisines and the joy of cooking.",
  //     author_name: "Michael Lee",
  //     blog_time: "2023-08-19 12:00:00",
  //     total_likes: 45,
  //     image_url: "https://i.ibb.co/YW3Pmtg/pexels-vjapratama-935824.jpg",
  //     comments: [
  //       {
  //         user: "FoodieExplorer",
  //         comment_text:
  //           "I can't wait to try some of these recipes! Thanks for the mouthwatering post.",
  //       },
  //       {
  //         user: "CookingEnthusiast",
  //         comment_text:
  //           "Cooking is my passion, and this post has me even more excited about experimenting in the kitchen.",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div>
      <div>
        <img src="https://i.ibb.co/k9WQLfS/blog-background.jpg" alt="Background Image" style={{ height: "350px", maxWidth: "100%" }} />
      </div>
      <Container>
       <div className="lg:flex">

       <div className="my-4 text-black text-center grid lg:grid-cols-2 lg:w-2/3">
    {Blogs.map((blog, i) => (
      <div
        key={i}
        className="my-8 gap-4 hover:shadow-2xl"
      >
        <div className="p-6">
          <img
            className="rounded-md"
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
              {blog.blog_time} <FcLike />
              {blog.total_likes} <FcMms />
              {blog.comments.length}
            </p>
            <p className="p-4">{blog.description}</p>
            <button className="btn bg-red-400">read more</button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* ============== categories secton================= */}
  <div className="lg:w-1/3">
  <BlogCategories></BlogCategories>
  <NewblogPosts></NewblogPosts>
  </div>
       </div>
      </Container>
    </div>
  );
};

export default Blog;

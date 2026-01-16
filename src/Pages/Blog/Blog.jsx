import React from "react";
import Banner from "../../SharedComponents/Banner";
import BlogCard from "../../SharedComponents/BlogCard";
import InspirationGallery from "../../SharedComponents/InspirationGallery";

const Blog = () => {
  const bannerContent = {
    title: "Blog",
    description: "Read the latest news and updates from Cafeteria TNC.",
  };

  const blogPosts = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 12, 2026",
      title: "Exploring the World of Single Origin Coffees",
      excerpt:
        "Dive into the unique flavors of single origin coffees, from Ethiopian Yirgacheffe's floral notes to Colombian Supremo's chocolate undertones.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1741993677318-7c269b452379?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 5, 2026",
      title: "Mastering the Art of Coffee Roasting",
      excerpt:
        "Learn how temperature, timing, and bean selection shape the aroma, flavor, and body of artisanal coffee in every roast.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
      date: "March 2, 2026",
      title: "Brewing Techniques for the Perfect Cup",
      excerpt:
        "Discover how pour-over, French press, and espresso brewing methods bring out the best in each coffee roast.",
    },
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 12, 2026",
      title: "Exploring the World of Single Origin Coffees",
      excerpt:
        "Dive into the unique flavors of single origin coffees, from Ethiopian Yirgacheffe's floral notes to Colombian Supremo's chocolate undertones.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1741993677318-7c269b452379?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 5, 2026",
      title: "Mastering the Art of Coffee Roasting",
      excerpt:
        "Learn how temperature, timing, and bean selection shape the aroma, flavor, and body of artisanal coffee in every roast.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
      date: "March 2, 2026",
      title: "Brewing Techniques for the Perfect Cup",
      excerpt:
        "Discover how pour-over, French press, and espresso brewing methods bring out the best in each coffee roast.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Banner content={bannerContent}></Banner>
      <div
        id="blog"
        className="bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </div>

      <InspirationGallery></InspirationGallery>
    </div>
  );
};

export default Blog;

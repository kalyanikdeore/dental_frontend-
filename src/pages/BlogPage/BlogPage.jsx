// components/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { blogData } from "../../constants/blogData";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 6,
    total: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Check if blogData is an array or has a blogs property
  const allBlogs = Array.isArray(blogData) ? blogData : blogData.blogs || [];

  // Filter and paginate blogs based on search and category
  const filterBlogs = (page = 1, search = "", category = "") => {
    setIsLoading(true);

    let filteredBlogs = [...allBlogs];

    // Apply category filter
    if (category) {
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          blog.category &&
          blog.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          (blog.title && blog.title.toLowerCase().includes(searchLower)) ||
          (blog.excerpt && blog.excerpt.toLowerCase().includes(searchLower)) ||
          (blog.content && blog.content.toLowerCase().includes(searchLower)) ||
          (blog.tags &&
            Array.isArray(blog.tags) &&
            blog.tags.some((tag) => tag.toLowerCase().includes(searchLower)))
      );
    }

    // Sort by date (newest first)
    filteredBlogs.sort((a, b) => {
      const dateA = a.published_date ? new Date(a.published_date) : new Date(0);
      const dateB = b.published_date ? new Date(b.published_date) : new Date(0);
      return dateB - dateA;
    });

    // Implement pagination
    const startIndex = (page - 1) * 6;
    const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + 6);

    setBlogs(paginatedBlogs);
    setRecentPosts(allBlogs.slice(0, 5)); // Top 5 most recent

    setPagination({
      current_page: page,
      last_page: Math.ceil(filteredBlogs.length / 6),
      per_page: 6,
      total: filteredBlogs.length,
    });

    // Extract unique categories
    const allCategories = allBlogs
      .map((post) => post.category)
      .filter((category) => category); // Remove undefined/null categories
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);

    setIsLoading(false);
  };

  useEffect(() => {
    filterBlogs();
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.last_page) {
      filterBlogs(page, searchQuery, selectedCategory);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterBlogs(1, searchQuery, selectedCategory);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterBlogs(1, searchQuery, category);
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage, endPage;

    if (pagination.last_page <= maxVisiblePages) {
      startPage = 1;
      endPage = pagination.last_page;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (pagination.current_page <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (
        pagination.current_page + maxPagesAfterCurrent >=
        pagination.last_page
      ) {
        startPage = pagination.last_page - maxVisiblePages + 1;
        endPage = pagination.last_page;
      } else {
        startPage = pagination.current_page - maxPagesBeforeCurrent;
        endPage = pagination.current_page + maxPagesAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 border rounded-md ${
            i === pagination.current_page
              ? "bg-green-500 text-white border-green-500"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(pagination.current_page - 1)}
          disabled={pagination.current_page === 1}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pages}

        {endPage < pagination.last_page && (
          <>
            {endPage < pagination.last_page - 1 && (
              <span className="px-2">...</span>
            )}
            <button
              onClick={() => handlePageChange(pagination.last_page)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              {pagination.last_page}
            </button>
          </>
        )}

        <button
          onClick={() => handlePageChange(pagination.current_page + 1)}
          disabled={pagination.current_page === pagination.last_page}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    );
  };

  // SEO metadata
  useEffect(() => {
    document.title =
      "Dental Blog | Oral Health Tips & Advice | Dr. Joshi's Clinic";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Read our dental blog for oral health tips, advice on dental procedures, and latest advancements in dentistry from Dr. Joshi's Clinic Nashik Road."
      );
    }
  }, []);

  return (
    <motion.div
      initial=""
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: blogs.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "BlogPosting",
              url: `${window.location.origin}/blog/${blog.slug}`,
              name: blog.title,
              description: blog.excerpt,
              datePublished: blog.published_date,
            },
          })),
        })}
      </script>

      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-extrabold text-[#0a8583] mb-4 pt-10">
          Dr. Joshi's Dental Blog
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Expert advice, oral health tips, and dental care insights from
          Nashik's leading dental clinic
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 1)}
              className="text-center py-12"
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-500">
                {selectedCategory
                  ? `No posts in the "${selectedCategory}" category`
                  : searchQuery
                  ? `No posts matching "${searchQuery}"`
                  : "No posts available"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                  filterBlogs();
                }}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={staggerContainer(0.1, 0.2)}
                className="grid md:grid-cols-2 gap-8"
              >
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.id || index}
                    variants={fadeIn("up", "spring", index * 0.1, 1)}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/blog/${blog.slug}`}>
                      <img
                        src={blog.image_url || "/placeholder-image.jpg"}
                        alt={blog.title || "Blog post"}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder-image.jpg";
                        }}
                      />
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-2">
                          {blog.category || "Uncategorized"}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {blog.published_date
                              ? new Date(
                                  blog.published_date
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                              : "No date"}
                          </span>
                          <span className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {pagination.last_page > 1 && (
                <motion.div
                  variants={fadeIn("up", "spring", 0.4, 1)}
                  className="mt-12 flex justify-center"
                >
                  {renderPagination()}
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search
              </h3>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group p-2 rounded-md hover:bg-white transition-colors"
                    >
                      <img
                        src={post.image_url || "/placeholder-image.jpg"}
                        alt={post.title || "Recent post"}
                        className="w-16 h-16 object-cover rounded"
                        onError={(e) => {
                          e.target.src = "/placeholder-image.jpg";
                        }}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {post.published_date
                            ? new Date(post.published_date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )
                            : "No date"}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect("")}
                    className={`flex items-center justify-between w-full text-left py-2 px-2 rounded-md ${
                      !selectedCategory
                        ? "text-green-600 font-medium bg-green-50"
                        : "text-gray-600 hover:text-green-600 hover:bg-white"
                    } transition-colors`}
                  >
                    <span>All Categories</span>
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {allBlogs.length}
                    </span>
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategorySelect(category)}
                      className={`flex items-center justify-between w-full text-left py-2 px-2 rounded-md ${
                        selectedCategory === category
                          ? "text-green-600 font-medium bg-green-50"
                          : "text-gray-600 hover:text-green-600 hover:bg-white"
                      } transition-colors`}
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {allBlogs.filter((b) => b.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest articles and news delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogPage;

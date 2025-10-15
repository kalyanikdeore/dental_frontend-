import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowLeft,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaFire,
  FaTags,
  FaBookmark,
} from "react-icons/fa";
import { useBlogData } from "../../store/BlogStore";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const {
    blogDetail,
    blogDetailLoading,
    blogDetailError,
    recentPosts,
    fetchBlogDetail,
    fetchRecentPosts,
    clearBlogDetail,
    blogs, // Assuming this contains all blogs for sidebar
  } = useBlogData();

  useEffect(() => {
    console.log("BlogDetailPage - Slug from URL:", slug);

    if (slug) {
      fetchBlogDetail(slug)
        .then((result) => {
          console.log("BlogDetailPage - Fetch result:", result);
        })
        .catch((error) => {
          console.error("BlogDetailPage - Fetch error:", error);
        });

      fetchRecentPosts(slug, 3);
    }

    return () => {
      clearBlogDetail();
    };
  }, [slug, fetchBlogDetail, fetchRecentPosts, clearBlogDetail]);

  // Safe array for tags
  const tagsArray = blogDetail?.tags
    ? Array.isArray(blogDetail.tags)
      ? blogDetail.tags
      : typeof blogDetail.tags === "string"
      ? blogDetail.tags.split(",").map((tag) => tag.trim())
      : [blogDetail.tags]
    : [];

  // Sidebar data calculations
  const popularPosts = blogs?.slice(0, 3) || [];

  // Calculate categories count
  const categoriesCount =
    blogs?.reduce((acc, blog) => {
      acc[blog.category] = (acc[blog.category] || 0) + 1;
      return acc;
    }, {}) || {};

  const dynamicCategories = Object.entries(categoriesCount).map(
    ([name, count], index) => ({
      id: index,
      name,
      count,
    })
  );

  const allCategoriesCount = blogs?.length || 0;

  // Popular tags (you might want to calculate this from all blogs)
  const tags = [
    "Design",
    "Development",
    "Marketing",
    "SEO",
    "UI/UX",
    "Web",
    "Mobile",
    "Branding",
  ];

  if (blogDetailLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (blogDetailError || !blogDetail) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The requested blog post could not be found.
          </p>
          <Link
            to="/blog"
            className="text-teal-500 hover:text-teal-600 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${blogDetail.title}`;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Navigation */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content - 3/4 width */}
          <div className="lg:w-3/4">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Category and Metadata */}
              <div className="flex items-center justify-between mb-6">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  {blogDetail.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>
                      {new Date(blogDetail.published_date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{blogDetail.read_time}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {blogDetail.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blogDetail.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
                <img
                  src={blogDetail.author_image}
                  alt={blogDetail.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {blogDetail.author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {blogDetail.author_role}
                  </p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={blogDetail.image}
                  alt={blogDetail.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: blogDetail.content }}
              />

              {/* Tags - Fixed with safe array */}
              {tagsArray.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tagsArray.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="border-t border-b border-gray-200 py-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Share this article:
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      shareText
                    )}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      shareUrl
                    )}&title=${encodeURIComponent(blogDetail.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Popular Posts */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <FaFire className="text-teal-500 mr-2" />
                  <h3 className="text-xl font-bold text-teal-500">
                    Popular Posts
                  </h3>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="flex items-center space-x-3 w-full"
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-teal-500 transition-colors">
                            {blog.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(blog.published_date).toLocaleDateString()}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <FaTags className="text-teal-500 mr-2" />
                  <h3 className="text-xl font-bold text-teal-500">
                    Categories
                  </h3>
                </div>
                <div className="space-y-2">
                  {/* All Categories Option */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full text-left px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                  >
                    <Link to="/blog" className="flex justify-between w-full">
                      <span className="font-medium">All Categories</span>
                      <span className="text-sm opacity-70">
                        ({allCategoriesCount})
                      </span>
                    </Link>
                  </motion.button>

                  {/* Dynamic Categories */}
                  {dynamicCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ x: 5 }}
                      className="w-full text-left px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                    >
                      <Link
                        to={`/blog?category=${encodeURIComponent(
                          category.name
                        )}`}
                        className="flex justify-between w-full"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm opacity-70">
                          ({category.count})
                        </span>
                      </Link>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Newsletter Sidebar */}
              <div className="bg-teal-500 rounded-xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-teal-100 text-sm mb-4">
                  Get the latest design insights directly in your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm border border-teal-300 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="w-full bg-white text-teal-500 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-teal-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.read_time}</span>
                      <span>
                        {new Date(post.published_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogDetailPage;

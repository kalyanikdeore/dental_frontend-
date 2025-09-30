// components/BlogDetailsPage.jsx
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaSearch,
  FaTooth,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";
import DOMPurify from "dompurify";
import { blogData } from "../../constants/blogData";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  // Find the blog post by slug
  const blog = blogData.blogs.find((post) => post.slug === slug);

  // Get recent posts (excluding current one)
  const recentPosts = blogData.blogs
    .filter((post) => post.slug !== slug)
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 5);

  // Process content with sanitization
  const processedContent = useMemo(() => {
    if (!blog?.content) return "";

    // Sanitize HTML
    return DOMPurify.sanitize(blog.content, {
      ALLOWED_TAGS: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "img",
        "br",
        "strong",
        "em",
        "ul",
        "ol",
        "li",
        "a",
        "div",
        "span",
        "blockquote",
      ],
      ALLOWED_ATTR: [
        "src",
        "alt",
        "href",
        "class",
        "style",
        "width",
        "height",
        "id",
      ],
    });
  }, [blog?.content]);

  const formattedDate = useMemo(() => {
    return blog?.published_date
      ? new Date(blog.published_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";
  }, [blog?.published_date]);

  // Update document title and meta description for SEO
  React.useEffect(() => {
    if (blog) {
      document.title = blog.seo_title || blog.title;

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          blog.seo_description || blog.excerpt
        );
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = blog.seo_description || blog.excerpt;
        document.head.appendChild(newMeta);
      }
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="text-center py-12 mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The requested blog post could not be found.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-green-500 text-white font-medium py-2 px-6 rounded-md hover:bg-green-600 transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.seo_description || blog.excerpt,
          image: blog.image_url,
          datePublished: blog.published_date,
          dateModified: blog.published_date,
          author: {
            "@type": "Person",
            name: blog.author_name,
          },
          publisher: {
            "@type": "Organization",
            name: "Dr. Joshi's Care & Cure Dental Clinic",
            logo: "/logo.png",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": window.location.href,
          },
        })}
      </script>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Featured Image */}
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-96 object-cover"
              loading="lazy"
            />

            <div className="p-8">
              {/* Blog Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  <FaTooth className="mr-1" /> {blog.category}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-1" /> {formattedDate}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                <img
                  src={blog.author_avatar}
                  alt={blog.author_name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="flex items-center">
                    <FaUserMd className="text-green-500 mr-2" />
                    <h4 className="font-medium text-gray-800">
                      {blog.author_name}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500">{blog.author_role}</p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose max-w-none mt-6"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              ></div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Products */}
              {blog.related_products?.length > 0 && (
                <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {blog.related_products.map((product, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">•</span>
                        <Link
                          to={product.link}
                          className="text-green-600 hover:text-green-700 hover:underline font-medium"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Share this article
                </h4>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      blog.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href
                    )}&media=${encodeURIComponent(
                      blog.image_url
                    )}&description=${encodeURIComponent(blog.excerpt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterest size={18} />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                      `${blog.title} ${window.location.href}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors flex items-center justify-center"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 1)}
            className="mt-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-md p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Improve Your Dental Health?
            </h3>
            <p className="mb-6 text-green-100">
              Schedule a consultation with our expert dental team in Nashik
              today.
            </p>
            <Link
              to="/contact/deolali-camp"
              className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            >
              Book Your Appointment Now
            </Link>
          </motion.div>

          {/* Comments Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Comments (0)
            </h3>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Leave a comment
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comment *
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search Widget */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-green-500">
                  <FaSearch className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Categories Widget */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {blogData.categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors py-2"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {
                          blogData.blogs.filter(
                            (blog) => blog.category === category
                          ).length
                        }
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
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
                        src={post.image_url}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.published_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Widget */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe to Our Blog
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest dental health tips and news delivered to your
                inbox
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

export default BlogDetailsPage;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, Eye, Heart, MessageCircle, Filter, ChevronLeft, ChevronRight, TrendingUp, Tag, Loader2, ArrowUp, Mail, Share2, Bookmark } from 'lucide-react';
import { blogsData, categories, getPopularBlogs } from '../Components/BlogsData';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState(blogsData);
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const blogsPerPage = 6;

  useEffect(() => {
    setPopularBlogs(getPopularBlogs(4));
    
    // Load saved posts from localStorage
    const saved = localStorage.getItem('savedPosts');
    if (saved) {
      setSavedPosts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Handle scroll events for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      let filteredBlogs = [...blogsData];

      // Filter by search term
      if (searchTerm) {
        filteredBlogs = filteredBlogs.filter(blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      // Filter by category
      if (selectedCategory !== 'All') {
        filteredBlogs = filteredBlogs.filter(blog => blog.category === selectedCategory);
      }

      // Sort blogs
      switch (sortBy) {
        case 'popular':
          filteredBlogs.sort((a, b) => b.views - a.views);
          break;
        case 'liked':
          filteredBlogs.sort((a, b) => b.likes - a.likes);
          break;
        case 'recent':
        default:
          filteredBlogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          break;
      }

      setBlogs(filteredBlogs);
      setCurrentPage(1);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = useMemo(() => blogs.slice(indexOfFirstBlog, indexOfLastBlog), [blogs, indexOfFirstBlog, indexOfLastBlog]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSavePost = useCallback((blogId) => {
    setSavedPosts(prev => {
      const newSaved = prev.includes(blogId) 
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId];
      
      localStorage.setItem('savedPosts', JSON.stringify(newSaved));
      return newSaved;
    });
  }, []);

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  }, [email]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BlogCard = ({ blog }) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      onMouseEnter={() => setHoveredCard(blog.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500"
          style={{ transform: hoveredCard === blog.id ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
            {blog.category}
          </span>
        </div>
        <button
          onClick={() => handleSavePost(blog.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label={savedPosts.includes(blog.id) ? "Remove from saved" : "Save post"}
        >
          <Bookmark 
            className={`w-4 h-4 ${savedPosts.includes(blog.id) ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`} 
          />
        </button>
        {hoveredCard === blog.id && (
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6 transition-opacity duration-300">
            <div className="text-white">
              <p className="text-sm mb-1">By {blog.author.name}</p>
              <p className="text-xs opacity-90">{formatDate(blog.publishedAt)}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
            {blog.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
          {blog.tags.length > 2 && (
            <span className="text-xs text-gray-500">+{blog.tags.length - 2} more</span>
          )}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <img
            src={blog.author.avatar}
            alt={blog.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="mr-4">{blog.author.name}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{formatDate(blog.publishedAt)}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{blog.readingTime} min</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {blog.views.toLocaleString()}
            </span>
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {blog.likes}
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {blog.comments}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Share post"
            >
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <Link 
              to={`/blog/${blog.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center transition-colors"
            >
              Read More
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
          <div className="h-48 sm:h-56 bg-gray-300"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-300 rounded mb-3"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
            <div className="flex items-center mt-4">
              <div className="h-8 w-8 bg-gray-300 rounded-full mr-2"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mr-4"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen md:-mt-25 bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative bg-linear-to-r from-blue-600 to-purple-600 text-white md:py-40 py-10 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/blog-hero/1920/600.jpg" 
            alt="Blog Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold md:mt-10 mb-4">Our Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and strategies to help you grow your business online
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2 text-blue-600" />
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Categories - Mobile Responsive */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              {/* Desktop View */}
              <div className="hidden sm:block space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Mobile View - Horizontal Scroll with Hidden Scrollbar */}
              <div className="sm:hidden">
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`shrink-0 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to get the latest blog posts
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
                {subscribed && (
                  <p className="text-green-600 text-sm mt-2">Thank you for subscribing!</p>
                )}
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Popular Posts
              </h3>
              <div className="space-y-4">
                {popularBlogs.map((blog) => (
                  <Link 
                    key={blog.id} 
                    to={`/blog/${blog.id}`}
                    className="block group"
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 cursor-pointer transition-colors">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {blog.views.toLocaleString()} views
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Category Selector */}
            <div className="sm:hidden bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Filter by category:</span>
                <span className="text-sm text-blue-600 font-medium">{selectedCategory}</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`shrink-0 px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filters and Sort */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Showing {currentBlogs.length} of {blogs.length} blogs
                  </span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="liked">Most Liked</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <>
                {/* Blog Grid */}
                {currentBlogs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {currentBlogs.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-12 text-center mb-8">
                    <div className="text-gray-400 mb-4">
                      <Search className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No blogs found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All');
                        setSortBy('recent');
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      // Show current page, first page, last page, and one page before/after current
                      if (
                        pageNumber === 1 || 
                        pageNumber === totalPages || 
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={index}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                              currentPage === pageNumber
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                            aria-label={`Page ${pageNumber}`}
                            aria-current={currentPage === pageNumber ? "page" : undefined}
                          >
                            {pageNumber}
                          </button>
                        );
                      } else if (
                        pageNumber === currentPage - 2 || 
                        pageNumber === currentPage + 2
                      ) {
                        return (
                          <span key={index} className="text-gray-500" aria-hidden="true">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                      aria-label="Next page"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Custom styles for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
};

export default Blogs;
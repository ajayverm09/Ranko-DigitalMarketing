import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Eye, Heart, MessageCircle, Share2, 
  Facebook, Twitter, Linkedin, Mail, Link2, ChevronLeft, ChevronRight,
  Bookmark, ThumbsUp, Send
} from 'lucide-react';
import { blogsData, getRelatedBlogs, getBlogById } from '../Components/BlogsData';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const blogId = parseInt(id);
    const blogData = getBlogById(blogId);
    if (blogData) {
      setBlog(blogData);
      setLikeCount(blogData.likes);
      setRelatedBlogs(getRelatedBlogs(blogData, 3));
      
      // Simulate loading comments
      setComments([
        {
          id: 1,
          author: "John Doe",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Great article! This really helped me understand the topic better.",
          date: "2024-01-14",
          likes: 12
        },
        {
          id: 2,
          author: "Jane Smith",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          content: "Thanks for sharing these insights. Looking forward to more content like this!",
          date: "2024-01-13",
          likes: 8
        }
      ]);
    }
  }, [id]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = blog.title;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${text}&body=${url}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Guest User",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h2>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-700">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-72 sm:h-80 md:h-96 lg:h-[500px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
          <div className="max-w-4xl mx-auto">
            {/* Category and Tags - Hidden on Small Screens */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {blog.category}
              </span>
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center text-white/90 space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-sm sm:text-base">{blog.author.name}</p>
                  <p className="text-xs sm:text-sm opacity-75 hidden sm:block">{blog.author.bio}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs sm:text-sm">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(blog.publishedAt)}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {blog.readingTime} min read
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {blog.views.toLocaleString()} views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category and Tags - Mobile Only */}
      <div className="sm:hidden bg-white px-4 py-3 border-b">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {blog.category}
          </span>
          {blog.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Actions */}
            <div className="flex flex-wrap items-center justify-between mb-6 pb-6 border-b gap-4">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-3 py-2 sm:px-4 rounded-lg transition-colors ${
                    isLiked
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm sm:text-base">{likeCount}</span>
                </button>
                <button
                  onClick={handleBookmark}
                  className={`flex items-center space-x-2 px-3 py-2 sm:px-4 rounded-lg transition-colors ${
                    isBookmarked
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  <span className="text-sm sm:text-base hidden sm:inline">Save</span>
                </button>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center space-x-2 px-3 py-2 sm:px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Share</span>
                </button>
                
                {showShareMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Twitter className="w-4 h-4 text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      <span>LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                      <span>Email</span>
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Link2 className="w-4 h-4 text-gray-600" />
                      <span>Copy Link</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-8 sm:mb-12">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12">
              <div className="flex items-start space-x-4">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{blog.author.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{blog.author.bio}</p>
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                      Follow
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 text-sm sm:text-base">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Comments ({comments.length})
              </h3>
              
              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Leave a comment..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                  rows="4"
                />
                <button
                  type="submit"
                  className="mt-4 bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post Comment
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex items-start space-x-4">
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-medium text-sm sm:text-base">{comment.author}</h4>
                          <span className="text-xs sm:text-sm text-gray-500">
                            {formatDate(comment.date)}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm sm:text-base">{comment.content}</p>
                      </div>
                      <button className="mt-2 text-xs sm:text-sm text-gray-500 hover:text-gray-700 flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {comment.likes} Likes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            {/* Table of Contents */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Introduction
                </a>
                <a href="#conclusion" className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  Conclusion
                </a>
              </nav>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((relatedBlog) => (
                    <Link
                      key={relatedBlog.id}
                      to={`/blog/${relatedBlog.id}`}
                      className="block group"
                    >
                      <div className="flex items-start space-x-3">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-20 h-20 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(relatedBlog.publishedAt)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
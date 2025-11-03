import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    date: '25 Sep',
    title: 'Maximizing Your SEO Potential Strategies...',
    description:
      "In today's competitive digital landscape, mastering Search Engine Optimization is crucial for online success. Learn the latest techniques to boost your rankings and drive organic traffic.",
    image: 'https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-1.webp',
    author: {
      name: 'Alex Johnson',
      avatar: 'https://picsum.photos/seed/author1/40/40.jpg'
    },
    readTime: '5 min read',
    featured: true,
    likes: 42,
    comments: 8
  },
  {
    id: 2,
    date: '22 Sep',
    title: 'Comprehensive Guide Driving Targeted Traffic...',
    description:
      "In today's competitive digital landscape, mastering Search Engine Optimization is crucial for online success. Discover proven methods to attract qualified visitors to your website.",
    image: 'https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-2.webp',
    author: {
      name: 'Sarah Williams',
      avatar: 'https://picsum.photos/seed/author2/40/40.jpg'
    },
    readTime: '7 min read',
    featured: false,
    likes: 38,
    comments: 12
  },
  {
    id: 3,
    date: '20 Sep',
    title: 'Proven Techniques for Audience Engagement...',
    description:
      "In today's competitive digital landscape, mastering Search Engine Optimization is crucial for online success. Build meaningful connections with your audience through strategic content.",
    image: 'https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-3.webp',
    author: {
      name: 'Michael Chen',
      avatar: 'https://picsum.photos/seed/author3/40/40.jpg'
    },
    readTime: '4 min read',
    featured: false,
    likes: 56,
    comments: 15
  },
];

const HomeBlog = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Marketing Tips and Trends</h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover insights, strategies, and trends that can help boost your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <div 
              key={post.id} 
              className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                hoveredCard === post.id ? 'shadow-xl -translate-y-1' : ''
              } ${post.featured ? '' : ''}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-center transition-transform duration-500"
                    style={{ transform: hoveredCard === post.id ? 'scale(1.05)' : 'scale(1)' }}
                  />
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="text-white bg-yellow-500 text-xs font-semibold py-1 px-3 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm text-gray-700">{post.author.name}</span>
                  </div>
                  
                  {/* Like and Comment Icons */}
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleLike(post.id);
                      }}
                      className="flex items-center text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 mr-1 ${likedPosts.includes(post.id) ? 'text-red-500 fill-current' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-xs">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </button>
                    <div className="flex items-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-xs">{post.comments}</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blogs" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
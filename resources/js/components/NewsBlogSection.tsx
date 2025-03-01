import React, { useState } from 'react';

const NewsBlogSection = () => {
  // Array of blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Jamuna Bank PLC Inaugurates Its 113th 'Matlob Dakshin Sub-Branch' At Chandpur",
      category: "Uncategorized",
      date: "NOVEMBER 21, 2024",
      time: "1:05 Pm",
      image: "/assets/images/bank.jpg"
    },
    {
      id: 2,
      title: "Jamuna Bank Holds 23rd Annual General Meeting",
      category: "News & Events",
      date: "NOVEMBER 21, 2024",
      time: "12:45 Pm",
      image: "/assets/images/bank.jpg"
    },
    {
      id: 3,
      title: "'Managers' Meeting' Of Dhaka North And Mymensingh Zone Of Jamuna Bank Held At Dhaka",
      category: "News & Events",
      date: "NOVEMBER 21, 2024",
      time: "12:39 Pm",
      image: "/assets/images/bank.jpg"
    },
    {
        id: 4,
        title: "'Managers' Meeting' Of Dhaka North And Mymensingh Zone Of Jamuna Bank Held At Dhaka",
        category: "News & Events",
        date: "NOVEMBER 21, 2024",
        time: "12:39 Pm",
        image: "/assets/images/bank.jpg"
      },
      {
        id: 5,
        title: "Jamuna Bank Introduces New Online Banking Features for Customers",
        category: "Product Updates",
        date: "NOVEMBER 20, 2024",
        time: "10:00 Am",
        image: "/assets/images/bank.jpg"
      },
      {
        id: 6,
        title: "Jamuna Bank Partners With Local NGOs for Educational Projects",
        category: "Community Engagement",
        date: "NOVEMBER 19, 2024",
        time: "9:30 Am",
        image: "/assets/images/bank.jpg"
      },
      {
        id: 7,
        title: "Jamuna Bank Donates to the Bangladesh Flood Relief Fund",
        category: "Charity & Donations",
        date: "NOVEMBER 18, 2024",
        time: "4:00 Pm",
        image: "/assets/images/bank.jpg"
      },
      {
        id: 8,
        title: "Jamuna Bank Hosts Annual Financial Literacy Seminar",
        category: "Events & Seminars",
        date: "NOVEMBER 17, 2024",
        time: "2:30 Pm",
        image: "/assets/images/bank.jpg"
      }
    // You can add more posts here
  ];

  const postsPerPage = 3;  // Number of posts to display per page
  const [currentPage, setCurrentPage] = useState(0);

  // Paginate the blog posts
  const startIndex = currentPage * postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, Math.ceil(blogPosts.length / postsPerPage) - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News & Events</h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrevPage}
            className="p-3 border border-gray-300 hover:bg-gray-100"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNextPage}
            className="p-3 border border-gray-300 hover:bg-gray-100"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex mb-8">
        <button className="bg-indigo-800 text-white px-6 py-2 hover:bg-indigo-900 font-medium">
          View More
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="flex flex-col overflow-hidden bg-white">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <div className="flex items-center text-indigo-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                <span>{post.category}</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-tight hover:text-indigo-800 cursor-pointer">
              {post.title}
            </h3>
            <div className="mt-auto pt-4 flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Posted : {post.time}</span>
              <button className="ml-auto text-gray-500 hover:text-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogSection;

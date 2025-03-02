import React from 'react';

const Footer = () => {
  const quickLinks = [
    { title: "Personal Banking", url: "#" },
    { title: "Business Banking", url: "#" },
    { title: "Loans & Mortgages", url: "#" },
    { title: "Investments", url: "#" },
    { title: "Insurance", url: "#" }
  ];

  const supportLinks = [
    { title: "Contact Us", url: "#" },
    { title: "Help Center", url: "#" },
    { title: "Report Fraud", url: "#" },
    { title: "Location Finder", url: "#" },
    { title: "Careers", url: "#" }
  ];

  const legalLinks = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookie Policy", url: "#" },
    { title: "Accessibility", url: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "#" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" },
    { name: "Instagram", icon: "instagram", url: "#" }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-black via-yellow-800 to-black text-gray-100">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-amber-500">QUICK BANK</h3>
              <p className="text-amber-500 text-sm">Banking made simple</p>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Providing financial services with speed and reliability since 1992.
              Licensed and regulated by the Financial Conduct Authority.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={`quick-${index}`}>
                  <a href={link.url} className="text-gray-300 hover:text-amber-500 transition duration-300 text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Customer Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={`support-${index}`}>
                  <a href={link.url} className="text-gray-300 hover:text-amber-500 transition duration-300 text-sm">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href={social.url}
                  aria-label={social.name}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 text-white">{/* Icon would be here */}</div>
                </a>
              ))}
            </div>
            <div className="mt-4">
              <h5 className="text-base mb-2">Subscribe to our newsletter</h5>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full text-gray-900 rounded-l focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-4 py-2 rounded-r sm:w-auto w-full mt-2 sm:mt-0 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">&copy; 2025 Quick Bank. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={`legal-${index}`}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-amber-500 transition duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

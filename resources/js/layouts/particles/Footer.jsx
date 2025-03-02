const Footer = () => {
    const quickLinks = [
        { title: 'Personal Banking', url: '#' },
        { title: 'Business Banking', url: '#' },
        { title: 'Loans & Mortgages', url: '#' },
        { title: 'Investments', url: '#' },
        { title: 'Insurance', url: '#' },
    ];

    const supportLinks = [
        { title: 'Contact Us', url: '#' },
        { title: 'Help Center', url: '#' },
        { title: 'Report Fraud', url: '#' },
        { title: 'Location Finder', url: '#' },
        { title: 'Careers', url: '#' },
    ];

    const legalLinks = [
        { title: 'Privacy Policy', url: '#' },
        { title: 'Terms of Service', url: '#' },
        { title: 'Cookie Policy', url: '#' },
        { title: 'Accessibility', url: '#' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'facebook', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'LinkedIn', icon: 'linkedin', url: '#' },
        { name: 'Instagram', icon: 'instagram', url: '#' },
    ];

    return (
        <>
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-black via-yellow-800 to-black py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white">Ready to Experience Better Banking?</h2>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-white">
                        Join thousands of satisfied customers who have chosen Quick Bank for their financial needs.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="rounded-md bg-white px-6 py-3 font-medium text-amber-600 transition duration-300 hover:bg-gray-100">
                            Open an Account
                        </button>
                        <button className="hover:bg-opacity-10 rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition duration-300 hover:bg-white">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <footer className="w-full bg-gradient-to-r from-black via-yellow-800 to-black text-gray-100">
                {/* Main Footer Section */}
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Brand Column */}
                        <div>
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-amber-500">QUICK BANK</h3>
                                <p className="text-sm text-amber-500">Banking made simple</p>
                            </div>
                            <p className="mt-4 text-sm text-gray-400">
                                Providing financial services with speed and reliability since 1992. Licensed and regulated by the Financial Conduct
                                Authority.
                            </p>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-amber-500">Quick Links</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={`quick-${index}`}>
                                        <a href={link.url} className="text-sm text-gray-300 transition duration-300 hover:text-amber-500">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Support Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-amber-500">Customer Support</h4>
                            <ul className="space-y-2">
                                {supportLinks.map((link, index) => (
                                    <li key={`support-${index}`}>
                                        <a href={link.url} className="text-sm text-gray-300 transition duration-300 hover:text-amber-500">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-amber-500">Stay Connected</h4>
                            <div className="mb-6 flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={`social-${index}`}
                                        href={social.url}
                                        aria-label={social.name}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition duration-300 hover:bg-amber-500"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        <div className="h-5 w-5 text-white">{/* Icon would be here */}</div>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h5 className="mb-2 text-base">Subscribe to our newsletter</h5>
                                <form className="flex flex-col sm:flex-row">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full rounded-l px-4 py-2 text-gray-100 border focus:outline-none"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 w-full rounded-r bg-amber-500 px-4 py-2 font-medium text-gray-900 transition duration-300 hover:bg-amber-600 sm:mt-0 sm:w-auto"
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
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="mb-4 md:mb-0">
                                <p className="text-sm text-gray-400">&copy; 2025 Quick Bank. All rights reserved.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {legalLinks.map((link, index) => (
                                    <a
                                        key={`legal-${index}`}
                                        href={link.url}
                                        className="text-sm text-gray-400 transition duration-300 hover:text-amber-500"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

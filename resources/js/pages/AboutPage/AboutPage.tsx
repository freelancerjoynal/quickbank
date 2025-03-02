import WebsiteLayout from '@/layouts/WebsiteLayout';

const AboutPage = () => {
    const milestones = [
        { year: 1992, title: 'Foundation', description: 'Quick Bank was founded with a mission to provide accessible banking for all.' },
        { year: 2001, title: 'Digital Banking', description: 'Launched our first online banking platform, revolutionizing customer access.' },
        { year: 2008, title: 'Financial Stability', description: 'Maintained strength during global financial crisis through prudent practices.' },
        { year: 2015, title: 'Mobile Banking', description: "Released our award-winning mobile app, bringing banking to customers' fingertips." },
        { year: 2022, title: 'Sustainable Banking', description: 'Committed to net-zero carbon emissions and sustainable financing initiatives.' },
    ];

    const values = [
        {
            title: 'Integrity',
            description: 'We uphold the highest ethical standards in all our operations and relationships.',
            icon: 'shield',
        },
        {
            title: 'Innovation',
            description: 'We constantly seek better ways to serve our customers through technological advancement.',
            icon: 'lightbulb',
        },
        {
            title: 'Inclusion',
            description: 'We create financial solutions that are accessible to people from all walks of life.',
            icon: 'users',
        },
        {
            title: 'Excellence',
            description: 'We strive for exceptional quality in every service we provide and relationship we build.',
            icon: 'star',
        },
    ];

    const leadership = [
        {
            name: 'Sarah Johnson',
            title: 'Chief Executive Officer',
            bio: 'Sarah brings over 25 years of financial industry experience, previously serving as CFO at Global Financial Partners.',
        },
        {
            name: 'Michael Chen',
            title: 'Chief Technology Officer',
            bio: 'Michael leads our digital transformation initiatives and has pioneered several innovative banking technologies.',
        },
        {
            name: 'Aisha Patel',
            title: 'Chief Operating Officer',
            bio: 'Aisha oversees day-to-day operations, ensuring efficient service delivery across all banking channels.',
        },
        {
            name: 'James Wilson',
            title: 'Chief Risk Officer',
            bio: 'James ensures our bank maintains the highest standards of risk management and regulatory compliance.',
        },
    ];

    return (
        <WebsiteLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-black via-yellow-800 to-black py-20 text-white">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Story</h1>
                        <p className="mx-auto max-w-3xl text-xl">
                            For over 30 years, Quick Bank has been building relationships and helping our customers achieve financial success.
                        </p>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg md:p-12">
                        <h2 className="mb-6 text-3xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="mx-auto max-w-4xl text-xl text-gray-600">
                            "To empower individuals and businesses with accessible financial solutions that foster growth, security, and prosperity in
                            the communities we serve."
                        </p>
                    </div>
                </div>

                {/* History & Timeline */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">Our Journey</h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-amber-200 md:block"></div>

                        {/* Timeline events */}
                        {milestones.map((milestone, index) => (
                            <div key={milestone.year} className="mb-12 md:mb-0">
                                <div className={`items-center md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Year bubble */}
                                    <div className="mb-6 flex justify-center md:mb-0 md:w-1/2 md:justify-end">
                                        <div className={`relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                            <div className="absolute top-1/2 right-full hidden h-px w-8 -translate-y-1/2 transform bg-amber-200 md:block"></div>
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white">
                                                {milestone.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-lg md:w-1/2">
                                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{milestone.title}</h3>
                                        <p className="text-gray-600">{milestone.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Values */}
                <div className="border-t border-gray-200 bg-gray-100 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">Our Values</h2>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="rounded-lg border-t-4 border-amber-500 bg-white p-6 text-center shadow-md transition duration-300 hover:shadow-lg"
                                >
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-600">
                                        {/* Icon placeholder - in real implementation, use actual icons */}
                                        <span>
                                            {value.icon === 'shield'
                                                ? '🛡️'
                                                : value.icon === 'lightbulb'
                                                  ? '💡'
                                                  : value.icon === 'users'
                                                    ? '👥'
                                                    : '⭐'}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-gray-800">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Leadership Team */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">Leadership Team</h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {leadership.map((leader) => (
                            <div key={leader.name} className="overflow-hidden rounded-lg bg-white shadow-md">
                                <div className="h-48 bg-gray-300">
                                    {/* Placeholder for executive photos */}
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-6xl font-light text-white">
                                        {leader.name
                                            .split(' ')
                                            .map((n) => n[0])
                                            .join('')}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-1 text-xl font-semibold text-gray-800">{leader.name}</h3>
                                    <p className="mb-4 font-medium text-amber-600">{leader.title}</p>
                                    <p className="text-sm text-gray-600">{leader.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Impact */}
                <div className="bg-gray-900 py-16 text-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="items-center md:flex">
                            <div className="mb-8 md:mb-0 md:w-1/2">
                                <h2 className="mb-6 text-3xl font-semibold">Community Impact</h2>
                                <p className="mb-6 text-gray-300">
                                    At Quick Bank, we believe in giving back to the communities we serve. Through our community outreach programs,
                                    financial literacy initiatives, and charitable partnerships, we're committed to making a positive impact.
                                </p>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-amber-500">✓</span>
                                        Over $10 million donated to community development projects
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-amber-500">✓</span>
                                        Financial education provided to more than 50,000 students
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-amber-500">✓</span>
                                        25,000+ employee volunteer hours annually
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-amber-500">✓</span>
                                        Support for small businesses through specialized loan programs
                                    </li>
                                </ul>
                                <button className="mt-8 rounded-md bg-amber-500 px-6 py-2 font-medium text-white transition duration-300 hover:bg-amber-600">
                                    Learn More About Our Initiatives
                                </button>
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <div className="rounded-lg bg-gray-800 p-6">
                                    {/* Placeholder for community impact image */}
                                    <div className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg bg-gray-700">
                                        <span className="text-lg text-gray-500">Community Impact Imagery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branch Locations */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">Our Locations</h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-48 bg-gray-200">
                                {/* Map placeholder */}
                                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                                    <span className="text-gray-500">New York Branch Map</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">New York Headquarters</h3>
                                <p className="mb-4 text-gray-600">123 Finance Street, New York, NY 10001</p>
                                <div className="text-sm text-gray-500">
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                                <button className="mt-4 font-medium text-amber-600 hover:text-amber-700">Get Directions →</button>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-48 bg-gray-200">
                                {/* Map placeholder */}
                                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                                    <span className="text-gray-500">Chicago Branch Map</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">Chicago Branch</h3>
                                <p className="mb-4 text-gray-600">456 Banking Avenue, Chicago, IL 60601</p>
                                <div className="text-sm text-gray-500">
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                                <button className="mt-4 font-medium text-amber-600 hover:text-amber-700">Get Directions →</button>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-lg">
                            <div className="h-48 bg-gray-200">
                                {/* Map placeholder */}
                                <div className="flex h-full w-full items-center justify-center bg-gray-300">
                                    <span className="text-gray-500">San Francisco Branch Map</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-semibold text-gray-800">San Francisco Branch</h3>
                                <p className="mb-4 text-gray-600">789 Golden Gate Blvd, San Francisco, CA 94102</p>
                                <div className="text-sm text-gray-500">
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                                <button className="mt-4 font-medium text-amber-600 hover:text-amber-700">Get Directions →</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <button className="rounded-md bg-amber-500 px-6 py-2 font-medium text-white transition duration-300 hover:bg-amber-600">
                            View All Locations
                        </button>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="border-t border-gray-200 bg-gray-100 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">What Our Customers Say</h2>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="relative rounded-lg bg-white p-6 shadow-md">
                                <div className="absolute -top-4 left-6 text-6xl text-amber-500">"</div>
                                <p className="mb-6 pt-6 text-gray-600">
                                    Quick Bank made the mortgage process seamless. Their team was responsive, knowledgeable, and guided me through
                                    every step with patience. I couldn't be happier with my experience.
                                </p>
                                <div className="flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <span className="font-medium text-gray-600">JD</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Jennifer Davis</h4>
                                        <p className="text-sm text-gray-500">Homeowner, Chicago</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-lg bg-white p-6 shadow-md">
                                <div className="absolute -top-4 left-6 text-6xl text-amber-500">"</div>
                                <p className="mb-6 pt-6 text-gray-600">
                                    As a small business owner, I needed a bank that understood my unique challenges. Quick Bank not only provided
                                    funding but became a trusted financial partner in our growth journey.
                                </p>
                                <div className="flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <span className="font-medium text-gray-600">RT</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Robert Thompson</h4>
                                        <p className="text-sm text-gray-500">CEO, Thompson Technologies</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-lg bg-white p-6 shadow-md">
                                <div className="absolute -top-4 left-6 text-6xl text-amber-500">"</div>
                                <p className="mb-6 pt-6 text-gray-600">
                                    The mobile banking app is exceptional - intuitive, fast, and secure. I love being able to manage my finances on
                                    the go, and their customer service team is always just a click away.
                                </p>
                                <div className="flex items-center">
                                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                        <span className="font-medium text-gray-600">ML</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Maria Lopez</h4>
                                        <p className="text-sm text-gray-500">Customer since 2015</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    );
};

export default AboutPage;

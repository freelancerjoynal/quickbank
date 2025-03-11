import React from 'react'

export default function BankingNeeds() {
  const bankingServices = [
    {
      title: "Personal Banking",
      description: "Manage your daily finances with our comprehensive personal banking solutions.",
      icon: "fas fa-user",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Business Banking",
      description: "Grow your business with our specialized banking services and solutions.",
      icon: "fas fa-briefcase",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Savings & Investments",
      description: "Secure your future with our diverse investment and savings options.",
      icon: "fas fa-piggy-bank",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Loans & Mortgages",
      description: "Achieve your dreams with our flexible loan and mortgage options.",
      icon: "fas fa-home",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="relative">
              Banking Solutions
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 transform -translate-y-2 opacity-20"></span>
            </span>{" "}
            for Every Need
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover financial services tailored to your lifestyle and goals, backed by cutting-edge technology and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bankingServices.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-8 rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`${service.iconColor} mb-6 transform transition-transform duration-300 hover:scale-110`}>
                <i className={`${service.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="group flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300">
                <span>Learn More</span>
                <i className="fas fa-arrow-right ml-2 transform transition-transform duration-300 group-hover:translate-x-2"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

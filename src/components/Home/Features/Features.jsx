import React from 'react';
import { FaFilm, FaHeadphones, FaCouch, FaTicketAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaFilm className="text-5xl" />,
      title: "Latest Movies",
      description: "Watch the newest releases in stunning 4K quality"
    },
    {
      id: 2,
      icon: <FaHeadphones className="text-5xl" />,
      title: "Premium Sound",
      description: "Immersive Dolby Atmos sound system for the best experience"
    },
    {
      id: 3,
      icon: <FaCouch className="text-5xl" />,
      title: "Comfortable Seating",
      description: "Reclining seats with extra legroom for maximum comfort"
    },
    {
      id: 4,
      icon: <FaTicketAlt className="text-5xl" />,
      title: "Easy Booking",
      description: "Book your tickets online in just a few clicks"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Why Choose StarView?</h2>
          <p className="text-gray-600">Experience cinema at its finest</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center" style={{ color: '#FF0800' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const CinemaLocations = () => {
  const cinemas = [
    {
      id: 1,
      name: "Grand Cinema Downtown",
      address: "123 Main Street, Downtown",
      hours: "9:00 AM - 11:00 PM",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Cinema Mall",
      address: "456 Shopping Mall, North District",
      hours: "10:00 AM - 12:00 AM",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Family Cinema Center",
      address: "789 Luxury Avenue, East Side",
      hours: "9:00 AM - 11:00 PM",
      image:
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1600&q=80&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF0800]">
            Our Cinemas
          </h2>
          <p className="text-gray-600">Find a location near you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cinemas.map((cinema) => (
            <div
              key={cinema.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cinema.image}
                  alt={cinema.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {cinema.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      className="mt-1 flex-shrink-0"
                      style={{ color: "#FF0800" }}
                    />
                    <p className="text-gray-600 text-sm">{cinema.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaClock
                      className="flex-shrink-0"
                      style={{ color: "#FF0800" }}
                    />
                    <p className="text-gray-600 text-sm">{cinema.hours}</p>
                  </div>
                </div>

                <Link
                  to="/cinemas"
                  className="block w-full text-center px-4 py-2 bg-[#FF0800] text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-white hover:text-[#FF0800] border-2 border-[#FF0800]  hover:shadow-md "
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/cinemas"
            className="inline-block px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
            style={{ borderColor: "#FF0800", color: "#FF0800" }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FF0800";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#FF0800";
            }}
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CinemaLocations;

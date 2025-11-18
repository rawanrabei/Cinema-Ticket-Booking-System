import React from 'react';
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaPercent, FaGift } from 'react-icons/fa';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 25% off on all weekend shows",
      discount: "25% OFF",
      icon: <FaTicketAlt className="text-4xl" />,
      bgColor: "bg-gradient-to-br",
      bgColorStyle: { background: 'linear-gradient(to bottom right, #FF0800, #CC0600)' },
      link: "/offers"
    },
    {
      id: 2,
      title: "Student Discount",
      description: "Students get 30% off with valid ID",
      discount: "30% OFF",
      icon: <FaPercent className="text-4xl" />,
      bgColor: "bg-gradient-to-br",
      bgColorStyle: { background: 'linear-gradient(to bottom right, #FF0800, #CC0600)' },
      link: "/offers"
    },
    {
      id: 3,
      title: "Combo Pack",
      description: "Movie + Snacks combo at special price",
      discount: "COMBO",
      icon: <FaGift className="text-4xl" />,
      bgColor: "bg-gradient-to-br",
      bgColorStyle: { background: 'linear-gradient(to bottom right, #FF0800, #CC0600)' },
      link: "/offers"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Special Offers</h2>
          <p className="text-gray-400">Don't miss out on these amazing deals</p>
        </div>

        

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {offers.map((offer) => (
    <Link
      key={offer.id}
      to={offer.link}
      className="rounded-lg p-8 text-white hover:scale-105 transition-transform duration-300 shadow-lg"
      style={{ background: 'linear-gradient(to bottom right, #FF0800, #CC0600)' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/20 p-3 rounded-lg">
          {offer.icon}
        </div>
        <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
          {offer.discount}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
      <p className="text-white/90 mb-4">{offer.description}</p>

      <span className="text-[#FF0800] font-semibold flex items-center gap-2 bg-white px-3 py-2 rounded-full w-max ">
        Learn More →
      </span>
    </Link>
  ))}
</div>

        <div className="text-center mt-8">
          <Link
            to="/offers"
            className="inline-block px-8 py-3 text-[#FF0800] font-semibold rounded-lg transition-colors duration-300 bg-white hover:opacity-90 hover:bg-[#FF0800] hover:text-white border-2 border-[#FF0800]"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;


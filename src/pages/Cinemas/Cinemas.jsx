import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { MdLocalMovies, MdAccessTime, MdLocationOn } from "react-icons/md";

const Cinemas = () => {
  const cinemas = [
    {
      name: "Grand Cinema Downtown",
      location: "123 Main Street, Downtown",
      hours: "10:00 AM - 12:00 AM",
      features: [
        "IMAX",
        "Dolby Atmos",
        "Recliner Seats",
        "Air Conditioning",
        "4K Projection",
        "Premium Sound",
      ],
      image: "/img/public/photo-1504050376847-144186a87c66.jpg",
    },
    {
      name: "Luxury Cinema Mall",
      location: "456 Shopping Blvd, Mall District",
      hours: "11:00 AM - 1:00 AM",
      features: [
        "VIP Lounge",
        "Recliner Seats",
        "Air Conditioning",
        "Dolby Atmos",
        "Restaurant",
      ],
      image: "/img/public/photo-1504050376847-144186a87c66.jpg",
    },
    {
      name: "Family Cinema Center",
      location: "789 Family Street, Suburb Area",
      hours: "9:00 AM - 11:00 PM",
      features: [
        "Kids Area",
        "Family Seats",
        "Air Conditioning",
        "3D Movies",
        "Snack Bar",
      ],
      image: "/img/public/photo-1504050376847-144186a87c66.jpg",
    },
  ];

  const cardBaseClasses = "w-full lg:w-[40vw] max-w-[720px] h-[70vh]";

  return (
    <div className="w-full px-4">
      <header className="w-full bg-gradient-to-b from-gray-400 to-black h-72 shadow-xl mb-8">
        <div className="w-full h-full flex items-center pl-[20px]">
          <div className="flex flex-col">
            <div className="flex gap-3 items-baseline ml-16">
              <MdLocalMovies className="text-amber-400 text-5xl" />
              <Typography
                variant="h3"
                className="font-normal leading-tight text-black text-5xl"
              >
                Our
              </Typography>
              <Typography
                variant="h2"
                className="font-normal leading-tight text-amber-400 text-5xl"
              >
                Cinemas
              </Typography>
            </div>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl ml-16">
              Premium cinema locations with state-of-the-art facilities. Find
              the perfect venue for your movie experience.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-start">
          {/* Top-left card */}
          <div className="flex justify-center">
            <Card
              className={`${cardBaseClasses} bg-black/90 text-white overflow-hidden rounded-xl shadow-xl group`}
            >
              <CardHeader className="relative flex-none h-1/2 p-0 m-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />
                <img
                  src={cinemas[0].image}
                  alt={cinemas[0].name}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute left-5 bottom-5 z-20 text-white">
                  <div className="text-white text-2xl font-normal leading-tight">
                    {cinemas[0].name}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-white/90">
                    <MdLocationOn className="text-white/90" />
                    <span>{cinemas[0].location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-4 bg-gray-800 rounded p-2">
                  <MdAccessTime className="text-amber-400" />
                  <div>
                    <div className="text-sm text-gray-300">Working Hours</div>
                    <div className="text-white font-medium">
                      {cinemas[0].hours}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-400">★</span>
                    <Typography className="text-gray-300">
                      Premium Features
                    </Typography>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cinemas[0].features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                  <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors">
                    View Location Map
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Top-right card */}
          <div className="flex justify-center">
            <Card
              className={`${cardBaseClasses} bg-black/90 text-white overflow-hidden rounded-xl shadow-xl group`}
            >
              <CardHeader className="relative flex-none h-1/2 p-0 m-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />
                <img
                  src={cinemas[1].image}
                  alt={cinemas[1].name}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-5 bottom-5 z-20 text-white">
                  <div className="text-white text-2xl font-normal leading-tight">
                    {cinemas[1].name}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-white/90">
                    <MdLocationOn className="text-white/90" />
                    <span>{cinemas[1].location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-4  bg-gray-800 rounded p-2">
                  <MdAccessTime className="text-amber-400" />
                  <div>
                    <div className="text-sm text-gray-300">Working Hours</div>
                    <div className="text-white font-medium">
                      {cinemas[1].hours}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-400">★</span>
                    <Typography className="text-gray-300">
                      Premium Features
                    </Typography>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cinemas[1].features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                  <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors">
                    View Location Map
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Bottom centered card */}
          <div className="col-span-1 lg:col-span-2 flex justify-center">
            <Card
              className={`${cardBaseClasses} bg-black/90 text-white overflow-hidden rounded-xl shadow-xl group mt-8`}
            >
              <CardHeader className="relative flex-none h-1/2 p-0 m-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none" />
                <img
                  src={cinemas[2].image}
                  alt={cinemas[2].name}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute left-6 bottom-6 z-20 text-white">
                  <div className="text-white text-2xl font-normal leading-tight">
                    {cinemas[2].name}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm text-white/90">
                    <MdLocationOn className="text-white/90" />
                    <span>{cinemas[2].location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardBody className="flex-1 p-6">
                <div className="flex items-center gap-3 mb-4  bg-gray-800 rounded p-2">
                  <MdAccessTime className="text-amber-400" />
                  <div>
                    <div className="text-sm text-gray-300">Working Hours</div>
                    <div className="text-white font-medium">
                      {cinemas[2].hours}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-400">★</span>
                    <Typography className="text-gray-300">
                      Premium Features
                    </Typography>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cinemas[2].features.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                  <button className="bg-amber-400 text-black px-6 py-2 rounded hover:bg-amber-400 transition-colors">
                    View Location Map
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinemas;

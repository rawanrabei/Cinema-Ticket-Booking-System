import React from 'react';
import { Typography, Chip } from "@material-tailwind/react"; 
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';


const MovieDetailsHeader = ({movieData}) => {
    const backgroundStyle = {
        backgroundImage: `url(${movieData.backgroundImg || '/placeholder-bg.jpg'})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
    <div className="relative h-screen w-full"> 
            <section style={backgroundStyle} className="headerTop relative w-full bg-black h-1/2 flex flex-col justify-end"> 
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-40  flex flex-col align-bottom pb-5 ms-96">
                        <Typography variant="h1" color="white" className="text-6xl font-extrabold mb-3">
                            {movieData.title}
                        </Typography>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-1 text-amber-400 text-2xl">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1; 
                                    if ((ratingValue - 0.5) === movieData.rating) {
                                        return <FaStarHalfAlt key={index} className="w-6 h-6" />;
                                    }
                                    if (ratingValue <= movieData.rating) {
                                        return <FaStar key={index} className="w-6 h-6" />;
                                    }
                                    return <FaRegStar key={index} className="w-6 h-6 text-white opacity-40" />; 
                                })}
                            </div>
                            {movieData.genres.map(genre => (
                                <Chip key={genre} value={genre} color="blue-gray" className="font-semibold" size="sm"/>
                            ))}
                        </div>
                </div>
            </section>
            <section className="relative z-50 ms-20">
                <img 
                    src={movieData.posterImg || '/placeholder-poster.jpg'} 
                    alt={movieData.title}
                    className=" md:w-64 h-96 object-cover rounded-lg shadow-xl border-4 absolute -translate-y-1/2"
                />
            </section>
            <section className="bg-white py-11 text-gray-800 relative z-30 h-60 ms-96"> 
            <div className=""> 
                <div className="flex flex-col">
                <div className="">
                    <Typography variant="paragraph" className="mb-6 text-lg text-gray-700">
                    {movieData.description}
                    </Typography>
                    <div className="flex gap-10 text-base font-medium">
                    <p><strong>Director:</strong> <span className="font-normal">{movieData.director}</span></p>
                    <p><strong>Language:</strong> <span className="font-normal">{movieData.language}</span></p>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </div>
);
};

export default MovieDetailsHeader;
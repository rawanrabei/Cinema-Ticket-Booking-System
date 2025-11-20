import React from 'react';
import { Typography, Card } from "@material-tailwind/react"; 
import { FaUser } from "react-icons/fa"; 

const MovieDetailsCast = ({ castData }) => {

    return (
        <Card className="bg-black shadow-xl text-white rounded-lg ms-20 w-[90%] p-6">
            <Typography variant="h3" className="text-2xl font-bold mb-6 flex items-center gap-2" color="white">
                <FaUser className="text-[#FF0800] w-6 h-6" />
                Cast
            </Typography>
            <div className="flex gap-12 overflow-x-auto pb-4">
                {castData.map(member => (
                    <div key={member.id} style={{ width: '120px', flexShrink: 0 }} className="text-center">
                        <img 
                            src={member.img} 
                            className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                        />
                        <Typography variant="h6" className="text-sm" color="white">
                            {member.name} 
                        </Typography>
                        <Typography variant="small" className="text-xs" color="gray">
                            {member.role}
                        </Typography>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default MovieDetailsCast;
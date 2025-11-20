import React, { useState } from 'react';
import { Card, Typography, Button, Stepper, Step, Radio } from "@material-tailwind/react";
import { FaCalendarAlt, FaChair, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa"; 


const DUMMY_SHOWTIMES = [
    { id: 1, time: "1:30 PM", seats: 55, date: "October 15, 2025" }, //
    { id: 2, time: "4:00 PM", seats: 70, date: "October 15, 2025" },
    { id: 3, time: "6:30 PM", seats: 80, date: "October 15, 2025" },
];

const DUMMY_CINEMAS = [
    { 
        id: 1, 
        name: "Luxury Cinema Mall", 
        address: "456 Shopping Blvd, Mall District", //
        image: "/images/cinemas/mall_view.jpg",
        features: ["VIP Lounge", "Recliner Seats", "Air Conditioning"], 
    },
    { 
        id: 2, 
        name: "Grand Cinema Downtown", 
        address: "123 Main Street, Downtown",
        image: "/images/cinemas/downtown_view.jpg",
        features: ["IMAX", "Dolby Atmos", "Standard"],
    },
];

const DUMMY_SEAT_TYPES = [
    { type: "Standard Seat", price: 12 }, //
    { type: "VIP Seat", price: 18 },
    { type: "Recliner Seat", price: 25 },
];

// ----------------------
// ShowtimeStep
// ----------------------
const ShowtimeStep = ({ data, setData}) => {

    const handleCinemaTypeChange = (type) => { setData(prev => ({ ...prev, cinemaType: type })); };
    const handleShowtimeSelect = (showtime) => { setData(prev => ({ ...prev, showtime: showtime })); };

    return (
        <div className="text-white">
            <Typography className="mb-4 text-xl font-semibold" color="white">Select Cinema Type</Typography>
            
            {/* خيارات نوع السينما (Radio Buttons) */}
            <div className="flex flex-col gap-4 mb-8">
                {['With Air Conditioning', 'Without Air Conditioning'].map(type => (
                    <div key={type} className="flex items-center">
                        <input type="radio" id={type} name="cinemaType" checked={data.cinemaType === type}
                            onChange={() => handleCinemaTypeChange(type)}
                            className="w-4 h-4 text-amber-500 bg-black border-gray-600 focus:ring-amber-500"/>
                        <label htmlFor={type} className="ml-2 text-white text-base">{type}</label>
                    </div>
                ))}
            </div>

            <Typography className="mb-4 text-xl font-semibold" color="white">
                Available Showtimes - {DUMMY_SHOWTIMES[0].date}
            </Typography>
            
{/* أوقات العرض المتاحة (Buttons) */}
            <div className="flex flex-wrap gap-4">
                {DUMMY_SHOWTIMES.map(st => {
                    const isSelected = data.showtime?.id === st.id;
                    
                    // 1. تصحيح اللون: الأصفر والأسود للنص
                    const buttonClasses = isSelected
                        ? 'bg-amber-500 text-black border-yellow-400' 
                        : 'bg-gray-900 text-white border border-gray-700';
                    
                    return (
                        <Button 
                            key={st.id}
                            onClick={() => handleShowtimeSelect(st)}
                            className={`py-1 px-48 text-center shadow-lg ${buttonClasses} text-sm`} 
                        >
                            <div className="flex flex-col items-center space-y-0">
                                <Typography className="text-sm font-semibold leading-tight">{st.time}</Typography>
                                <Typography className="text-xs font-normal leading-tight">{st.seats} seats</Typography>
                            </div>
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

// ----------------------
// الخطوة 2: CinemaStep
// ----------------------
const CinemaStep = ({ data, setData}) => {

    const handleCinemaSelect = (cinema) => { setData(prev => ({ ...prev, cinemaLocation: cinema })); };


    return (
        <div className="text-white">
            
            <Typography variant="h4" className="mb-6 font-semibold" color="white">Select Cinema Location</Typography>
            
            {/* قائمة مواقع السينما (Selection Cards) */}
            <div className="flex flex-col gap-4">
                {DUMMY_CINEMAS.map(cinema => {
                    const isSelected = data.cinemaLocation?.id === cinema.id;
                    const cardClasses = isSelected ? 'border-yellow-400 border-2 bg-gray-900' 
                        : 'border border-gray-700 bg-gray-900 hover:border-gray-700/50';

                    return (
                        <Card key={cinema.id}
                            className={`p-4 cursor-pointer flex-row items-center transition-all duration-300 ${cardClasses}`}
                            onClick={() => handleCinemaSelect(cinema)}>
                            <img src={cinema.image || '/placeholder-cinema.jpg'} alt={cinema.name}
                                className="w-24 h-24 object-cover rounded-md mr-4"/>
                            <div>
                                <Typography variant="h6" color="white" className="mb-1">{cinema.name}</Typography>
                                <div className="flex items-center text-gray-400 text-sm mb-3">
                                    <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                                    {cinema.address}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cinema.features.map(feature => (
                                        <div key={feature} className="text-xs px-2 py-1 bg-gray-700 text-white rounded-md">
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

// ----------------------
// الخطوة 3: SeatSelectionStep (نوع المقعد واختيار المقاعد)
// ----------------------
const SeatSelectionStep = ({ data, setData}) => {

    const handleSeatTypeSelect = (seatType) => {
        setData(prev => ({ ...prev, seatType: seatType, totalPrice: seatType.price * prev.selectedSeats.length }));
    };

    const isSeatTypeSelected = data.seatType !== null;
    
    const SEAT_MAP = [
        { row: 'A', seats: 12 }, { row: 'B', seats: 12 }, { row: 'C', seats: 12 }, 
        { row: 'D', seats: 12 }, { row: 'E', seats: 12 }, { row: 'F', seats: 12 }, { row: 'G', seats: 12 }, 
    ];
    const occupiedSeats = ['B2', 'C10', 'G3', 'F11']; // مقاعد محجوزة وهمية

    const toggleSeat = (seatId) => {
        const isSelected = data.selectedSeats.includes(seatId);
        let newSeats;
        
        if (isSeatTypeSelected) { // لا تسمح بالاختيار ما لم يتم تحديد نوع المقعد
            if (isSelected) {
                newSeats = data.selectedSeats.filter(id => id !== seatId);
            } else {
                newSeats = [...data.selectedSeats, seatId];
            }
        } else {
             newSeats = data.selectedSeats; // لا تغير شيئاً إذا لم يكن هناك نوع مقعد محدد
        }
        

        const newTotal = newSeats.length * (data.seatType?.price || 0);
        setData(prev => ({ ...prev, selectedSeats: newSeats, totalPrice: newTotal }));
    };

    return (
        <div className="text-white">
            {/* 1. اختيار نوع المقعد */}
            <Typography variant="h4" className="mb-6 font-semibold" color="white">Select Seat Type</Typography>
            
            <div className="flex flex-col gap-4 mb-8">
                {DUMMY_SEAT_TYPES.map(seat => {
                    const isSelected = data.seatType?.type === seat.type;
                    const cardClasses = isSelected ? 'border-yellow-400 border-2' : 'border border-gray-700';

                    return (
                        <Card key={seat.type} 
                            className={`p-4 cursor-pointer bg-gray-900 transition-all ${cardClasses}`}
                            onClick={() => handleSeatTypeSelect(seat)}>
                            {/* استخدام Radio button لإظهار الاختيار */}
                            <div className="flex items-center">
                                <Radio name="seatType" checked={isSelected} readOnly
                                    className="h-4 w-4 text-amber-500 bg-black border-gray-600 focus:ring-amber-500"/>
                                <Typography variant="h6" className="ml-2 font-medium" color="white">
                                    {seat.type}: <span className="font-normal">${seat.price} per seat</span>
                                </Typography>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* 2. خريطة المقاعد */}
            <Typography variant="h4" className="mb-6 font-semibold" color="white">Select Your Seats</Typography>
            
            <div className="flex flex-col items-center">
                
                {/* شاشة العرض */}
                <div className="w-2/3 bg-gray-700 text-center py-2 mb-8 rounded-t-lg text-sm">Screen</div>

                {/* خريطة المقاعد */}
                <div className="space-y-2">
                    {SEAT_MAP.map(rowInfo => (
                        <div key={rowInfo.row} className="flex items-center gap-1">
                            <span className="w-6 text-center font-bold text-gray-500">{rowInfo.row}</span>
                            {[...Array(rowInfo.seats)].map((_, seatIndex) => {
                                const seatId = rowInfo.row + (seatIndex + 1);
                                const isOccupied = occupiedSeats.includes(seatId);
                                const isSelected = data.selectedSeats.includes(seatId);

                                // تحديد لون المقعد
                                const seatClasses = isOccupied
                                    ? 'bg-red-700 cursor-not-allowed' 
                                    : isSelected
                                    ? 'bg-yellow-400 text-black cursor-pointer' 
                                    : 'bg-gray-700 hover:bg-gray-600 cursor-pointer'; 

                                    
                                return (
                                    <div key={seatId} 
                                        onClick={() => !isOccupied && isSeatTypeSelected && toggleSeat(seatId)}
                                        className={`w-6 h-6 text-xs flex items-center justify-center rounded-sm ${seatClasses}`}>
                                        {seatIndex + 1}
                                        
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-8 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-700 rounded-sm"></div>
                        <Typography variant="small" color="white">Available</Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
                        <Typography variant="small" color="white">Selected</Typography>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-700 rounded-sm"></div>
                        <Typography variant="small" color="white">Occupied</Typography>
                    </div>
                </div>
            </div>
            
        </div>
    );
}


// ----------------------
// SummaryStep
// ----------------------
const SummaryStep = ({ data}) => {
    
    const seatList = data.selectedSeats.length > 0 ? data.selectedSeats.join(', ') : 'None Selected';

    return (
        <div className="text-white">
            <Typography variant="h4" className="mb-6 font-semibold" color="white">Booking Summary</Typography>

            <div className="space-y-4 bg-gray-900 p-6 rounded-lg">
                <div className="flex justify-between">
                    <Typography color="gray">Movie:</Typography>
                    <Typography color="white" className="font-semibold">{data.movieData?.title || 'N/A'}</Typography>
                </div>
                <div className="flex justify-between">
                    <Typography color="gray">Cinema:</Typography>
                    <Typography color="white" className="font-semibold">{data.cinemaLocation?.name || 'N/A'}</Typography>
                </div>
                <div className="flex justify-between">
                    <Typography color="gray">Showtime:</Typography>
                    <Typography color="white" className="font-semibold">{data.showtime?.time || 'N/A'}</Typography>
                </div>
                <div className="flex justify-between">
                    <Typography color="gray">Seats:</Typography>
                    <Typography color="white" className="font-semibold">{seatList}</Typography>
                </div>
                <div className="flex justify-between">
                    <Typography color="gray">Seat Type:</Typography>
                    <Typography color="white" className="font-semibold">{data.seatType?.type || 'Standard'}</Typography>
                </div>
                
                {/* الإجمالي */}
                <div className="flex justify-between border-t border-gray-700 pt-4">
                    <Typography color="amber" variant="h5" className="font-bold">Total:</Typography>
                    <Typography color="amber" variant="h5" className="font-bold">${data.totalPrice.toFixed(2)}</Typography>
                </div>
            </div>

            {/* أزرار التحكم */}
            <div className="flex justify-center pt-5">
                <Button color="amber" className="w-full text-xs">
                    Continue to Food & Drinks
                </Button>
            </div>
        </div>
    );
}

// =================================================================
// 3. المكون الرئيسي (MovieDetailsBooking)
// =================================================================

const MovieDetailsBooking = ({ movieData }) => {
    
    const [currentStep, setCurrentStep] = useState(0); 
    
    const [bookingData, setBookingData] = useState({
        cinemaType: 'With Air Conditioning', 
        showtime: null,
        cinemaLocation: null,
        seatType: DUMMY_SEAT_TYPES[0], 
        selectedSeats: [],
        totalPrice: 0,
        movieData: movieData, // ⬅️ تمرير بيانات الفيلم للملخص
    });
    
    // وظائف التنقل
    const handleNext = () => { if (currentStep < 3) setCurrentStep(prev => prev + 1); };
    const handlePrev = () => { if (currentStep > 0) setCurrentStep(prev => prev - 1); };
    
    // وظيفة تحديد المكون الذي سيتم عرضه بناءً على الخطوة
    const getStepComponent = () => {
        const props = { data: bookingData, setData: setBookingData, onNext: handleNext, onPrev: handlePrev };

        switch (currentStep) {
            case 0: return <ShowtimeStep {...props} />; 
            case 1: return <CinemaStep {...props} />; 
            case 2: return <SeatSelectionStep {...props} />;
            case 3: return <SummaryStep {...props} />;
            default: return <div>An error occurred in the booking process.</div>;
        }
    };

    return (
        <Card className="bg-black shadow-2xl ms-20 my-8 rounded-lg w-[90%] p-6">
            
            <Typography variant="h3" className="text-2xl font-bold mb-6" color="amber">
                Book Your Tickets
            </Typography>
            
            {/* 5. مكون شريط الخطوات (Stepper) */}
            <div className="w-full  bg-gray-900 rounded-lg p-1">
                            <div className="flex justify-between p-2">
                                
                                {['Showtime', 'Cinema', 'Seats', 'Confirm'].map((label, index) => {
                                    const isCurrent = index === currentStep;
                                    return (
                                        <Typography
                                            key={index}
                                            // 🟢 التعديل: تفعيل النقر على النص للانتقال بين الخطوات
                                            onClick={() => setCurrentStep(index)} 
                                            className={`text-center font-semibold text-sm cursor-pointer  ${
                                                isCurrent 
                                                    ? 'text-white'
                                                    : 'text-gray-500 hover:text-white'
                                            }`}
                                        >
                                            {label}
                                        </Typography>
                                    );
                                })}
                            </div>
            </div>

            {/* 6. عرض المكون المناسب للخطوة الحالية */}
            <div className="mt-6">
                {getStepComponent()}
            </div>
            
        </Card>
    );
};

export default MovieDetailsBooking;
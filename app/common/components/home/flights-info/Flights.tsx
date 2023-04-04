"use client"
import FlightsItem from "@/app/common/components/home/flights-info/FlightsItem";


const buttonGroupDate = [
    {

        icon: '/svg/icon-time-flights.svg',
        title: 'РАСПИСАНИЕ РЕЙСОВ',
        alt: 'расписание'
    },
    {

        icon: '/svg/icon-time-flights.svg',
        title: 'вторая таблица',
        alt: 'вторая таблица'
    },

]

export default function Flights() {
    return (
        <>
            <section className='sm:max-w-xl lg:max-w-6xl'>
                {buttonGroupDate.map(({icon, alt}, index) => (
                    <FlightsItem key={index} src={icon} alt={alt} width={18} height={18} />
                ))}
            </section>
        </>
    );
};
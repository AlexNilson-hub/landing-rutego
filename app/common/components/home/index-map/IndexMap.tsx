"use client"
import IndexMapItem from "@/app/common/components/home/index-map/IndexMapItem";


const buttonGroupDate = [
    {
        icon: '/svg/icon-time-flights.svg',
        title: 'РАСПИСАНИЕ РЕЙСОВ',
        alt: 'расписание'
    },
]

export default function IndexMap() {
    return (
        <>
            <section className='sm:max-w-xl lg:max-w-6xl'>
                {buttonGroupDate.map((b, index) => (
                    <IndexMapItem key={index} />
                ))}
            </section>
        </>

    );
};
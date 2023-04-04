"use client"
import Link from 'next/link';


const navigations = [
    {title: 'Расписание рейсов', href: '/about'},
    {title: 'Бронирование билетов', href: '/about'},
    {title: 'Заказ автобуса', href: '/about'},
    {title: '+7 (903) 039-80-31', href: '/about'}
]
const topString = [
    'пассажирские перевозки тула-москва',
    'Предоставляем комфортабельные автобусы для Ваших поездок',
    'купить билет',
]

export default function NavbarItem() {
    return (
        <>
            <section className="sm:max-w-xl lg:max-w-6xl mx-auto container text-amber-50">
                <nav className="relative container mx-auto p-6 space-x-4 sm:justify-center space-x-2 ">
                    {navigations.map(({title, href}, index) => (
                        <Link key={index} href={href}
                              className="rounded-lg px-3 py-2  font-medium hover:bg-emerald-600 hover:text-green-300">{title}</Link>
                    ))}
                </nav>
                <div className='absolute container mx-auto mt-32 p-8 py-2 text-3xl'>{topString[0].toUpperCase()}</div>
                <div className='absolute container mx-auto mt-40 p-8 ml-0 text-md'>{topString[1]}</div>
                <button
                    className='btn-orange text-black text-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300'
                    type='button'>{topString[2].toUpperCase()}</button>
            </section>
        </>
    );
};


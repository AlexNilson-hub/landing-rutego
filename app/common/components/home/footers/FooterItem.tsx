"use client"
import Link from 'next/link';


const navigations = [
    {title: 'Купить билет', href: '/about'},
    {title: 'Заказ автобусов', href: '/about'},
    {title: 'Расписание движения', href: '/about'},
]

export default function FooterItem() {
    return (
        <section className="relative container mx-auto p-6 text-amber-50">
            <nav className="flex align-items-center justify-around">
                <div>
                    <div className='pt-2'>
                        <p>Автобусы Тула-Москва</p><br/>
                        <p>+7 (903) 039-80-31</p>
                    </div>
                </div>
                {navigations.map(({title, href}, index) => (
                    <Link key={index} href={href} className="h-1/2 rounded-lg px-3 py-2 font-medium hover:bg-amber-300 hover:text-blue-300">{title}</Link>
                ))}
            </nav>
            <div className='flex justify-center mt-12'>
                <p>© 2023 Разработка сайтов в Туле - RUTEGO</p>
            </div>
        </section>
    );
};


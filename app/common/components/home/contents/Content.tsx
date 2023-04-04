import ContentItem from "@/app/common/components/home/contents/ContentItem";
import Flights from "@/app/common/components/home/flights-info/Flights";
import IndexMap from "@/app/common/components/home/index-map/IndexMap";


const buttonGroupDate = [
    {
        href: '/about',
        title: 'РАСПИСАНИЕ РЕЙСОВ',
        alt: 'расписание'
    },
    {
        href: '/',
        title: 'КУПИТЬ БИЛЕТ',
        alt: 'купить'
    },
    {
        href: '/about',
        title: 'ЗАКАЗ АВТОБУСА',
        alt: 'заказ'
    },
]

export default function Content() {
    return (
        <>
            <section className='sm:max-w-xl lg:max-w-6xl mx-auto container flex justify-around'>
                {buttonGroupDate.map(({href, alt, title}, index) => (
                    <ContentItem key={index} href={href} alt={alt} title={title} />
                ))}
            </section>
            <section className='sm:max-w-xl lg:max-w-6xl mx-auto my-[2rem]'>
                <IndexMap/>
                <Flights/>
                <div>
                    <p>Автобусы подаются для посадки пассажиров за 10 минут до времени отправления</p>
                </div>
            </section>
        </>

    );
};
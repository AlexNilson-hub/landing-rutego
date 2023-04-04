import CardItem from "@/app/common/components/home/cards/CardItem";


const cardDate = [
    {
        src: '/svg/icon-bus.svg',
        height: 39,
        width: 63, alt: 'icon bus',
        title1: 'УДОБСТВО БРОНИРОВАНИЯ',
        title2: 'Интуитивно понятная форма заказа билета',
    },
    {
        src: '/svg/icon-times.svg',
        height: 45,
        width: 45, alt: 'icon times',
        title1: 'ЗАБОТА О ВАШЕМ КОМФОРТЕ',
        title2: 'Комфортабельные сидения, кондиционеры, аудио и видео системы, багажные отсеки',
    },
    {
        src: '/svg/icon-pay.svg',
        height: 45,
        width: 45, alt: 'icon pay',
        title1: 'БЕЗ ПЕРЕПЛАТ ЗА БИЛЕТЫ',
        title2: 'Билеты по привлекательным ценам',
    },
]

export default function Card() {
    return (
            <div className='sm:max-w-xl lg:max-w-6xl mx-auto container flex justify-center my-[34rem]   space-x-4'>
                {cardDate.map(({src,height, width, alt, title1, title2}, index) => (
                    <CardItem key={index} src={src} height={height} width={width} alt={alt} title1={title1} title2={title2} />
                ))}

            </div>
    );
};
import ButtonOrange from "@/app/common/components/buttons/ButtonOrange";
import Image from "next/image"


export default function TopFooter() {
    return (
        <>

            <div className='top-footer flex justify-between my-[80rem]'>
                <div className='px-60 py-32 text-amber-50 text-2xl'>
                    <h2>ЗАКАЖИТЕ АВТОБУС ДЛЯ ПОЕЗДКИ <br/> ПО РОСИИ СО СКИДКОЙ 10%</h2>
                </div>
                <div
                    className='btn-orange w-[286px] h-[60px]  text-black text-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300'>
                    <ButtonOrange onClick={() => console.log("You clicked!")}
                                  title="КУПИТЬ БИЛЕТ"
                    />
                </div>
                <Image
                    priority
                    src={'/images/top-footer-auto.png'}
                    height={513}
                    width={769}
                    alt={'auto'}
                />
            </div>
        </>
    );
};
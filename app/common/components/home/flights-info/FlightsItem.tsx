"use client"
import Image from "next/image"
import Input from "@/app/common/components/inputs/Input";
import InputGroup from "@/app/common/components/inputs/InputGroup";

const titleData = [
    'Рейс Тула-Москва',
    'ежедневно',
    'Ав.ст "Восточная" - ав.ст. "Орехово", Шипиловский пр., 12',
    'Автовокзал, проспект Ленина 94 - ст. “Новоясеневская”, Новоясеневский тупик, 4',
    'по воскресеньям:',
]


export default function FlightsItem({width, height, alt}: any) {
    return (
        <>
            <section className='content-flights p-4 grid grid-rows-4 my-4'>
                <div className='flex justify-between h-6'>
                    <div className=''>
                        <h2>{titleData[0]}</h2>
                    </div>
                    <div className='flex justify-between space-x-2'>
                        <Image
                            priority
                            src={'/svg/icon-time-flights.svg'}
                            height={height}
                            width={width}
                            alt={alt}
                        />
                        <h2>{titleData[1].toUpperCase()}</h2>
                    </div>
                </div>
                <div className='-mt-20'>
                    <div>
                        <div className='flex justify-start space-x-2 '>
                            <Image
                                priority
                                src={'/svg/icon-bus_black.svg'}
                                height={height}
                                width={width}
                                alt={alt}
                            />
                            <h2>{titleData[2]}</h2>
                        </div>
                        <div className='pl-6'>
                            <InputGroup n={7}/>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-start space-x-2 '>
                            <Image
                                priority
                                src={'/svg/icon-bus_black.svg'}
                                height={height}
                                width={width}
                                alt={alt}
                            />
                            <h2>{titleData[3]}</h2>
                        </div>
                        <div className='pl-6'>
                            <InputGroup n={8}/>
                        </div>
                        <div className='pl-6'>
                            <InputGroup n={4}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>{titleData[4]}</h3>
                        </div>
                        <div className='pl-6'>
                            <Input/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
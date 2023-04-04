"use client"
import InputSearchMap from "@/app/common/components/inputs/InputSearchMap";
import ButtonOrange from "@/app/common/components/buttons/ButtonOrange";
import MapYandex from "@/app/common/components/mapsyandex/MapYandex";


export default function IndexMapItem() {
    return (
        <>
            <section className='content-index-map p-4 grid grid-rows-1 my-4'>
                <div>
                    <h1 className='text-3xl mt-10'>РАСПИСАНИЕ АВТОБУСОВ ТУЛА-МОСКВА</h1>
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='flex justify-start items-center'>
                            <h2>Маршрут</h2>
                            <div className='pl-36'>
                                <InputSearchMap/>
                            </div>
                        </div>

                        <div className='flex justify-start items-center py-4'>
                            <h2>Стоимость поездки</h2>
                            <div className='btn-orange-map px-10 py-1'>
                                <ButtonOrange title={'750₽'}/>
                            </div>
                        </div>
                        <div className='flex justify-start items-center py-4 text-[#141B57]'>
                           <p> Уточнить информацию о маршрутах, билетах и расписании <br/>  Вы можете по телефону: +7 (903) 039-80-31</p>
                        </div>
                        <div className='flex justify-start items-center mt-6'>
                            <div className='btn-orange-maps pl-[4.2rem] pt-[.8rem] animate-bounce'>
                                <ButtonOrange title={'КУПИТЬ БИЛЕТ'}/>
                            </div>
                            <h2 className='text-[#7E7A7A] px-4'>Звонки принимаются строго <br/> с 09-00 до 18-00</h2>
                        </div>
                    </div>
                    <div>
                        <MapYandex/>
                    </div>
                </div>
            </section>
        </>
    );
};
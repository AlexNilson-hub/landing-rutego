"use client"

export default function InputSearchMap() {
    return (
        <>
            <section className=''>
                <div className=''>
                    <label className="relative block">
                        <span className="sr-only">Поиск</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">name</svg>
                        </span>
                        <input
                            className="w-96 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Выберите маршрут..." type="text" name="search"/>
                    </label>
                </div>
            </section>
        </>
    );
};

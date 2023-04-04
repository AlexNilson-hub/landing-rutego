"use client"
import Input from "@/app/common/components/inputs/Input";


export default function InputGroup({n}:number) {
    const numbers = n
    return (
        <>
            <section className='sm:max-w-xl lg:max-w-6xl mx-auto container flex justify-start space-x-4'>
                {[...Array(n)].map((e, index,n) => (
                    <Input key={index} n={n}/>
                ))}
            </section>
        </>

    );
};
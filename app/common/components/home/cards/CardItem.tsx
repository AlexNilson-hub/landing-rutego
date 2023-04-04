import Image from "next/image"

export default function CardItem({src, height, width, alt, title1, title2}: any) {
    return (
        <div className='card container w-[390px] h-[283px] inline-grid grid-cols-1 p-12 space-y-2 '>
            <div>
                <Image
                    priority
                    src={src}
                    height={height}
                    width={width}
                    alt={alt}
                />
            </div>
            <div className='text-2xl'>
                <p>{title1}</p>
            </div>
            <div className='text-xl'>
                <p>{title2}</p>
            </div>
        </div>
    );
};
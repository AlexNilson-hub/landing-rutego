'use client'
import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';


export default function ContentItem({href, title}: any) {
    return (
        <div className='container  flex justify-around border-b-gray-400 border-b-2 hover:border-amber-400'>
            <Link
                href={href}
                // Change style depending on whether the link is active

            >
                {title}
            </Link>
            {/*<ActiveLink key={index} href={href} alt={alt}>*/}
            {/*    {title}*/}
            {/*</ActiveLink>*/}
            {/*<Link activeclassname="active" key={index} href={href} alt={alt}>{title}</Link>*/}
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link className={`font-bold py-8 ${*/}
            {/*            router.pathname === href*/}
            {/*                ? "text-rose-500 hover:text-rose-800"*/}
            {/*                : "text-sky-500 hover:text-sky-800"*/}
            {/*        }`} key={index} href={href} alt={alt}>{title}</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}

        </div>
    );
};
import Main from "@/app/common/components/Main";
import Content from "@/app/common/components/home/contents/Content";
import About from "@/app/about/page";

export const metadata = {
    title : "Home",
    description: "Home page | About"
}

export default function Home() {
    return (

        <section className='sm:max-w-xl lg:max-w-6xl mx-auto'>
            <About/>
        </section>
    )
}

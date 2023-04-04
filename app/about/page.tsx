import Content from "@/app/common/components/home/contents/Content";

export const metadata = {
    title : "About",
    description: "About page | Home"
}

export default function About() {
    return (
        <>
            <section className='sm:max-w-xl lg:max-w-6xl mx-auto my-44 mr-[15rem]'>
                <Content/>
            </section>
        </>
    )
}

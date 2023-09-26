import React from 'react'
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Content from "../Components/Content";
import {API} from "../const";

export default function Project({page, menu, footer}) {

    if (!page)
    {
        return null
    }
    else {
        const {MetaTitle, MetaDescription, Keywords, SharedImage} = page.attributes.Seo
        return (
            <div>
                <Head>
                    <title>{MetaTitle}</title>
                    <meta name="title" content={MetaTitle}/>
                    <meta name="description" content={MetaDescription}/>
                    <meta name="keywords" content={Keywords} />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:image" content={`${API}${SharedImage.Media.data.attributes.url}`} key="og:image" />
                </Head>

                <Header menu={menu} short={page}/>
                <Content data={page.attributes.Description}/>
                <Footer footer={footer}/>
            </div>
        )
    }

}

export async function getStaticPaths() {
    const paths = await fetch(`http://127.0.0.1:1337/api/pages?populate=%2A`)
        .then(res => res.json())
        .then(pages => pages.data.map((page) => ({
            params: {slug: toString(page.URL)}
        })))

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async ({params}) => {
    const {slug} = params;

    let page = await fetch(`http://127.0.0.1:1337/api/pages?populate[Seo][fields][0]=MetaTitle&populate[Seo][fields][1]=MetaDescription&populate[Seo][fields][2]=Keywords&populate[Seo][populate][SharedImage][fields][0]=Alt&populate[Seo][populate][SharedImage][populate][Media][fields][0]=%2A&fields[0]=Title&fields[1]=Description&fields[2]=URL&filters[URL][$eq]=${slug}`)
        .then(res => res.json())
        .then(data => data.data[0])

    page = page || null
    const menu = await fetch(`http://127.0.0.1:1337/api/menu?populate[Link][fields][0]=Title&populate[Link][fields][1]=URL&populate[Submenus][fields][0]=Title&populate[Submenus][fields][1]=URL&populate[Submenus][populate][MenuItems][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][1]=URL`)
        .then(res => res.json())
        .then(data => data.data.attributes)

    const footer = await fetch(`http://127.0.0.1:1337/api/footer?populate[AdditionalLinks][fields][0]=Title&populate[AdditionalLinks][fields][1]=URL&populate[Columns][fields][0]=Title&populate[Columns][populate][Links][fields][0]=Title&populate[Columns][populate][Links][fields][1]=URL&populate[SocialLinks][fields][0]=URL&populate[SocialLinks][populate][Picture][fields][0]=*`)
        .then(res => res.json())
        .then(data => data.data.attributes)

    return {
        props: {page, menu, footer},
        revalidate: 10,
    };
}

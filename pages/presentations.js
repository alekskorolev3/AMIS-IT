import React from 'react'
import Head from "next/head";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {API} from "../const";
import styles from "../styles/Presentations.module.css";
import ButtonDescription from "../Components/ButtonMain/ButtonDescription";
import ButtonMain from "../Components/ButtonMain/ButtonMain";

export default function Project({page, menu, footer}) {

    if (!page)
    {
        return null
    }
    else {
        const {MetaTitle, MetaDescription, Keywords} = page.attributes.Seo
        return (
            <div>
                <Head>
                    <title>{MetaTitle}</title>
                    <meta name="title" content={MetaTitle}/>
                    <meta name="description" content={MetaDescription}/>
                    <meta name="keywords" content={Keywords}/>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="author"
                          content="https://www.linkedin.com/in/%D0%B0%D1%80%D1%82%D1%91%D0%BC-%D1%83%D0%BB%D0%B0%D1%81%D0%B5%D0%B2%D0%B8%D1%87-7a05bb220/"/>
                </Head>

                <Header menu={menu} short={page}/>
                <section className={styles.content}>
                    <div className={styles.listWrapper}>
                        {
                            page.attributes?.List?.map((item) => (
                                <div key={item?.id} className={styles.itemContainer}>
                                    <div className={styles.itemContainerInner}>
                                        <span className={styles.itemTitle}>{item?.Title}</span>
                                        <span className={styles.itemDate}>{item?.Date}</span>
                                        <span className={styles.itemDescription}>{item?.Description}</span>
                                    </div>

                                    <ButtonMain link={{Title: 'Открыть', URL: item?.Link}}/>

                                    <img src="/gear.svg" alt="gear" className={styles.gear1}/>
                                    <img src="/gear.svg" alt="gear" className={styles.gear2}/>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <Footer footer={footer}/>
            </div>
        )
    }

}

export const getStaticProps = async ({params}) => {

    let page = await fetch(`${API}/api/presentation?populate[List][populate]=%2A&populate[Seo][fields][0]=MetaTitle&populate[Seo][fields][1]=MetaDescription&populate[Seo][fields][2]=Keywords&populate[Seo][populate][SharedImage][fields][0]=Alt&populate[Seo][populate][SharedImage][populate][Media][fields][0]=%2A`)
        .then(res => res.json())
        .then(data => data.data)

    page = page || null

    console.log(page)

    const menu = await fetch(`${API}/api/menu?populate[Link][fields][0]=Title&populate[Link][fields][1]=URL&populate[Submenus][fields][0]=Title&populate[Submenus][fields][1]=URL&populate[Submenus][populate][MenuItems][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][1]=URL`)
        .then(res => res.json())
        .then(data => data.data.attributes)

    const footer = await fetch(`${API}/api/footer?populate[Contacts]=%2A&populate[AdditionalLinks][fields][0]=Title&populate[AdditionalLinks][fields][1]=URL&populate[Columns][fields][0]=Title&populate[Columns][populate][Links][fields][0]=Title&populate[Columns][populate][Links][fields][1]=URL&populate[SocialLinks][fields][0]=URL&populate[SocialLinks][populate][Picture][fields][0]=*`)
        .then(res => res.json())
        .then(data => data.data.attributes)

    return {
        props: {page, menu, footer},
        revalidate: 10,
    };
}

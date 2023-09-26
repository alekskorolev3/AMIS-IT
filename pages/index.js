import Head from 'next/head'
import Header from "../Components/Header";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Partners from "../Components/Partners";
import Footer from "../Components/Footer";
import News from "../Components/News";

export default function Home({menu, projects, partners, news, footer}) {
  return (
    <div>
      <Head>
        <title>АМИС-АйТи – интегратор ПО для бизнеса</title>
        <meta name="description" content="Компания АМИС-АйТи – разработка ПО для всех уровней производственных процессов" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header menu={menu}/>
        <Projects projects={projects}/>
        <About/>
        <News news={news}/>
        <Partners partners={partners}/>
        <Footer footer={footer}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const menu = await fetch(`http://127.0.0.1:1337/api/menu?populate[Link][fields][0]=Title&populate[Link][fields][1]=URL&populate[Submenus][fields][0]=Title&populate[Submenus][fields][1]=URL&populate[Submenus][populate][MenuItems][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][0]=Title&populate[Submenus][populate][MenuItems][populate][Links][fields][1]=URL`)
      .then(res => res.json())
      .then(data => data.data.attributes)

  const projects = await fetch(`http://127.0.0.1:1337/api/proekties?populate[Card][fields][0]=Title&populate[Card][fields][1]=URL&populate[Card][fields][2]=Big&populate[Card][fields][3]=Color&populate[Card][populate][Picture][fields][0]=*`)
      .then(res => res.json())
      .then(data => data.data)

  const partners = await fetch(`http://127.0.0.1:1337/api/partner?populate=%2A`)
      .then(res => res.json())
      .then(data => data.data.attributes.Picture.data)

  const news = await fetch("http:/127.0.0.1:1337/api/news?populate[Card][populate]=%2A&pagination[page]=1&pagination[pageSize]=3")
      .then(res => res.json())
      .then(data => data.data)

  const footer = await fetch(`http://127.0.0.1:1337/api/footer?populate[AdditionalLinks][fields][0]=Title&populate[AdditionalLinks][fields][1]=URL&populate[Columns][fields][0]=Title&populate[Columns][populate][Links][fields][0]=Title&populate[Columns][populate][Links][fields][1]=URL&populate[SocialLinks][fields][0]=URL&populate[SocialLinks][populate][Picture][fields][0]=*`)
      .then(res => res.json())
      .then(data => data.data.attributes)

  return {
    props: {menu, projects, partners, news, footer},
    revalidate: 10,
  };
}

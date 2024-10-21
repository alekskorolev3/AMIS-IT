import React, {useEffect, useRef, useState} from 'react'
import styles from "../styles/Partners.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {API} from "../const";

const Partners = ({partners}) => {
    const [responsive, setResponsive] = useState({})

    const items = partners.map((img) => {
        return (
            <div key={img.id} data-value="1" style={{width: "fit-content", cursor: "pointer"}}>
                <img src={`${API}${img.attributes.url}`} alt={img.attributes.name} className={styles.logo}/>
            </div>
        )
    })

    useEffect(() => {
        setResponsive({
            0: {
                items: 2,
                itemsFit: 'contain',
            },
            568: {
                items: 3,
                itemsFit: 'contain',
            },
            1024: {
                items: 5,
                itemsFit: 'contain',
            },
        })
    }, [])

    return (
        <section className={styles.partners}>
            <h3>Клиенты и партнёры</h3>

            <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                autoPlay
                autoHeight
                infinite
                ssrSilentMode
                animationDuration={2000}
            />
        </section>
    )
}

export default Partners

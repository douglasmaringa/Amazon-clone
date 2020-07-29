import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img className='header__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
               

            {/*  procuts */}
            <div className="home__row">
                
                <Product
                id='23233'
                image='data:image/webp;base64,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'
                rating={5}
                title='Apple iPhone 11 (128GB) - Black'
                price={980.15}
                />


                <Product
                id='223233'
                image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
                rating={4}
                title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape'
                price={23.96}
                />
            </div>

            <div className="home__row">
            <Product
                id='2343433'
                image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg'
                rating={2}
                title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U,'
                price={1196}
                />

                <Product
                id='212133'
                image='https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg'
                rating={4}
                title='TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless '
                price={11,96}
                />


                <Product
                id='245533'
                image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
                rating={3}
                title='TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless '
                price={11,96}
                />
            </div>

            <div className="home__row">
                <Product
                    id='25656233'
                    image= 'https://images-na.ssl-images-amazon.com/images/I/912GH5wXEmL._SL1500_.jpg'
                    rating={5}
                    title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, '
                    price={11,96}
                    />
            </div>
            
        </div>
    )
}

export default Home

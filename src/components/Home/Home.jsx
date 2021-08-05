import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import './Home.css'
import Service from './Service'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Service />
            <Footer />
        </div>
    )
}

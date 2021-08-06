import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import './Home.css'
import Services from './Services'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Services />
            <Footer />
        </div>
    )
}

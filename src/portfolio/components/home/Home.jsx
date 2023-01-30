import SideLeft from './SideLeft';
import SideRight from './SideRight';
import Social from './Social';
import Scroll from './Scroll';
import './home.css';


const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    
                    <SideRight />
                    <SideLeft />

                </div>
                <Scroll />
            </div>

        </section>

    )
}

export default Home;
import { dataSkills } from './dataSkills';
import './skills.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


const Skills = () => {
    return (
        <section className="skill container section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle"></span>

            <Swiper
                className="skill__container"
                loop={true}
                centeredSlides={true}
                initialSlide={1}
                slidesPerGroup={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    }
                }}
                modules={[Pagination]}
            >
                {
                    dataSkills.map(({ id, image, title }) => {
                        return (
                            <SwiperSlide className="skill__card" key={id}>
                                <img src={image} alt={title} className="skill__img" />
                                <h3 className="skill__name"> {title} </h3>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Skills;
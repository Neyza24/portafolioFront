import './scrollUp.css';

const ScrollUp = () => {

    window.addEventListener('scroll', function () {
        const scrollUp = document.querySelector('.scrollup');

        //When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with scroll-top class
        if (this.scrollY >= 570) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll')
        }
    })

    return (
        <a href="#home" className="scrollup">
            <i className='bx bx-up-arrow-alt scrollup__icon'></i>
        </a>
    )
}

export default ScrollUp;
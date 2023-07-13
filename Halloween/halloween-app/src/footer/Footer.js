import footerlogo from '../assets/img/logo.png'
import footer1 from '../assets/img/footer1-img.png'
import footer2 from '../assets/img/footer2-img.png'

function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">
                        <img src={footerlogo} alt="" className="footer__logo-img" />
                        Halloween
                    </a>

                    <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>

                    <div className="footer__social">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-instagram-alt' ></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                            <i className='bx bxl-twitter' ></i>
                        </a>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">About</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Features</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">News</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Our Services</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Discounts</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Shipping mode</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Our Company</h3>

                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">About us</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Our mision</a>
                        </li>
                    </ul>
                </div>
            </div>

            <span className="footer__copy">&#169; Developers-Biuro. All rigths reserved <br /> By: Shk Abdullah </span>

            <img src={footer1} alt="" className="footer__img-one" />
            <img src={footer2} alt="" className="footer__img-two" />


            <a href="#" class="scrollup" id="scroll-up">
                <i class='bx bx-up-arrow-alt scrollup__icon'></i>
            </a>

        </footer>

    )

}
export default Footer
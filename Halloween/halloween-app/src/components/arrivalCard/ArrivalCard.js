



function ArrivalCard(props) {
    return (
        <div className="new__content swiper-slide col-lg-4 col-sm-12" >
            <div className="new__tag">New</div>
            <img src={props.src} alt="" className="new__img" />
            <h3 className="new__title">{props.title} </h3>
            <span className="new__subtitle">Accessory</span>

            <div className="new__prices">
                <span className="new__price">${props.price}</span>
                <span className="new__discount">${props.disprice}</span>
            </div>

            <button className="button new__button">
                <i className='bx bx-cart-alt new__icon'></i>
            </button>
        </div>
    )

}
export default ArrivalCard
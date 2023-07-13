


function TrickCard(props) {
    return(
        <div class="trick__content">
                        <img src={props.src} alt="" class="trick__img"/>
                        <h3 class="trick__title">{props.title}</h3>
                        <span class="trick__subtitle">{props.desc}</span>
                        <span class="trick__price">${props.price} </span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>
    )
    
}
export default TrickCard
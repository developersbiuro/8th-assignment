import ArrivalCard from "../arrivalCard/ArrivalCard"
import arrivalimg1 from "../../assets/img/new1-img.png"
import arrivalimg2 from "../../assets/img/new2-img.png"
import arrivalimg3 from "../../assets/img/new3-img.png"
import arrivalimg4 from "../../assets/img/new4-img.png"
import arrivalimg5 from "../../assets/img/new5-img.png"
import arrivalimg6 from "../../assets/img/new6-img.png"




function Arrival() {
    return (
        <section className="section new" id="new">
            <h2 className="section__title">New Arrivals</h2>

            <div className="new__container container">
                <div className="swiper new-swiper container-fluid">
                    <div className="swiper-wrapper row ">

                        <div className="col-lg-4"> <ArrivalCard src={arrivalimg1} title="Haunted House" price="14.99" disprice="29.99" /></div>
                        <div className="col-lg-4"><ArrivalCard src={arrivalimg2} title="Halloween Candle" price="11.99" disprice="21.99" /></div>
                        <div className="col-lg-4"><ArrivalCard src={arrivalimg3} title="Witch Hat" price="4.99" disprice="9.99" /></div> 
                        <div className="col-lg-4"> <ArrivalCard src={arrivalimg4} title="RIP" price="4.99" disprice="9.99" /></div>
                        <div className="col-lg-4"><ArrivalCard src={arrivalimg5} title="Terrifying Crystall Ball" price="24.99" disprice="44.99" /></div>
                        <div className="col-lg-4"><ArrivalCard src={arrivalimg6} title="Witch Broom" price="5.99" disprice="12.99" /></div>

                    </div>
                </div>
            </div>
        </section>


    )

}
export default Arrival
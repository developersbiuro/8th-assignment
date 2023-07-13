import cardimg1 from "../../assets/img/trick-treat1-img.png"
import cardimg2 from "../../assets/img/trick-treat2-img.png"
import cardimg3 from "../../assets/img/trick-treat3-img.png"
import cardimg4 from "../../assets/img/trick-treat4-img.png"
import cardimg5 from "../../assets/img/trick-treat5-img.png"
import cardimg6 from "../../assets/img/trick-treat6-img.png"
import TrickCard from "../trickCard/TrickCard"

function Trick() {
    return(
        <section class="section trick" id="trick">
                <h2 class="section__title">Trick Or Treat</h2>

                <div class="trick__container container grid">
                    <TrickCard price="11.99" desc="Candy" title="Toffe" src={cardimg1} />  
                    <TrickCard price="8.99" desc="Accessory" title="Bone" src={cardimg2} />                   
                    <TrickCard price="15.99" desc="Accessory" title="Scarecrow" src={cardimg3} /> 
                    <TrickCard price="7.99" desc="Candy" title="Candy Cane" src={cardimg4} /> 
                    <TrickCard price="19.99" desc="Candy" title="Pumpkin" src={cardimg5} /> 
                    <TrickCard price="17.99" desc="Accessory" title="Ghost" src={cardimg6} /> 
                                     
                </div>
            </section>
    )
    
}
export default Trick
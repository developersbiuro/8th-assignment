
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import About from "../../components/about/About";
import Trick from "../../components/trick/Trick";
import Discount from "../../components/discount/Discount";
import Arrival from "../../components/arrival/Arrival";
import News from "../../news/News";
import Footer from "../../footer/Footer";


function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Category />
            <About />
            <Trick />
            <Discount />
            <Arrival />
            <News />
            <Footer />
        </div>

    )

}
export default HomePage;
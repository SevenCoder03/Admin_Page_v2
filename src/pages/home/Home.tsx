import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
} from "../../data";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__box home__box1">
                <TopBox />
            </div>
            <div className="home__box home__box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="home__box home__box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="home__box home__box4">
                <PieChartBox />
            </div>
            <div className="home__box home__box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="home__box home__box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="home__box home__box7">
                <BigChartBox />
            </div>
            <div className="home__box home__box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="home__box home__box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
};

export default Home;

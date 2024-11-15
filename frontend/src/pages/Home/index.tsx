import Footer from "../Footer"
import BasicChart from "./components/Basic"
import PieChartDemo from "./components/Pie"

const HomePage = ()=>{

    return <div className="w-full flex flex-wrap ">
        <BasicChart/>

        <PieChartDemo/>

        <Footer/>

    </div>

}

export default HomePage
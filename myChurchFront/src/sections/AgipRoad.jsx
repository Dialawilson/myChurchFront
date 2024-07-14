import Welcome from "../component/welcome&select/Welcome";
import Livestream from "../component/Livestream";
import Services from "../component/services";
import Series from "../component/series";


const AgipRoad =()=>{
    return(
        <>
        <Welcome />

        <div className="container agip mt-4 ">
            <p className="text-center fs-1 fw-bold">Welcome to agip road</p>

            <Livestream />

        </div>

        <Services />
        <Series />


        </>
    )
}
export default AgipRoad;
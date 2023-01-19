import Location from "./Location"

const Main = props => {

    return(
        <div>
            <div className="headerDiv">
                <h1>Welcom</h1>
            </div>
            <div className="locationDiv">
                <Location name={"House"} gold={[3,5]}/>
                <Location name={"Farm"} gold={[2,6]}/>
                <Location name={"Cave"} gold={[1,7]}/>
                <Location name={"Casino"} gold={[-20,20]}/>
            </div>
        </div>
    )
}

export default Main;
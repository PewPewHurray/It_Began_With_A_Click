import { useNavigate } from "react-router-dom";
import axios from "axios";
import house from "../assets/imgs/house.jfif";
import farm from "../assets/imgs/farm.jfif";
import cave from "../assets/imgs/cave.jpg";
import casino from "../assets/imgs/casino.jfif";

const Location = (props) => {
    const {gold, name} = props;
    const navigate = useNavigate();
    let img;
    if (name === "House"){
        img = house;
    } else if (name === "Farm"){
        img = farm;
    } else if (name === "Cave"){
        img = cave;
    } else{
        img = casino;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // axios.post("http://localhost:8000/api/locations/click",
        // {
        //     gold,
        //     name
        // })
        //     .then((res) => {
        //         console.log(res.data);
        //         navigate("/");
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    return(
        <div className="location">
            <h2>{name}</h2>
            <img className="locationImg" src={img} width="100" height="100" />
            <p>({gold[0]} - {gold[1]}) Gold</p>
            <form onSubmit={onSubmitHandler}>
                <input className="locationBtn" type="submit" value="Click"/>
            </form>
        </div>
    )
}

export default Location;
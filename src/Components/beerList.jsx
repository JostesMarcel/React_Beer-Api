import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Nav from "./nav";

const BeerList = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => {
            console.log(json);
            setApi(json)
            })
    }, []);

    return (
        <div>
            {api.map((item, i) => {
                return (
                    <div className="overview" key={i}>
                        <img className="beerImg" src={item.image_url} alt="" />
                    <div className="flex">
                        <h3>{item.name}</h3>
                        <p className="yellowp">{item.tagline}</p>
                        <p>Created by: {item.name}</p>
                        <Link to={`/Detail/${item._id}`}><button className="btn">Details</button></Link>
                    </div>
                    </div>
                )
            })}
            <Nav/>
        </div>
    )
}





export default BeerList
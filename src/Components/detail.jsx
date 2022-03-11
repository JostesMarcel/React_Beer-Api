import { useParams, Link } from "react-router-dom"
import Nav from "./nav";
import { useEffect, useState } from "react";


const Detail = () => {
    let apiId = useParams('_id')
    console.log(apiId._id);

    const [name, setName] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
            .then(response => response.json())
            .then(json => {
            console.log(json);
            setName(json)
            })
    }, [apiId._id]);

    return (
        <>
        <div className="detailwrapper">
            <img className="detailImg" src={name.image_url} alt="" />
            <h1>{name.name}</h1>
            <p className="yellowp2">{name.tagline}</p>
            <p className="grayP">First brewed: <span>{name.first_brewed}</span></p>
            <p className="grayP">Attenuation level: <span>{name.attenuation_level}</span></p>
            <p className="disc">{name.description}</p>
            <Link to="/AllBeer"><button className="backBtn">Back</button></Link>
        </div>
        <Nav/>
        </>
    )
}
export default Detail
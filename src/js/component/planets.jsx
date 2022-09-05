import React from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";


function Planets ( {planetName, planetUrl}) {
    return <>
    <div className="card m-2 text-start" style={{width: '15rem'}}>
  <img src={rigoImage} className="card-img-top" alt="..."/>
  <div className="card-body p-1">
    <h5 className="card-title">{planetName}</h5>

    <a href={planetUrl}>Link to Swapi</a>
    <Link to="/information"><button className="btn btn-outline-primary float-start">Learn more!</button></Link>
    <a href="#" className="btn btn-outline-primary float-end"><i className="fa fa-heart text-danger" /></a>
  </div>
</div>
    </>
}

export default Planets
import PropTypes from 'prop-types'
import { useState } from 'react';


function Course(props) {

    const [purchased, setPurchased] = useState(false);

    function BuyCourse(discount){
        console.log(props.name,"Purchased with discount of",discount);
        setPurchased(true);
    }
        return (
            props.name && <div className="card">
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <button onClick={() => BuyCourse(20)}>Buy Now</button>
                <button onClick={() => props.delete(props.id)}>Delete</button>
                <p>{purchased ? "Course Purchased!" : "Limited Slots"} </p>
            </div>
        )
    } 



export default Course
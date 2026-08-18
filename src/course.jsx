import PropTypes from 'prop-types'


function Course(props) {

    function BuyCourse(discount){
        console.log(props.name," Purchased with discount of ",discount);
    }
        return (
            props.name && <div className="card">
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <p>{props.price}</p>
                <button onClick={() => BuyCourse(20)}>Buy Now</button>
            </div>
        )
    } 



export default Course
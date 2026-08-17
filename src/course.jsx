import PropTypes from 'prop-types'


function Course(props) {
        return (
            props.name && <div className="card">
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        )
    } 



export default Course
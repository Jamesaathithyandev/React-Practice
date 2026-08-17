import PropTypes from 'prop-types'

function Course(props) {
    if (props.show === true) {
        return (
            <div className="card">
                <img src={props.img} alt="" />
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        )
    } else {
        return (
            <div className="card">Course not Available</div>
        )
    }
}

Course.propTypes = {
    show: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
    img: PropTypes.string,
}

export default Course
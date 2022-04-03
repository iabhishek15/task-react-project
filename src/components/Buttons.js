import PropTypes from 'prop-types'

const Buttons = (props) => {
    // const onClick = () => {
    //     console.log("The button is getting clicked!")
    // }

    return (
      <>
        <button
            className="btn"
            style={{ backgroundColor: props.color }} 
            onClick={props.onClick}
        >
        {props.text}
        </button>
      </>
    )
  }

// const Buttons = ({color, text}) => {
//   return (
//     <>
//         <button style={{ backgroundColor:color }} className="btn">{text}</button>
//     </>
//   )
// }

Buttons.defaultProps = {
    color: "steelblue",
}

Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Buttons
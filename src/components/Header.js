import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({title}) => {
    const onClick = () => {
        console.log('button clicked!')
    }
    return (
      <header className="header">
          {/* <h1 style={{color: 'red', backgroundColor:'black'}}>{title}</h1>
          <h1 style={headingStyle}>This is just for testing css</h1> */}
          <h1>{title}</h1>
          {/* <Buttons color="green" text='hello'/>
          <Buttons color="red" text='world'/> */}
          <Buttons text='Add' onClick={onClick}/>
      </header>
    )
  }

const headingStyle = {color: 'red', backgroundColor:'black'}


// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.title}</h1>
//         <h1>{props.name}</h1>
//     </header>
//   )
// }

//setting up default props
Header.defaultProps = {
    name: "Abhishek Singh"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header

//for class based
/*
import React from 'react'

class App extends React.components {
    render() {
        return <h1>Hello from a class</h1>
    }
}

export default App

*/
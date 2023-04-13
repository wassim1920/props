import React from 'react'
import Button from './Button';

class About extends React.Component{
  render(){
    return(
      <>
      <p>{this.props.title}</p>
      <p>{this.props.price}</p>
      <Button title="Details"/>
      </>
    )
  }
}
export default About ; 

import React from 'react'
import Button from './Button'

function Home(props) {
  console.log(props)
  return (
    <>
    <p>name: {props.name}</p>
    <p>age: {props.age}</p>
    <Button title="Details"/>

    </>
  )
}

export default Home

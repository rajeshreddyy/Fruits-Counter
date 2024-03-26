// Write your code here
import {Component} from 'react'
import './index.css'

const fruits = {
  banana: 'https://assets.ccbp.in/frontend/react-js/banana-img.png',
  mango: 'https://assets.ccbp.in/frontend/react-js/mango-img.png',
}

const Button = props => {
  console.log(props)
  const {fruitName, btnStyling, eatFruit} = props
  return (
    <button
      onClick={eatFruit}
      type="submit"
      className={btnStyling}
    >{`Eat ${fruitName}`}</button>
  )
}

const Fruit = props => {
  console.log(props)
  const {
    imgStyling,
    fruitContainer,
    fruitImg,
    fruitName,
    btnStyling,
    eatFruit,
  } = props
  return (
    <div className={fruitContainer}>
      <img alt={fruitName} src={fruitImg} className={imgStyling} />
      <Button
        fruitName={fruitName}
        btnStyling={btnStyling}
        eatFruit={eatFruit}
      />
    </div>
  )
}

class FruitsCounter extends Component {
  state = {mangoesAte: 0, bananaAte: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoesAte: prevState.mangoesAte + 1,
      bananaAte: prevState.bananaAte,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      mangoesAte: prevState.mangoesAte,
      bananaAte: prevState.bananaAte + 1,
    }))
  }

  render() {
    const {mangoesAte, bananaAte} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate {mangoesAte} mangoes {bananaAte} bananas
          </h1>
          <div className="fruits-container">
            <Fruit
              imgStyling="fruit"
              fruitsContainer="fruit-container"
              fruitImg={fruits.mango}
              fruitName="Mango"
              btnStyling="btn"
              eatFruit={this.eatMango}
            />
            <Fruit
              imgStyling="fruit"
              fruitsContainer="fruit-container"
              fruitImg={fruits.banana}
              fruitName="Banana"
              btnStyling="btn"
              eatFruit={this.eatBanana}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

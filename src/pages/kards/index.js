import React, {useState} from "react";
import cx from 'classnames';
import styles from "./index.module.scss";

const FlashCard = ({className, activeSide, onClick}) => {
  console.log('Actove side', activeSide)
  return (
  <div onClick={onClick} className={cx(styles.flipCard, className)}>
    <div className={cx(styles.flipCardInner, styles[activeSide])}>
      <div className={styles.flipCardFront}>
        Front
      </div>
      <div className={styles.flipCardBack}>
        <h1>John Doe</h1> 
        <p>Architect & Engineer</p> 
        <p>We love that guy</p>
      </div>
    </div>
  </div>
)};

const Deck = () => {
  const [activeSide, setActiveSide] = useState('front');
  const handleClick = () => {
    console.log('YARRRAK');
    setActiveSide((activeSide) => activeSide === 'front' ? 'back' : 'front')
  };
  console.log('Current activeSide', activeSide)
  return <FlashCard onClick={handleClick} className={styles.deck} activeSide={activeSide}/>
}

export default Deck;

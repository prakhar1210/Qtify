import React from 'react'
import style from './Hero.module.css';
import HeroImage from '../../assets/HeroImage.png'

const Hero = () => {
  return (
    <div className={style.hero}>
        <div>
             <h1>100 Thousand Songs, ad-free</h1>
             <h1>Over Thousands podcast episodes</h1>
        </div>
      <div>
        <img src={HeroImage} alt='headphone' width={212}  />
      </div>
    </div>
  )
}

export default Hero

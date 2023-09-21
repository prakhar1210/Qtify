import React from 'react'
import style from './Button.module.css';

const Button = ({children}) => {
  return (
    <button className={style.btn}>{children}</button>
  )
}

export default Button

import React from 'react'
import { ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg';
import style from './Search.module.css';

const Search = () => {
  return (
    <div>
        <form className={style.wrapper}>
            <input className={style.search} />
                <div>
                    <button className={style.searchBtn} type='submit'>
                      < SearchIcon />
                    </button>

            
                </div>
        </form>
    </div>
  )
}

export default Search

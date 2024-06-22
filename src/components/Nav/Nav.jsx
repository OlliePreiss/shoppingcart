import classes from './Nav.module.css'
import growLogo from '../../assets/grow-logo-svg.svg'
import searchIcon from '../../assets/search-svg.svg'
import basketIcon from '../../assets/bag-svg.svg'

function Nav() {
  return(
    <div className={classes.navContainer}>
      <div className={classes.logoContainer}>
        <img src={growLogo} alt="" className={classes.growLogo} />
        <p className={classes.growName}>Grow</p>
      </div>
      <div className={classes.searchContainer}>
        <img src={searchIcon} alt="" className='searchIcon'/>
        <input type='text' placeholder='Search Grow...' className={classes.searchBar}/>
      </div>
      <div className={classes.tabContainer}>
        <img src={basketIcon} alt="" className={classes.basketIcon}/>
        <p className={classes.loginTab}> Login </p>
      </div>
    </div>
  )
}

export default Nav;

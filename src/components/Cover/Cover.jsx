import classes from './Cover.module.css'

function Cover() {
  return(
    <div className={classes.coverContainer}>
      <div className='tagline'>
        <h1>Stylish platpots for modern homes</h1>
      </div>
      <div className={classes.description}>
        <h3>Explore our range of handmade, ceramic platpots and saucers, expertly crafted to enhance your home aesthetic</h3>
      </div>
      <button className={classes.coverButton}>Explore our range</button>
    </div>
  )
}

export default Cover;

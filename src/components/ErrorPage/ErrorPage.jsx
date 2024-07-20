import Nav from '../Nav/Nav';
import classes from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return(
    <>
      <Nav />
      <div className={classes.errorContainer}>
        <p> Sorry, something seems to have gone wrong! </p>
        <Link to="/" className={classes.errorButton}>Return to homepage </Link>
      </div>
    </>
  )
}

export default ErrorPage;

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css'

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.nav}>
      
        <NavLink className={buildLinkClass} to="/">Home</NavLink>
        <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
      
    </header>
  );
}

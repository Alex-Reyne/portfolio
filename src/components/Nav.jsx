import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Styles/Nav.scss';

const HOME = 'home';
const ABOUT = 'about';
const WORK = 'work';
const RESUME = 'resume';

export default function Nav(props) {
	const [view, setView] = useState(HOME);
	const location = useLocation();

	return (
		<nav className='navbar'>
			<div className='logo'>
				<img src='images/alex-reyne-logo-slate.png' alt='Alex Reyne Logo' />
			</div>
			<div className='link-list'>
				<NavLink to='/' onClick={e => setView(HOME)}>
					<div className='nav-button'>
						{view === HOME && <h1 className='selected'>+H</h1>}
						{view !== HOME && <h1>HOME</h1>}
					</div>
				</NavLink>
				<NavLink to='/about' onClick={e => setView(ABOUT)}>
					<div className='nav-button'>
						{view === ABOUT && <h1 className='selected'>+A</h1>}
						{view !== ABOUT && <h1>ABOUT</h1>}
					</div>
				</NavLink>
				<NavLink to='/work' onClick={e => setView(WORK)}>
					<div className='nav-button'>
						{view === WORK && <h1 className='selected'>+W</h1>}
						{view !== WORK && <h1>WORK</h1>}
					</div>
				</NavLink>
				<NavLink to='/resume' onClick={e => setView(RESUME)}>
					<div className='nav-button'>
						{view === RESUME && <h1 className='selected'>+R</h1>}
						{view !== RESUME && <h1>RESUME</h1>}
					</div>
				</NavLink>
			</div>
		</nav>
	);
}

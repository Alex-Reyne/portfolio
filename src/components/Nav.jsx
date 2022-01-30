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
						{view === HOME && <h1 className='selected fade-in'>+H</h1>}
						{view !== HOME && <h1 className='fade-in'>HOME</h1>}
					</div>
				</NavLink>
				<NavLink to='/about' onClick={e => setView(ABOUT)}>
					<div className='nav-button'>
						{view === ABOUT && <h1 className='selected fade-in'>+A</h1>}
						{view !== ABOUT && <h1 className='fade-in'>ABOUT</h1>}
					</div>
				</NavLink>
				<NavLink to='/work' onClick={e => setView(WORK)}>
					<div className='nav-button'>
						{view === WORK && <h1 className='selected fade-in'>+W</h1>}
						{view !== WORK && <h1 className='fade-in'>WORK</h1>}
					</div>
				</NavLink>
				<NavLink to='/resume' onClick={e => setView(RESUME)}>
					<div className='nav-button'>
						{view === RESUME && <h1 className='selected fade-in'>+R</h1>}
						{view !== RESUME && <h1 className='fade-in'>RESUME</h1>}
					</div>
				</NavLink>
			</div>
		</nav>
	);
}

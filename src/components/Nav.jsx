import { useState } from 'react';
import NavList from './NavList';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav(props) {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<img src='images/alex-reyne-logo-slate.png' alt='Alex Reyne Logo' />
			</div>
			<div className='link-list'>
				<NavLink to='/'>
					<div className='nav-button'>
						<h1>H</h1>
					</div>
				</NavLink>
				<NavLink to='/about'>
					<div className='nav-button'>
						<h1>A</h1>
					</div>
				</NavLink>
				<NavLink to='/work'>
					<div className='nav-button'>
						<h1>W</h1>
					</div>
				</NavLink>
				<NavLink to='/resume'>
					<div className='nav-button'>
						<h1>R</h1>
					</div>
				</NavLink>
			</div>
		</nav>
	);
}

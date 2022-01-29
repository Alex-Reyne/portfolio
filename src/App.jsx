import Nav from './components/Nav.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Work from './Pages/Work.jsx';
import Resume from './Pages/Resume.jsx';
import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='content'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/work' element={<Work />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
		</div>
	);
}

export default App;

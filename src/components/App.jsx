import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Resume from './Resume.jsx';
import './App.scss';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<HashRouter>
				<Nav />
				<div className='content'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/work' element={<Work />} />
						<Route path='/resume' element={<Resume />} />
					</Routes>
				</div>
			</HashRouter>
		</div>
	);
}

export default App;

import Nav from './components/Nav.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Work from './Pages/Work.jsx';
import Resume from './Pages/Resume.jsx';
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

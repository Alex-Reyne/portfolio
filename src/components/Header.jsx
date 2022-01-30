import { useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation().pathname;
	return (
		<>
			{location === '/' && (
				<>
					<div className='home-name fade-in'>
						<h1>Alexander Reyne</h1>
						<div className='alex-headline'>
							<h2>Full-Stack Web Developer</h2>
							<h2>Graphic Designer</h2>
							<hr></hr>
						</div>
					</div>
				</>
			)}
			{location === '/about' && (
				<>
					<div className='home-name fade-out'>
						<h1>Alexander Reyne</h1>
						<div className='alex-headline'>
							<h2>Full-Stack Web Developer</h2>
							<h2>Graphic Designer</h2>
							<hr></hr>
						</div>
					</div>
				</>
			)}
		</>
	);
}

import { useLocation } from 'react-router-dom';
import SmIconLinks from './SmIconLinks';

export default function Header() {
	const location = useLocation().pathname;
	return (
		<div className='home-name'>
			<h1>Alexander Reyne</h1>
			<div className='alex-headline'>
				<h2>Full-Stack Web Developer</h2>
				<h2>Graphic Designer</h2>
				<hr></hr>
			</div>
		</div>
	);
}

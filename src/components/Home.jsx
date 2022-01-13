import {
	faGithubSquare,
	faLinkedin,
	faMedium,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.scss';

export default function Home() {
	return (
		<div className='content'>
			<div className='home-name'>
				<h1>Alexander Reyne</h1>
				<div className='alex-info'>
					<h2>Full-Stack Web Developer</h2>
					<h2>Graphic Designer</h2>
					<hr></hr>
				</div>
			</div>
			<div className='bg-logo'>
				<img src='images/alex-reyne-logo-gradient.png' alt='Alex Reyne Logo' />
			</div>
			<div className='home-icons'>
				<div>
					<a href='https://github.com/alex-reyne' target='_blank'>
						<FontAwesomeIcon icon={faGithubSquare} />
					</a>
					<a href='https://medium.com/@creativereyne' target='_blank'>
						<FontAwesomeIcon icon={faMedium} />
					</a>
				</div>
				<div>
					<a href='https://www.linkedin.com/in/alexanderreyne/' target='_blank'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='https://www.instagram.com/alexreyne.dev/' target='_blank'>
						<FontAwesomeIcon icon={faInstagramSquare} />
					</a>
				</div>
			</div>
		</div>
	);
}

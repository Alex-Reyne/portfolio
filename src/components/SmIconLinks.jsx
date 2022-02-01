import {
	faGithubSquare,
	faLinkedin,
	faMedium,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/SmIconLinks.scss';

export default function IconLinks() {
	return (
		<>
			<div className='sm-icon-links fade-in'>
				<a
					href='https://github.com/alex-reyne'
					rel='noreferrer'
					target='_blank'
				>
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
				<a
					href='https://medium.com/@creativereyne'
					rel='noreferrer'
					target='_blank'
				>
					<FontAwesomeIcon icon={faMedium} />
				</a>
				<a
					href='https://www.linkedin.com/in/alexanderreyne/'
					rel='noreferrer'
					target='_blank'
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href='https://www.instagram.com/alexreyne.dev/'
					rel='noreferrer'
					target='_blank'
				>
					<FontAwesomeIcon icon={faInstagramSquare} />
				</a>
			</div>
		</>
	);
}

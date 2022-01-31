import {
	faGithubSquare,
	faLinkedin,
	faMedium,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

export default function IconLinks() {
	const location = useLocation().pathname;

	return (
		<>
			{location === '/' && (
				<>
					<div className='home-icons fade-in'>
						<div>
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
						</div>
						<div>
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
					</div>
				</>
			)}
			{location !== '/' && (
				<>
					<div className='home-icons fade-out'>
						<div>
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
						</div>
						<div>
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
					</div>
				</>
			)}
		</>
	);
}

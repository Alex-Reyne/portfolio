import {
	faGithubSquare,
	faLinkedin,
	faMedium,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/Home.scss';
import Header from '../components/Header';
import IconLinks from '../components/IconLinks';

export default function Home() {
	return (
		<div className='content'>
			<Header />
			<IconLinks />
		</div>
	);
}

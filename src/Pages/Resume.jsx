import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/Resume.scss';

import Header from '../components/Header';
import EducationDrop from '../components/EducationDrop';
import SummaryDrop from '../components/SummaryDrop';
import ExperienceDrop from '../components/ExperienceDrop';
import StackDrop from '../components/StackDrop';
import SmIconLinks from '../components/SmIconLinks';

export default function Resume() {
	return (
		<div className='content'>
			<div>
				<Header />
			</div>
			<SmIconLinks />
			<div className='resume-content'>
				<div className='left-column'>
					<EducationDrop />
					<SummaryDrop />
				</div>
				<div className='right-column'>
					<ExperienceDrop />
					<StackDrop />
				</div>
				<a
					id='download-resume'
					target='_blank'
					href='https://drive.google.com/file/d/1rvrY8h93EFONuJnC_6eURYJscZSnOp1V/view?usp=sharing'
				>
					<FontAwesomeIcon icon={faAngleDoubleDown} />
					<p>Download Full Resume</p>
				</a>
			</div>
		</div>
	);
}

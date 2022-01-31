import Header from '../components/Header';
import './Styles/Resume.scss';
import EducationDrop from '../components/EducationDrop';
import SummaryDrop from '../components/SummaryDrop';
import ExperienceDrop from '../components/ExperienceDrop';
export default function Resume() {
	return (
		<div className='content'>
			<div>
				<Header />
			</div>
			<div className='resume-content'>
				<div className='left-column'>
					<EducationDrop />
					<SummaryDrop />
				</div>
				<div className='right-column'>
					<ExperienceDrop />
				</div>
			</div>
		</div>
	);
}

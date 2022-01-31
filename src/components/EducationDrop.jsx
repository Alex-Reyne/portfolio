import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import './Styles/EducationDrop.scss';

const OPEN = 'open';
const CLOSED = 'closed';

export default function EducationDrop() {
	const [education, setEducation] = useState(OPEN);
	const [summary, setSummary] = useState(OPEN);
	const [experience, setExperience] = useState(OPEN);
	const [stack, setStack] = useState(OPEN);

	const educationString = '.EDUCATION()';
	const summaryString = '.SUMMARY()';
	const experienceString = '.EXPERIENCE()';
	const stackString = '.STACK()';

	return (
		<>
			<div className='education-content'>
				{education === CLOSED && (
					<>
						<section
							className='education-title'
							onClick={e => setEducation(OPEN)}
						>
							<h1 className='gt closed'>&gt;</h1>
							<h1>{educationString}</h1>
						</section>
						<div className='education-alex fade-out'>
							<p>Web Development Diploma</p>
							<h3>Lighthouse Labs</h3>
							<p>2021-2022</p>
						</div>
					</>
				)}
				{education === OPEN && (
					<>
						<section
							className='education-title'
							onClick={e => setEducation(CLOSED)}
						>
							<h1 className='gt open'>&gt;</h1>
							<h1>{educationString}</h1>
						</section>
						<div className='education-alex fade-in'>
							<p>Web Development Diploma</p>
							<h3>Lighthouse Labs</h3>
							<p>2021-2022</p>
						</div>
					</>
				)}
			</div>
		</>
	);
}

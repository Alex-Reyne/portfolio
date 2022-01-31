import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import './Styles/SummaryDrop.scss';

const OPEN = 'open';
const CLOSED = 'closed';

export default function SummaryDrop() {
	const [summary, setSummary] = useState(OPEN);
	const [experience, setExperience] = useState(OPEN);
	const [stack, setStack] = useState(OPEN);

	const summaryString = '.SUMMARY()';
	const experienceString = '.EXPERIENCE()';
	const stackString = '.STACK()';

	return (
		<>
			<div className='summary-content'>
				{summary === CLOSED && (
					<>
						<section className='summary-title' onClick={e => setSummary(OPEN)}>
							<h1 className='gt closed'>&gt;</h1>
							<h1>{summaryString}</h1>
						</section>
						<div className='summary-alex fade-out'>
							<p>
								Creative, analytical, web developer with management experience
								pivoting from my career in graphic design where I specialized in
								logo design.
							</p>
							<p>
								Completed 7 projects through school including 2 web apps built
								from scratch with a team of my peers and publishing a small
								library on NPM.
							</p>
						</div>
					</>
				)}
				{summary === OPEN && (
					<>
						<section
							className='summary-title'
							onClick={e => setSummary(CLOSED)}
						>
							<h1 className='gt open'>&gt;</h1>
							<h1>{summaryString}</h1>
						</section>
						<div className='summary-alex fade-in'>
							<p>
								Creative, analytical, web developer with management experience
								pivoting from my career in graphic design where I specialized in
								logo design.
							</p>
							<p>
								Completed 7 projects through school including 2 web apps built
								from scratch with a team of my peers and publishing a small
								library on NPM.
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
}

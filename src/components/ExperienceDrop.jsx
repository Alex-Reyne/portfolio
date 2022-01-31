import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import './Styles/ExperienceDrop.scss';

const OPEN = 'open';
const CLOSED = 'closed';

export default function ExperienceDrop() {
	const [experience, setExperience] = useState(OPEN);

	const experienceString = '.EXPERIENCE()';

	return (
		<>
			<div className='experience-content'>
				{experience === CLOSED && (
					<>
						<section
							className='experience-title'
							onClick={e => setExperience(OPEN)}
						>
							<h1 className='gt closed'>&gt;</h1>
							<h1>{experienceString}</h1>
						</section>
						<div className='experience-cards fade-out'>
							<section className='experience-alex card-1'>
								<h1>Freelance Graphic Designer</h1>
								<h3>Creative Reyne</h3>
								<p className='years'>2015-present</p>
								<p>
									Creative, analytical, web developer with management experience
									pivoting from my career in graphic design where I specialized
									in logo design.
								</p>
							</section>
							<section className='experience-alex card-2'>
								<h1>Freelance Graphic Designer</h1>
								<h3>Creative Reyne</h3>
								<p className='years'>2015-present</p>
								<p>
									Creative, analytical, web developer with management experience
									pivoting from my career in graphic design where I specialized
									in logo design.
								</p>
							</section>
						</div>
					</>
				)}
				{experience === OPEN && (
					<>
						<section
							className='experience-title'
							onClick={e => setExperience(CLOSED)}
						>
							<h1 className='gt open'>&gt;</h1>
							<h1>{experienceString}</h1>
						</section>
						<div className='experience-cards fade-in'>
							<section className='experience-alex card-1'>
								<h1>Freelance Graphic Designer</h1>
								<h3>Creative Reyne</h3>
								<p className='years'>2015-present</p>
								<p>
									Creative, analytical, web developer with management experience
									pivoting from my career in graphic design where I specialized
									in logo design.
								</p>
							</section>
							<section className='experience-alex card-2'>
								<h1>Graphic Designer / Production Manager</h1>
								<h3>Uno Printing Co</h3>
								<p className='years'>2018-2019</p>
								<p>
									Creative, analytical, web developer with management experience
									pivoting from my career in graphic design where I specialized
									in logo design.
								</p>
							</section>
						</div>
					</>
				)}
			</div>
		</>
	);
}

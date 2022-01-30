import { useState } from 'react/cjs/react.development';
import Header from '../components/Header';
import IconLinks from '../components/IconLinks';
import './Styles/About.scss';

const OPEN = 'open';
const CLOSED = 'closed';

export default function About() {
	const [aboutView, setAboutView] = useState(OPEN);
	const aboutString = '.ABOUT()';

	return (
		<div className='content'>
			<Header />
			<IconLinks />
			<div className='about-content'>
				{aboutView === CLOSED && (
					<>
						<section className='about-title' onClick={e => setAboutView(OPEN)}>
							<h1 className='gt closed'>&gt;</h1>
							<h1>{aboutString}</h1>
						</section>
						<hr className='fade-out'></hr>
						<div className='about-alex fade-out'>
							<p>
								I’m a Full-Stack Web Developer and self taught Graphic Designer.
								I’ve always had a passion for creating art and tinkering with
								things.
							</p>
							<p>
								I can work independently but I also enjoy collaborating as part
								of a team. I love to solve problems and have a high attention to
								detail.
							</p>
							<p>
								After 10 years as a designer I realized that my passion for
								creative works had a hole in it. With a burning desire to
								implement my designs as functional works, I decided to dive into
								web development.
							</p>
							<p>
								I am now ready and eager to work in and collaborate with a team
								of likeminded developers and designers
							</p>
						</div>
					</>
				)}
				{aboutView === OPEN && (
					<>
						<section
							className='about-title'
							onClick={e => setAboutView(CLOSED)}
						>
							<h1 className='gt open'>&gt;</h1>
							<h1>{aboutString}</h1>
						</section>
						<hr className='fade-in'></hr>
						<div className='about-alex fade-in'>
							<p>
								I’m a Full-Stack Web Developer and self taught Graphic Designer.
								I’ve always had a passion for creating art and tinkering with
								things.
							</p>
							<p>
								I can work independently but I also enjoy collaborating as part
								of a team. I love to solve problems and have a high attention to
								detail.
							</p>
							<p>
								After 10 years as a designer I realized that my passion for
								creative works had a hole in it. With a burning desire to
								implement my designs as functional works, I decided to dive into
								web development.
							</p>
							<p>
								I am now ready and eager to work in and collaborate with a team
								of likeminded developers and designers
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

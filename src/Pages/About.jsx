import Header from '../components/Header';
import './Styles/About.scss';

export default function About() {
	const aboutString = '.ABOUT()';

	return (
		<div className='content'>
			<Header />
			{/* <div className='bg-logo'>
				<img src='images/alex-reyne-logo-gradient.png' alt='Alex Reyne Logo' />
			</div> */}
			<div className='about-content'>
				<section className='about-title'>
					<h1 className='gt'>&gt;</h1>
					<h1>{aboutString}</h1>
				</section>
				<hr></hr>
				<div className='about-alex'>
					<p>
						I’m a Full-Stack Web Developer and self taught Graphic Designer.
						I’ve always had a passion for creating art and tinkering with
						things.
					</p>
					<p>
						I can work independently but I also enjoy collaborating as part of a
						team. I love to solve problems and have a high attention to detail.
					</p>
					<p>
						After 10 years as a designer I realized that my passion for creative
						works had a hole in it. With a burning desire to implement my
						designs as functional works, I decided to dive into web development.
					</p>
					<p>
						I am now ready and eager to work in and collaborate with a team of
						likeminded developers and designers
					</p>
				</div>
			</div>
		</div>
	);
}

import { useState } from 'react/cjs/react.development';
import './Styles/StackDrop.scss';

const OPEN = 'open';
const CLOSED = 'closed';

export default function StackDrop() {
	const [stack, setStack] = useState(OPEN);

	const stackString = '.STACK()';

	return (
		<>
			<div className='stack-content'>
				{stack === CLOSED && (
					<>
						<section className='stack-title' onClick={e => setStack(OPEN)}>
							<h1 className='gt closed'>&gt;</h1>
							<h1>{stackString}</h1>
						</section>
						<div className='stack-alex fade-out'>
							<div className='dev-stack'>
								<img
									src='images/dev-stack.svg'
									alt='dev-stack'
									id='dev-stack'
								></img>
								<img
									src='images/express-js-javascript.svg'
									alt='express-js-javascript'
									id='express-js-javascript'
								></img>
								<img src='images/react.svg' alt='react' id='react'></img>
								<img
									src='images/node-nodejs.svg'
									alt='node-nodejs'
									id='node-nodejs'
								></img>
								<img
									src='images/html-html5.svg'
									alt='html-html5'
									id='html-html5'
								></img>
								<img
									src='images/css-css3.svg'
									alt='css-css3'
									id='css-css3'
								></img>
								<img
									src='images/material-ui-mui.svg'
									alt='material-ui-mui'
									id='material-ui-mui'
								></img>
								<img src='images/SASS.svg' alt='SASS' id='SASS'></img>
								<img
									src='images/ruby-lang-rails.svg'
									alt='ruby-lang-rails'
									id='ruby-lang-rails'
								></img>
								<img
									src='images/postgresql-psql.svg'
									alt='postgresql-psql'
									id='postgresql-psql'
								></img>
							</div>
							<div className='design-stack'>
								<img
									src='images/design-stack.svg'
									alt='design-stack'
									id='design-stack'
								></img>
								<div className='design-icons'>
									<img
										src='images/adobe-illustrator.svg'
										alt='adobe-illustrator'
										id='adobe-illustrator'
									></img>
									<img
										src='images/adobe-photoshop.svg'
										alt='adobe-photoshop'
										id='adobe-photoshop'
									></img>
									<img
										src='images/adobe-after-effects.svg'
										alt='adobe-after-effects'
										id='adobe-after-effects'
									></img>
									<img
										src='images/adobe-indesign.svg'
										alt='adobe-indesign'
										id='adobe-indesign'
									></img>
									<img src='images/figma.svg' alt='figma' id='figma'></img>
								</div>
							</div>
						</div>
					</>
				)}
				{stack === OPEN && (
					<>
						<section className='stack-title' onClick={e => setStack(CLOSED)}>
							<h1 className='gt open'>&gt;</h1>
							<h1>{stackString}</h1>
						</section>
						<div className='stack-alex fade-in'>
							<div className='dev-stack'>
								<img
									src='images/dev-stack.svg'
									alt='dev-stack'
									id='dev-stack'
								></img>
								<img
									src='images/express-js-javascript.svg'
									alt='express-js-javascript'
									id='express-js-javascript'
								></img>
								<img src='images/react.svg' alt='react' id='react'></img>
								<img
									src='images/node-nodejs.svg'
									alt='node-nodejs'
									id='node-nodejs'
								></img>
								<img
									src='images/html-html5.svg'
									alt='html-html5'
									id='html-html5'
								></img>
								<img
									src='images/css-css3.svg'
									alt='css-css3'
									id='css-css3'
								></img>
								<img
									src='images/material-ui-mui.svg'
									alt='material-ui-mui'
									id='material-ui-mui'
								></img>
								<img src='images/SASS.svg' alt='SASS' id='SASS'></img>
								<img
									src='images/ruby-lang-rails.svg'
									alt='ruby-lang-rails'
									id='ruby-lang-rails'
								></img>
								<img
									src='images/postgresql-psql.svg'
									alt='postgresql-psql'
									id='postgresql-psql'
								></img>
							</div>
							<div className='design-stack'>
								<img
									src='images/design-stack.svg'
									alt='design-stack'
									id='design-stack'
								></img>
								<div className='design-icons'>
									<img
										src='images/adobe-illustrator.svg'
										alt='adobe-illustrator'
										id='adobe-illustrator'
									></img>
									<img
										src='images/adobe-photoshop.svg'
										alt='adobe-photoshop'
										id='adobe-photoshop'
									></img>
									<img
										src='images/adobe-after-effects.svg'
										alt='adobe-after-effects'
										id='adobe-after-effects'
									></img>
									<img
										src='images/adobe-indesign.svg'
										alt='adobe-indesign'
										id='adobe-indesign'
									></img>
									<img src='images/figma.svg' alt='figma' id='figma'></img>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

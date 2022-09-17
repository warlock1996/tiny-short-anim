import React from 'react'
import ArrowDown from '../assets/icons/ArrowDown.svg'
import Button from '../components/Button.jsx'
import { ReactComponent as AnimationComponent } from '../assets/svgs/Animation.svg'

const bgStyles = {
	backgroundImage: "url('/imgs/bg-header.svg')",
	backgroundRepeat: 'no-repeat',
}

const HeroSection = () => {
	const arrowRef = React.useRef(null)
	const keyframes = [
		{
			transform: 'translateY(0)',
		},
		{
			transform: 'translateY(10px)',
		},
		{
			transform: 'translateY(0)',
		},
	]
	React.useEffect(() => {
		arrowRef.current.animate(keyframes, {
			duration: 1500,
			easing: 'ease-in-out',
			iterations: Infinity,
		})
	}, [])

	return (
		<React.Fragment>
			<section className='py-[50px] relative overflow-x-clip'>
				<div
					style={bgStyles}
					className='bg-bottom w-[1600px] h-[180%] top-[-400px] left-[-850px] sm:top-[-500px] sm:left-[-800px] lg:top-[0] md:left-[0] absolute -z-[1] '
				></div>
				<div className='px-10 xl:container xl:px-40 mx-auto grid grid-cols-2'>
					<div className='col-span-2 lg:col-span-1'>
						<h1 className='text-white text-[36px] font-[500] mb-7 leading-[1.2]'>
							Your web presence just got so much better
						</h1>
						<p className='text-white text-[18px] mb-7 leading-[1.5]'>
							Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an
							essential sales channel, and it has rules. You need it to survive in the jungle of business.
						</p>
						<div className='flex gap-2 justify-start'>
							<Button>work with us</Button>
							<Button outline>view our projects</Button>
						</div>
					</div>
					<div className='col-span-2 lg:col-span-1'>
						<div className='lg:absolute lg:w-[1000px] lg:right-[-160px] xl:w-[1200px] xl:height-[470px] xl:top-[-30px] xl:right-[-50px]'>
							<AnimationComponent />
						</div>
					</div>
				</div>
			</section>
			<div className='flex flex-col gap-2 text-[#7FB6B6] items-center justify-center uppercase lg:mt-40 mb-10 cursor-pointer '>
				<div>scroll down</div>
				<div ref={arrowRef}>
					<img src={ArrowDown} alt='arrow_down' />
				</div>
			</div>
		</React.Fragment>
	)
}

export default HeroSection

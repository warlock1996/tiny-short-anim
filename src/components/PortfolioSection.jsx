import React from 'react';
import Portfolio from './Portfolio'
import { ReactComponent as Wave } from '../assets/svgs/wave.svg'
import { ReactComponent as WaveBottom } from '../assets/svgs/wave-bottom.svg'

const PortfolioSection = () => {
    return (
			<section className='bg-dark py-40 px-10.5 overflow-hidden relative'>
				<Wave className='w-[2950px] h-[563px] absolute top-[-350px] left-[-170px]' />
				<div className='px-10 xl:container xl:px-40 mx-auto pt-20'>
					<Portfolio />
				</div>
				<WaveBottom className='w-[2950px] h-[563px] bottom-[-380px] left-[-900px] absolute' />
			</section>
		)
}
 
export default PortfolioSection;
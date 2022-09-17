import React from 'react'
import Button from './Button'
import ArrowRight from '../assets/icons/ArrowRight.svg'
import { useState } from 'react'

const PortfolioItem = (props) => {
	const [hidden, setHidden] = useState('hidden')

	return (
		<div
			className='col-span-12 2xl:col-span-6 mx-auto mb-14'
			onMouseEnter={() => setHidden('opacity-100')}
			onMouseLeave={() => setHidden('opacity-0')}
		>
			<div className='relative max-w-[550px] h-[300px] xl:w-[570px] xl:h-[426px] rounded-xl overflow-hidden mb-6 hover:cursor-pointer border border-[#D5E3E0]'>
				<div
					className={`absolute flex items-center justify-center w-full h-full top-0 left-0  bg-[#52b0a2b3] transition-[opacity]  duration-[400ms] ${hidden} `}
				>
					<Button
						className='bg-white text-[#6E8F8D] font-black hover:bg-white hover:text-primaryDarker border-none rounded-full'
						suffixIcon={ArrowRight}
					>
						view case study
					</Button>
				</div>
				<img src={props.image} className='w-full h-full' alt='img' />
			</div>
			<h1 className={`text-center text-[28px] mb-[6px] font-semibold ${hidden === '' ? 'text-[#52b0a2b3]' : null}`}>
				{props.title}
			</h1>
			<p className='text-center text-[17px]'>{props.type}</p>
		</div>
	)
}

export default PortfolioItem

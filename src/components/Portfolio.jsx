import React from 'react'
import Button from './Button'
import ArrowRight from '../assets/icons/ArrowRight.svg'
import PortfolioItem from './PortfolioItem'

const items = [
	{
		title: 'Vabaõhumuuseumi tee 77A',
		type: 'apartments',
		image: 'https://www.camo.ee/wp-content/uploads/2021/03/Frame-124-1140x850.jpg',
	},
	{
		title: 'Extery',
		type: 'Urban furniture',
		image: 'https://www.camo.ee/wp-content/uploads/2020/10/Frame-120-min-1140x726.png',
	},
	{
		title: 'Graspic',
		type: 'Family memories in one place!',
		image: 'https://www.camo.ee/wp-content/uploads/2021/02/3-6-1140x850.jpg',
	},
	{
		title: 'Printerirent',
		type: 'Copier and printer machine rental',
		image: 'https://www.camo.ee/wp-content/uploads/2019/08/Frame-1140x850.png',
	},
]
const Portfolio = (props) => {
	return (
		<div>
			<div className='text-center text-primaryDarker max-w-[480px] mx-auto mt-6 mb-[65px]'>
				<h1 className='text-[36px] font-bold mb-2'>Our portfolio</h1>
				<p className='text-[18px]'>
					User-friendly web pages are our thing. We’ve also helped some awesome businesses with branding and custom
					solutions.
				</p>
			</div>
			<div className='grid grid-cols-12'>
				{items.map((item, index) => (
					<PortfolioItem {...item} key={index}/>
				))}
			</div>

			<Button className='bg-white mx-auto w-[246px] border-none text-[#6E8F8D] shadow-[#2078780d] hover:bg-white hover:text-[#6E8F8D]'>
				View more case studies
			</Button>
		</div>
	)
}

export default Portfolio

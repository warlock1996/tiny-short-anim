import React from 'react'

import ArrowRight from '../assets/icons/ArrowRight.svg'
import UxIcon from '../assets/icons/UxIcon.svg'
import WebshopIcon from '../assets/icons/WebshopIcon.svg'
import WebsiteIcon from '../assets/icons/WebsiteIcon.svg'
import CustomIcon from '../assets/icons/CustomIcon.svg'
import PlayIcon from '../assets/icons/PlayIcon.svg'

const list = [
	{
		title: 'Design and UI/UX',
		description:
			"Your website has three (!) seconds to make a lasting impression. We all know first impressions are the ones that count. So, if the visitor isn’t engaged by then, you’ve lost them. Straight to your competitor's site.",
		icon: UxIcon,
	},
	{
		title: 'Web design and development',
		description:
			'Your website has to look delightful to the eye. It must be handsome. It’s your virtual business card and your sales channel.',
		icon: WebsiteIcon,
	},
	{
		title: 'Custom solutions',
		description:
			'You’re special, and so is your business. You need special features (an interactive order form, ad portal or something unique) for your site.',
		icon: CustomIcon,
	},
	{
		title: 'Webshops',
		description:
			'Open 24/7, your products or services only one search away from billions of people. When done right, a webshop gives you, quite literally, an opportunity to conquer the world.',
		icon: WebshopIcon,
	},
	{
		title: 'Video animations ads',
		description:
			'A video is the thing of today and tomorrow. It is, without a doubt, the most popular media form: it’s used in entertainment, social media, and marketing. A video will help you step up your game.',
		icon: PlayIcon,
	},
]

const SkillList = (props) => {
	return (
		<ul className='list-none p-0 m-0'>
			{list.map((listitem, index) => (
				<li 
                className='flex flex-col md:flex-row gap-8 items-center md:items-start justify-start mb-8'
                key={index}
                >
					<div className=''>
						<img className='max-w-[150px]' src={listitem.icon} alt='' />
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='text-[black] hover:text-[#52B0A2] text-[20px] font-black uppercase leading-[1.2]'>
							{listitem.title}
						</h1>
						<p className='text-primaryDarker text-[18px] leading-[1.5]'>{listitem.description}</p>
						<div className='flex gap-2 text-[17px]'>
							Read more <img src={ArrowRight} alt='ArrowRight' />
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

export default SkillList

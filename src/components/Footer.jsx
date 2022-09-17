import React from 'react'
import Button from './Button.jsx'
import { ReactComponent as FooterWave } from '../assets/svgs/footer-wave.svg'
import { ReactComponent as LogoFooter } from '../assets/svgs/logo-footer.svg'
import { ReactComponent as DribbleIcon } from '../assets/svgs/dribble.svg'
import { ReactComponent as InstagramIcon } from '../assets/svgs/instagram.svg'
import { ReactComponent as FacebookIcon } from '../assets/svgs/facebook.svg'

const Footer = () => {
	return (
		<div className='py-20 bg-dark relative overflow-hidden'>
			<FooterWave className='absolute left-[-406px] top-[-403px] w-[2950px] h-[563px]' />
			<div className='px-2 xl:container xl:px-40 mx-auto'>
				<div
					className='relative bg-white p-6 md:py-16 md:px-16 rounded shadow shadow-[#0c383808]  md:bg-[url("https://www.camo.ee/wp-content/themes/camo/img/footer-icon.svg")] 
					bg-no-repeat bg-right mb-[122px]'
				>
					<h1 className='font-bold text-left text-[36px] md:w-[65%] mb-7 text-primaryDarker leading-[1.2]'>
						Need a website or a webshop but don't have a clear vision?
					</h1>
					<p className='text-primaryDarker text-left text-[18px] md:w-[75%]  mb-12'>
						No worries, that’s fine. We are excellent at giving advice, too. Let’s join forces and create an engaging
						concept that aligns with your business needs. Let’s make you seen and heard.
					</p>
					<Button outline className='bg-white border-[#EAEEEE] border-2 text-[#6E8F8D] hover:bg-primary hover:text-white'>
						Start a new project
					</Button>
				</div>
				<div className='flex justify-center mb-[90px]'>
					<LogoFooter className='w-[160px] h-[28px]' />
				</div>
				<div className='flex justify-between items-baseline pb-10 text-[14px]'>
					<p className='text-[#71908C]'>
						2020 © Codelab OÜ
						<u className='ml-2 text-[#52B0A2] hover:no-underline cursor-pointer'>Privacy Policy </u>
					</p>
					<div className='flex gap-8 items-center justify-between'>
						<DribbleIcon className='fill-[#8FAEAC]' />
						<InstagramIcon className='fill-[#8FAEAC]' />
						<FacebookIcon className='fill-[#8FAEAC]' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

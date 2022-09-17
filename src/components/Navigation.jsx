import React from 'react'
import Logo from '../assets/icons/logo.jsx'
import MessageIcon from '../assets/icons/message.svg'
import { ReactComponent as MessageIconComponent } from '../assets/icons/message.svg'
import Menu from '../components/Menu'
import Button from '../components/Button.jsx'

const Navigtion = () => {
	return (
		<div className='bg-primaryDarker sticky top-0'>
			<div className='mx-auto px-10 xl:container xl:px-40'>
				<nav className='hidden md:flex items-center justify-between py-10'>
					<div>
						<Logo fill='white' />
					</div>

					<div>
						<ul className='list-none flex gap-5 font-normal text-[16px] p-0 m-0'>
							<li className='uppercase text-white '>services</li>
							<li className='uppercase text-white '>about us</li>
							<li className='uppercase text-white '>projects</li>
							<li className='uppercase text-white '>blog</li>
						</ul>
					</div>

					<div>
						<Button icon={MessageIcon} outline>
							get in touch
						</Button>
					</div>
				</nav>
				<nav className='md:hidden flex items-center justify-between py-10'>
					<Menu />
					<Logo fill='white' className='w-[100px] h-[12px]' />
					<MessageIconComponent className='w-[23px] h-[19px]' />
				</nav>
			</div>
		</div>
	)
}

export default Navigtion

import React from 'react'
import Logo from '../assets/icons/logo.jsx'
import MessageIcon from '../assets/icons/message.svg'
import { ReactComponent as MessageIconComponent } from '../assets/icons/message.svg'
import Menu from '../components/Menu'
import Button from '../components/Button.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		let timeout = null
		window.addEventListener('scroll', (event) => {
			timeout = setTimeout(() => {
				clearTimeout(timeout)
				if (window.scrollY > 200) setHasScrolled(true)
				if (window.scrollY < 200) setHasScrolled(false)
			}, 400)
		})
	}, [])
	return (
		<div
			className={`transition-colors duration-[500ms] bg-primaryDarker text-white z-[10] w-full ${
				hasScrolled ? '!bg-white shadow fixed text-primaryDarker' : ''
			}`}
		>
			<div className='mx-auto px-10 xl:container xl:px-40'>
				<nav className='hidden md:flex items-center justify-between py-10'>
					<div>
						<Logo fill={hasScrolled ? '#0f4848' : 'white'} />
					</div>

					<div>
						<ul className='list-none flex gap-5 font-normal text-[16px] p-0 m-0 uppercase cursor-pointer'>
							<li className={`text-${hasScrolled ? 'bg-primaryDarker' : 'white'}`}>services</li>
							<li className={`text-${hasScrolled ? 'bg-primaryDarker' : 'white'}`}>about us</li>
							<li className={`text-${hasScrolled ? 'bg-primaryDarker' : 'white'}`}>projects</li>
							<li className={`text-${hasScrolled ? 'bg-primaryDarker' : 'white'}`}>blog</li>
						</ul>
					</div>

					<div>
						<Button icon={MessageIcon} outline={!hasScrolled}>
							get in touch
						</Button>
					</div>
				</nav>
				<nav className='md:hidden flex items-center justify-between py-10'>
					<Menu fill={hasScrolled ? 'bg-[#0f4848]' : 'bg-white'} />
					<Logo fill={hasScrolled ? '#0f4848' : 'white'} className='w-[100px] h-[12px]' />
					<MessageIconComponent fill={hasScrolled ? '#0f4848' : '#fff'} className='w-[23px] h-[19px]' />
				</nav>
			</div>
		</div>
	)
}

export default Navigation

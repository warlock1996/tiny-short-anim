import React from 'react'

import "./Button.css"
const Button = (props) => {
	let base =
		'flex gap-2 relative text-center items-center justify-center py-3.5 px-8 text-[14px] font-bold rounded uppercase border-2 cursor-pointer '
	const filled = 'bg-primary hover:bg-[#2D9494] text-white border-transparent'
	const outline = 'bg-transparent border-2 border-primary hover:border-[#52B0A2] text-white custom-transition z-[2]'
	
	// const buttonRef = React.useRef(null)

	if (props.outline) {
		base = `${base} ${outline}`
	} else {
		base = `${base} ${filled}`
	}

	base = `${base} ${props.className}`
	return (
		<button className={base}>
			<div className='absolute block left-0 bg-[#52B0A2] h-full transition-bg z-[1]'></div>
			{props.icon ? <img className='icon relative z-[2]' src={props.icon} alt='icon' /> : null}
			<span className='text-center relative z-[2]'>{props.children}</span>

			{props.suffixIcon ? <img className='suffixIcon relative z-[2]' src={props.suffixIcon} alt='suffixIcon' /> : null}
		</button>
	)
}

export default Button

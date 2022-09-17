import React from 'react'

const Menu = (props) => {
	return (
		<div>
			<div className='relative inline-block w-[35px] h-[20px] px-[5px] py-0'>
				<div
					className={`absolute block ${props.fill} w-[25px] h-[3px] rounded-[100px] after:content-[" "] after:block after:top-[16px] after:${props.fill} after:absolute after:w-[25px] after:h-[3px] after:rounded-[100px] after:${props.fill} before:w-[20px] before:absolute before:h-[3px] before:rounded-[100] before:${props.fill} before:content-[" "] before:block before:top-[8px]`}
				></div>
			</div>
		</div>
	)
}
export default Menu

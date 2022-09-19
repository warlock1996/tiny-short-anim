import React from 'react'

const Menu = (props) => {
	return (
		<div>
			<div className='relative inline-block w-[35px] h-[20px] px-[5px] py-0'>
				{!props.mobile ? (
					<div className="absolute block bg-white  w-[25px] h-[3px] rounded-[100px] after:content-[' '] after:block after:top-[16px] after:bg-white after:absolute after:w-[25px] after:h-[3px] after:rounded-[100px] after:bg-white before:w-[20px] before:absolute before:h-[3px] before:rounded-[100] before:bg-white before:content-[' '] before:block before:top-[8px]"></div>
				) : (
					<div className="absolute block bg-[#0f4848]  w-[25px] h-[3px] rounded-[100px] after:content-[' '] after:block after:top-[16px] after:bg-[#0f4848] after:absolute after:w-[25px] after:h-[3px] after:rounded-[100px] after:bg-[#0f4848] before:w-[20px] before:absolute before:h-[3px] before:rounded-[100] before:bg-[#0f4848] before:content-[' '] before:block before:top-[8px]"></div>
				)}
			</div>
		</div>
	)
}
export default Menu

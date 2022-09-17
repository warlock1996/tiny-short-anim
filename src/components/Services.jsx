import React from 'react';
import Button from './Button.jsx'
import SkillList from './SkillList.jsx'

const Services = () => {
    return (
			<section className='px-10 xl:container xl:px-40 mx-auto pt-10 grid grid-cols-2 lg:max-h-[500px] overflow-y-scroll no-scrollbar'>
				<div className='col-span-2 lg:col-span-1 lg:mb-0 mb-12'>
					<div className='bg-dark w-full lg:w-[470px]  py-[56px] px-[55px] sticky top-0'>
						<h1 className='text-black text-[30px] font-semibold mb-[49px]'>What we’re great at</h1>
						<p className='font-[300] text-primaryDarker  mb-[45px]'>
							Fourteen years and 400+ finished web projects have gifted us a unique experience on how to create
							something that is easy to use, looks great and earns a profit for your company.
						</p>
						<Button light className='w-full h-[76px] text-[17px] py-[28px] px-[15px] border-none leading-[1.2]'>
							Explore full services
						</Button>
					</div>
				</div>
				<div className='col-span-2 lg:col-span-1 '>
					<SkillList />
				</div>
			</section>
		)
}
 
export default Services;
import React from 'react'
import { ReactComponent as Heart } from '../assets/icons/heart.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './swiper-custom.css'

const slideData = [
	{
		img: 'https://www.camo.ee/wp-content/uploads/2021/06/extery_logo_horiz_3.gif',
		description: `Kindness and transparency are the main keywords that characterize Endrik. 
		Endrik comes up with fresh ideas based on his own experience while also providing constructive advice to reach the best possible solutions. His work is high quality and written in plain language so it’s easy to understand.    He’s always up to speed with every trend in the industry. We were very satisfied with the result!`,
	},
	{
		img: 'https://www.camo.ee/wp-content/uploads/2019/05/borglogo2.svg',
		description: `
We like working with Camo. They did our current webpage and are working on the new one as we speak. We’re 100% certain it will be as impressive as the current one. Camo provides simplicity and a modern touch, and we appreciate it highly.`,
	},
	{
		img: 'https://www.camo.ee/wp-content/uploads/2019/05/intcenta-logo-1.svg',
		description: `
Collaboration with Camo means fast and flexible solutions. Camos design language is modern yet dashing. They always think along with the customer to find the best solution, i.e., cost-effective and bearing in mind your desires. If need be, Camo works round the clock. We appreciate it a lot.`,
	},
]

const ReviewsSection = () => {
	return (
		<section className='py-20'>
			<div className='text-center text-primaryDarker max-w-[480px] mx-auto mt-6 mb-[65px]'>
				<h1 className='text-[36px] font-bold mb-[55px] flex gap-2 items-center justify-center'>
					Our clients like us <Heart />
				</h1>
				<p className='text-[18px] font-semibold'>Thank you for your trust! We say it’s a thing of synergy.</p>
			</div>

			<Swiper
				modules={[Pagination]}
				
				loop={true}
				pagination={{
					clickable: true,
					type: 'bullets',
					bulletClass: 'swiper-pagination-bullet',
					bulletActiveClass: 'swiper-pagination-bullet-active',
				}}
				breakpoints={{
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					950: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				}}
			>
				{slideData.map((slide, index) => (
					<SwiperSlide key={index} className='max-w-[870px] swiper-slide'>
						<div className='p-4 md:p-16 bg-white border border-[#EFF9F8] rounded'>
							<div className='flex justify-between items-center h-[95px] mb-10 p-1 bg-[#EFF9F8] rounded-[30px] pr-[40px]'>
								<div className='flex justify-center items-center w-[200px] h-[84px] bg-white rounded-[30px] text-black'>
									<img className='w-[90px] h-[auto]' src={slide.img} alt='slide-img' />
								</div>
								<a className='text-[#52B0A2] underline cursor-pointer'>View project</a>
							</div>
							<p className='text-black leading-[28px] text-[17px] text-[#1E5454]'>{slide.description}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default ReviewsSection

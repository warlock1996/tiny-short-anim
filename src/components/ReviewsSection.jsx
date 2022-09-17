import React from 'react'
import { ReactComponent as Heart } from '../assets/icons/heart.svg'

const ReviewsSection = () => {
	return (
		<section className='py-20'>
			<div className='text-center text-primaryDarker max-w-[480px] mx-auto mt-6 mb-[65px]'>
				<h1 className='text-[36px] font-bold mb-[55px] flex gap-2 items-center justify-center'>
					Our clients like us <Heart />
				</h1>
				<p className='text-[18px] font-semibold'>Thank you for your trust! We say it’s a thing of synergy.</p>
			</div>
		</section>
	)
}

export default ReviewsSection

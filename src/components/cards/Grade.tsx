import { Button, Carousel } from 'antd'
import { useRef } from 'react'

import img from '../../assets/images/schedule.png'

import { NextSvg, PrevSvg, scheduleData } from './const'

export const Grade = () => {
	const slider = useRef() as React.MutableRefObject<any>
	const scheduleCourses = scheduleData.map((item, index) => (
		<div key={index} className="flex flex-col items-start">
			<div className="text-base flex gap-x-1">
				<span className="font-bold">subject:</span>
				<span>{item.subject}</span>
			</div>
			<div className="text-base flex gap-x-1">
				<span className="font-bold">date:</span>
				<span>{item.data}</span>
			</div>
			<div className="text-base flex gap-x-1">
				<span className="font-bold">average score:</span>
				<span>{item.mark}</span>
			</div>
		</div>
	))
	return (
		<div className="px-[80px] mt-[40px]">
			<div className="font-semibold text-xl text-start">
				Academic performance
			</div>
			<div>
				<div
					onClick={() => slider.current.prev()}
					className="absolute cursor-pointer left-[32px] top-[147px]"
				>
					<PrevSvg />
				</div>
				<Carousel
					className="h-[80px] pr-[125px] mt-[31px] text-start"
					ref={slider}
				>
					{scheduleCourses}
				</Carousel>
				<div
					onClick={() => slider.current.next()}
					className="absolute cursor-pointer top-[147px] right-[32px]"
				>
					<NextSvg />
				</div>
			</div>
			<div className="min-w-[125px] min-h-[125px] absolute right-[70px] top-[40px] max-h-[125px] bg-opacity-80 bg-[#3E89F9] rounded-full">
				<img className="rounded-b-full -mt-[15px]" src={img} alt="" />
			</div>
			<div className="flex absolute justify-between w-full items-center bottom-[40px]">
				<Button className="rounded-full w-[200px]  h-[50px] text-base font-semibold ">
					view
				</Button>
			</div>
		</div>
	)
}

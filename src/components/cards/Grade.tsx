import { Button, Carousel } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

// import { useNavigate } from 'react-router-dom'
import img from '../../assets/images/grade.png'
import { useAppSelector } from '../../store'
import { getStudPerformance } from '../../store/creators/MainCreators'
import { addPerformance } from '../../store/reducers/FormReducers/ServicesReducer'

import { NextSvg, PrevSvg } from './const'

export const Grade = () => {
	const dispatch = useDispatch()
	const studMarks = useAppSelector(state => state.Services.performance)
	// const navigate = useNavigate()
	const slider = useRef() as React.MutableRefObject<any>
	const scheduleCourses = !studMarks ? (
		<></>
	) : (
		studMarks.journal.map((element, index) => (
			<div key={index} className="flex flex-col">
				<div className="text-base flex gap-x-1">
					<span className="font-bold">Subject:</span>
					<span>{element.subject_name}</span>
				</div>
				<div className="text-base flex gap-x-1">
					<span className="font-bold">Exam time:</span>
					<span>{element.pass_date}</span>
				</div>
				<div className="text-base flex gap-x-1 leading-4">
					<span className="font-bold">Average score:</span>
					<span>{element.total_points}</span>
				</div>
			</div>
		))
	)

	const getPerformance = async () => {
		const response = await getStudPerformance(dispatch)
		if (!response) console.log('403')
		else dispatch(addPerformance(response))
	}

	useEffect(() => {
		if (!studMarks) getPerformance()
		else console.log(studMarks)
	}, [studMarks])

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
					className="mt-[20px] text-start min-w-[100px] min-h-[60px]"
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
			<div className="min-w-[125px] min-h-[125px] absolute right-[20px] top-[40px] max-h-[125px] bg-opacity-80 bg-[#3E89F9] rounded-full flex justify-center items-center">
				<img className="mb-7" src={img} alt="" />
			</div>
			<div className="flex absolute justify-between w-full items-center bottom-[40px]">
				<Button
					className="rounded-full border-black  w-[200px] h-[50px] text-base font-semibold mt-[40px]"
					onClick={() => console.log('redirect')}
				>
					View
				</Button>
			</div>
		</div>
	)
}

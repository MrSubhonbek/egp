import { Button, Carousel } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/grade.png'
import { useAppSelector } from '../../store'
import { getStudPerformance } from '../../store/creators/MainCreators'
import { addPerformance } from '../../store/reducers/FormReducers/ServicesReducer'

import { NextSvg, PrevSvg } from './const'

export const Grade = () => {
	const dispatch = useDispatch()
	const studMarks = useAppSelector(state => state.Services.performance)
	const navigate = useNavigate()
	const slider = useRef() as React.MutableRefObject<any>
	const scheduleCourses = !studMarks ? (
		<></>
	) : (
		studMarks.journal.map((element, index) => (
			<div key={index} className="flex flex-col">
				<div
					className="text-base"
					style={{ shapeOutside: 'polygon(0 0, 100% 0, 100% 100%)' }}
				>
					<span className="font-bold h-min mr-2">Subject:</span>
					{element.subject_name}
				</div>
				<div
					className="text-base"
					style={{ shapeOutside: 'polygon(0 0, 100% 0, 100% 100%)' }}
				>
					<span className="font-bold mr-2">Exam time:</span>
					{element.pass_date}
				</div>
				<div
					className="text-base"
					style={{ shapeOutside: 'polygon(0 0, 100% 0, 100% 100%)' }}
				>
					<span className="font-bold mr-2">Average score:</span>
					{element.total_points}
				</div>
			</div>
		))
	)

	const getPerformance = async () => {
		const response = await getStudPerformance(dispatch)
		if (response === 403) navigate('/')
		if (typeof response !== 'number') dispatch(addPerformance(response))
	}

	useEffect(() => {
		if (!studMarks) getPerformance()
	}, [studMarks])

	return (
		<div className="px-[60px] py-[40px] h-full">
			<div className="font-semibold relative text-xl text-start flex z-10">
				Academic performance
			</div>
			<div>
				<div
					onClick={() => slider.current.prev()}
					className="absolute cursor-pointer left-[20px] top-[147px] flex z-10"
				>
					<PrevSvg />
				</div>
				<Carousel
					className="mt-[20px] text-start max-w-[23rem] lg:max-w-[15rem] min-h-[100px] flex z-10"
					ref={slider}
				>
					{scheduleCourses}
				</Carousel>
				<div
					onClick={() => slider.current.next()}
					className="absolute cursor-pointer top-[147px] right-[20px] flex z-10"
				>
					<NextSvg />
				</div>
			</div>
			<div className="min-w-[115px] min-h-[115px] absolute right-[80px] top-[40px] max-h-[115px] bg-opacity-80 bg-[#3E89F9] rounded-full hidden justify-center items-center lg:flex">
				<img className="mb-9" src={img} alt="" />
			</div>
			<div className="text-start absolute left-[60px] bottom-[40px]">
				<Button
					className="rounded-full border-black w-[200px] h-[50px] text-base font-semibold"
					onClick={() => console.log('redirect')}
				>
					View
				</Button>
			</div>
		</div>
	)
}

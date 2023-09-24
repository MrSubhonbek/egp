import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/image15.png'
import { useAppSelector } from '../../store'
import { getSchedule } from '../../store/creators/MainCreators'
import { addSchedule } from '../../store/reducers/FormReducers/ServicesReducer'

type week =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'

export const Schedule = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [activeButton, changeActive] = useState<week>('monday')
	const scheduleStorage = useAppSelector(state => state.Services.schedule)

	const getPlan = async () => {
		const response = await getSchedule(dispatch)
		if (response === 403) navigate('/')
		if (typeof response !== 'number') dispatch(addSchedule(response))
	}

	const setActiveButton = (buttonName: week) => {
		if (activeButton !== buttonName) changeActive(buttonName)
	}

	useEffect(() => {
		if (!scheduleStorage) getPlan()
	}, [scheduleStorage])

	const disableStyle = {
		color: 'white',
		border: 0,
		backgroundColor: 'inherit'
	}
	const activeStyles = {
		color: '#004EC2',
		border: 'solid 1px #004EC2',
		backgroundColor: 'white'
	}
	return (
		<div
			className="p-10 flex relative w-full h-full rounded-[1vw] text-white"
			style={{
				background: 'linear-gradient(89.94deg, #71AAFF 12.16%, #3D7AD5 104.42%)'
			}}
		>
			<div className="flex flex-col h-full justify-between w-1/2">
				<span className="bg-none text-4xl font-bold text-start">Schedule</span>
				<div className="flex w-full flex-wrap gap-1">
					<Button
						style={activeButton === 'monday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('monday')}
						className="text-lg font-bold h-[40px]"
					>
						Mon
					</Button>
					<Button
						style={activeButton === 'tuesday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('tuesday')}
						className="text-lg font-bold h-[40px]"
					>
						Tue
					</Button>
					<Button
						style={activeButton === 'wednesday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('wednesday')}
						className="text-lg font-bold h-[40px]"
					>
						Wed
					</Button>
					<Button
						style={activeButton === 'thursday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('thursday')}
						className="text-lg font-bold h-[40px]"
					>
						Thu
					</Button>
					<Button
						style={activeButton === 'friday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('friday')}
						className="text-lg font-bold h-[40px]"
					>
						Fri
					</Button>
					<Button
						style={activeButton === 'saturday' ? activeStyles : disableStyle}
						onClick={() => setActiveButton('saturday')}
						className="text-lg font-bold h-[40px]"
					>
						Sat
					</Button>
				</div>
			</div>
			<hr className="h-full w-[2px] my-auto bg-white mx-3 border-none" />
			<div className="flex flex-col justify-start min-w-[300px] max-w-[300px] max-h-full overflow-y-auto">
				{scheduleStorage &&
					scheduleStorage[activeButton].map((el, index) => (
						<div className="flex w-full gap-x-[40px] mb-[20px]" key={index}>
							<span className="text-start min-w-[100px]">{el.time}</span>
							<span className="font-bold text-start">{el.name}</span>
						</div>
					))}
			</div>
			<div className="max-lg:hidden w-full relative flex items-center justify-center ">
				<div className="bg-white rounded-[50%] min-w-[180px] max-w-[180px] max-h-[180px] min-h-[180px] absolute"></div>
				<img
					src={img}
					alt=""
					width={'240px'}
					height={'210px'}
					className="absolute bottom-[40px]"
				/>
			</div>
			<div
				className="max-xl:hidden relative w-1/6 flex justify-center items-center"
				onClick={() => navigate('/services/schedule')}
			>
				<svg
					width="87"
					height="40"
					viewBox="0 0 87 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="absolute cursor-pointer hover:scale-x-125 w-[100px] min-h-[40px] hover:w-[120px] hover:h-[60px] transition-all duration-200"
				>
					<path
						d="M1 20.4528C1 20.4528 52.8054 20.4528 86 20.4528M86 20.4528C80.4447 12.856 71.7748 1 71.7748 1M86 20.4528C80.4447 27.6959 71.7748 39 71.7748 39"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	)
}

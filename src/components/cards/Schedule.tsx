import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { TypeSchedule } from '../../api/types'
import img from '../../assets/images/image15.png'
import { getSchedule } from '../../store/creators/MainCreators'

type week =
	| 'monday'
	| 'tuesday'
	| 'wednesday'
	| 'thursday'
	| 'friday'
	| 'saturday'

export const Schedule = () => {
	const dispatch = useDispatch()
	const [activeButton, changeActive] = useState<week>('monday')
	const [schedule, changeSchedule] = useState<TypeSchedule | null>()

	const getPlan = async () => {
		const response = await getSchedule(dispatch)
		if (!response) console.log(404)
		else changeSchedule(response)
	}

	const setActiveButton = (buttonName: week) => {
		if (activeButton !== buttonName) changeActive(buttonName)
	}

	useEffect(() => {
		if (!schedule) getPlan()
	}, [schedule])

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
			<div className="flex flex-col h-full justify-between">
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
			<div className="flex flex-col justify-between min-w-[300px] max-w-[300px]">
				{schedule &&
					schedule[activeButton].map((el, index) => (
						<div className="flex gap-5 w-full" key={index}>
							<span className="text-start min-w-[100px]">{el.time}</span>
							<span className="font-bold text-start">{el.name}</span>
						</div>
					))}
			</div>
			<div className="min-w-[190px] max-w-[190px] min-h-[190px] max-h-[190px] bg-white flex items-center justify-center absolute right-[20px] top-0 bottom-0 my-auto rounded-[50%]">
				<img src={img} alt="" width={'240px'} height={'210px'} />
			</div>
		</div>
	)
}

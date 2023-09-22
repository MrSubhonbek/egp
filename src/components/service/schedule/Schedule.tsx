import { Radio, RadioChangeEvent, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { TypeSchedule } from '../../../api/types'
import { getSchedule } from '../../../store/creators/MainCreators'

import './StyleSchedule.scss'

interface DataType {
	name: string
	time: string
	teacher: string
	teacherId: number
	building: string
	room: string
	type: string
}
const columns: ColumnsType<DataType> = [
	{
		title: '',
		dataIndex: 'type',
		key: 'type',
		render: item => {
			return {
				props: {
					style: {
						background: item === 'black' ? 'red' : '#B3B3B3',
						padding: '0 6.5px 0 6.5px'
					}
				},
				children: <></>
			}
		}
	},
	{
		title: 'Time',
		dataIndex: 'time',
		key: 'time',
		render: item => <p className="text-base whitespace-nowrap">{item}</p>
	},
	{
		title: 'Subject',
		dataIndex: 'name',
		key: 'name',
		render: item => <p className="text-base">{item}</p>
	},
	{
		title: 'Teacher',
		dataIndex: 'teacher',
		key: 'teacher',
		render: item => <p className="text-base">{item}</p>
	},
	{
		title: 'Department',
		key: 'building',
		dataIndex: 'building',
		render: item => <p className="text-base">{item}</p>
	},
	{
		title: 'Classroom',
		key: 'room',
		dataIndex: 'room',
		render: item => <p className="text-base">{item}</p>
	}
]
export const Schedule = () => {
	const dispatch = useDispatch()
	const [schedule, setSchedule] = useState<TypeSchedule | null>()

	const getPlan = async () => {
		const response = await getSchedule(dispatch)
		if (!response) console.log(404)
		else setSchedule(response)
	}

	const [data, setData] = useState<DataType[] | undefined>()

	useEffect(() => {
		if (!schedule) getPlan()
		else setData(schedule.monday)
	}, [schedule])

	if (!schedule) return null

	const onChange = (e: RadioChangeEvent) => {
		//@ts-ignore
		setData(schedule[e.target.value])
	}
	return (
		<div className="mt-14 mx-14 radio">
			<div className="mb-14 text-[28px]">My schedule</div>
			<Radio.Group
				onChange={onChange}
				defaultValue="monday"
				buttonStyle="solid"
				className="flex gap-[10px] h-9"
			>
				<Radio.Button
					className="rounded-full bg-transparent h-full flex items-center  text-base"
					value="monday"
				>
					Monday
				</Radio.Button>
				<Radio.Button
					className="rounded-full h-full flex items-center text-base bg-transparent"
					value="tuesday"
				>
					Tuesday
				</Radio.Button>
				<Radio.Button
					className="rounded-full h-full flex items-center text-base bg-transparent"
					value="wednesday"
				>
					Wednesday
				</Radio.Button>
				<Radio.Button
					className="rounded-full h-full flex items-center text-base bg-transparent"
					value="thursday"
				>
					Thursday
				</Radio.Button>
				<Radio.Button
					className="rounded-full h-full flex items-center text-base bg-transparent"
					value="friday"
				>
					Friday
				</Radio.Button>
				<Radio.Button
					className="rounded-full h-full flex items-center text-base bg-transparent"
					value="saturday"
				>
					Saturday
				</Radio.Button>
			</Radio.Group>
			<div className="my-10 gap-5 flex">
				<Table
					columns={columns}
					dataSource={data}
					pagination={false}
					className="max-w-[1050px] w-full drop-shadow-lg shadow-[#d4e3f1] rounded-none"
				/>
				<div className="flex flex-col gap-6 text-sm">
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#A7FAFF]" />
						Streaming lecture
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#3A92E3]" />
						Lecture
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#FFE24C]" />
						Seminar
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#59C348]" />
						Laboratory lesson
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#E93A3A]" />
						Facultative
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#844EC9]" />
						Practice
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#FF9838]" />
						Testing
					</div>
					<div className="flex items-center gap-2">
						<div className="min-w-[11px] max-w-[11px] min-h-[11px] rounded-full bg-[#B3B3B3]" />
						The type of discipline is not specified
					</div>
				</div>
			</div>
		</div>
	)
}

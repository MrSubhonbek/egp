import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Exam } from '../../../api/types'
import { useAppSelector } from '../../../store'
import { getStudExamsSchedule } from '../../../store/creators/MainCreators'
import { addExamsSchedule } from '../../../store/reducers/FormReducers/ServicesReducer'

type DataType = Omit<Exam, 'employee_id'> & {
	key: number
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Time',
		dataIndex: 'time_note',
		key: 'time_note',
		align: 'center'
	},
	{
		title: 'Address',
		dataIndex: 'building_name',
		key: 'building_name',
		align: 'center'
	},
	{
		title: 'Lecture',
		dataIndex: 'room_num',
		key: 'room_num',
		align: 'center'
	},
	{
		title: 'Subject',
		key: 'name',
		dataIndex: 'name',
		align: 'center'
	},
	{
		title: 'Teacher',
		key: 'employee_name',
		dataIndex: 'employee_name',
		align: 'center'
	}
]

export const Session = () => {
	const examSchedule = useAppSelector(state => state.Services.examsSchedule)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [data, changeData] = useState<DataType[]>([])

	const getExams = async () => {
		const response = await getStudExamsSchedule(dispatch)
		if (response === 403) navigate('/')
		if (typeof response !== 'number') dispatch(addExamsSchedule(response))
	}

	useEffect(() => {
		if (!examSchedule) getExams()
		else
			changeData(
				examSchedule.map((el, index) => {
					return {
						...el,
						key: index
					}
				})
			)
	}, [examSchedule])

	return (
		<div>
			<div className="text-black text-3xl font-normal leading-7">
				Session schedule
			</div>
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				className="drop-shadow-lg mt-[50px] shadow-[#d4e3f1] rounded-none max-w-[1300px]"
				loading={!examSchedule ? true : false}
			/>
		</div>
	)
}

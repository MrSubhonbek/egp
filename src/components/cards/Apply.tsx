import {
	CheckOutlined,
	CloseOutlined,
	LoadingOutlined
} from '@ant-design/icons'
import { Button, Spin } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/avatar.png'
import { getAdmission } from '../../store/creators/MainCreators'

import Styles from './Styles.module.scss'

export const Apply = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [requestStatus, changeStatus] = useState<
		'loading' | 'error' | 'success' | 'none'
	>('none')

	const request = async () => {
		changeStatus(() => 'loading')
		const response = await getAdmission(dispatch)
		if (response === 403) navigate('/')
		else {
			if (typeof response !== 'number') {
				window.open(response.link, '_blank')
				changeStatus(() => 'success')
			}
			if (response === 404) changeStatus(() => 'error')

			setTimeout(() => {
				changeStatus(() => 'none')
			}, 0)
		}
	}
	return (
		<div
			className="rounded-[1vw] w-full px-[54px] py-[75px] flex h-full overflow-y-auto"
			style={{
				background: 'linear-gradient(89.94deg, #71AAFF 12.16%, #3D7AD5 104.42%)'
			}}
		>
			<div className="text-4xl max-sm:text-3xl text-start text-white w-full font-extrabold flex flex-col justify-between">
				Admission to university
				<Button
					onClick={() => request()}
					className={clsx(
						Styles.ApplyButtonCustom,
						requestStatus === 'error' && 'bg-red-500',
						requestStatus === 'success' && 'bg-green-500',
						requestStatus === 'none' && 'bg-none'
					)}
				>
					{requestStatus === 'none' && <>Apply</>}
					{requestStatus === 'loading' && (
						<>
							<Spin
								indicator={<LoadingOutlined className="text-white mr-2" spin />}
							/>
							Loading...
						</>
					)}
					{requestStatus === 'error' && (
						<>
							<CloseOutlined className="text-white mr-2" />
							Error
						</>
					)}
					{requestStatus === 'success' && (
						<>
							<CheckOutlined className="text-white mr-2" />
							Redirection
						</>
					)}
				</Button>
			</div>
			<div className="max-xl:hidden">
				<img
					className="rounded-full absolute right-[200px] -top-[130px]"
					src={img}
					alt="avatar"
				/>
			</div>
		</div>
	)
}

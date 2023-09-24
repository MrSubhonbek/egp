import { Button } from 'antd'
import { Cookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/avatar.png'
import { getAdmission } from '../../store/creators/MainCreators'

export const Apply = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const cookie = new Cookies()
	const disableStyle = {
		color: '#004EC2',
		border: '1px solid #004EC2',
		backgroundColor: 'white'
	}

	const request = async () => {
		const response = await getAdmission(dispatch)

		if (typeof response !== 'number') {
			cookie.set('s_id', response.session, { domain: 'kpfu.ru' })
			cookie.set('s_abit_id', response.session, { domain: 'kpfu.ru' })
			window.open(response.link, '_blank')
		}
		if (response === 403) navigate('/')
	}
	return (
		<div
			className="rounded-[1vw] w-full p-10 flex h-full overflow-y-auto"
			style={{
				background: 'linear-gradient(89.94deg, #71AAFF 12.16%, #3D7AD5 104.42%)'
			}}
		>
			<div className="max-w-[53vw] max-2xl:max-w-[40vw] max-xl:max-w-full ">
				<div className="text-4xl  text-white w-fit font-extrabold  mt-32 flex flex-col">
					Admission to university
					<Button
						style={disableStyle}
						onClick={() => request()}
						className="w-[203px] font-bold h-[62px] text-2xl mt-6 button"
					>
						Apply
					</Button>
				</div>
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

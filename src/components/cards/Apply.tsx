import { Button } from 'antd'
import { Cookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/avatar.png'
import { getAdmission } from '../../store/creators/MainCreators'

export const Apply = () => {
	const dispatch = useDispatch()
	const cookie = new Cookies()
	const disableStyle = {
		color: '#004EC2',
		border: '1px solid #004EC2',
		backgroundColor: 'white'
	}

	const request = async () => {
		const response = await getAdmission(dispatch)

		if (response) {
			cookie.set('s_id', response.session)
			cookie.set('s_abit_id', response.session)
			window.open(response.link, '_blank')
		}
	}
	return (
		<div
			className="rounded-[1vw] w-full pl-[55px] flex h-full overflow-y-auto"
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
			<div className="max-xl:hidden absolute right-[108px] cursor-pointer hover:scale-x-125 hover:right-20 w-[100px] hover:w-[120px] transition-all duration-200 h-full flex items-center">
				<svg
					width="87"
					height="40"
					viewBox="0 0 87 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
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

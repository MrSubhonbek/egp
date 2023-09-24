import { Button, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'

import session from '../../assets/images/session.png'

export const Session = () => {
	const navigate = useNavigate()
	return (
		<div className="flex overflow-hidden">
			<div className="ml-[40px] mt-[40px] flex flex-col justify-around">
				<div>
					<div className="font-semibold text-xl text-start">Session</div>
					<div className="text-base text-start mt-[30px] max-h-[100px] max-w-[50%]">
						All session information, materials and scores are displayed here
					</div>
				</div>
				<div className="text-start ">
					<Button
						className="rounded-full border-black  w-[200px] h-[50px] text-base font-semibold mt-[60px]"
						onClick={() => {
							navigate('/services/session/session')
						}}
					>
						Watch
					</Button>
				</div>
			</div>
			<div className="absolute min-w-[125px] min-h-[125px] top-[40px] right-[10px] max-h-[125px] bg-[#3E89F9] bg-opacity-80 rounded-full flex justify-center items-center">
				<img src={session} alt="" />
			</div>
		</div>
	)
}

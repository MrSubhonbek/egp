import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

import session from '../../assets/images/session.png'

export const Session = () => {
	const navigate = useNavigate()
	return (
		<div className="px-[60px] py-[40px] h-full">
			<div className="font-semibold text-xl text-start flex z-10 relative">
				Session
			</div>
			<div className="text-base text-start mt-[30px] w-full lg:max-w-[60%] relative flex z-10">
				All session information, materials and scores are displayed here
			</div>
			<div className="text-start absolute left-[60px] bottom-[40px]">
				<Button
					className="rounded-full border-black w-[200px] h-[50px] text-base font-semibold"
					onClick={() => {
						navigate('/services/session/session')
					}}
				>
					Watch
				</Button>
			</div>
			<div className="absolute min-w-[115px] min-h-[115px] right-[80px] top-[40px] max-h-[115px] bg-[#3E89F9] bg-opacity-80 rounded-full hidden justify-center items-center lg:flex">
				<img src={session} alt="" />
			</div>
		</div>
	)
}

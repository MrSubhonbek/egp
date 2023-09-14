import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/image15.png'

export const AboutUniversity = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div className="flex overflow-hidden">
			<div className="ml-[40px] mt-[40px]">
				<div>
					<div className="font-semibold text-xl text-start">
						About the university
					</div>
					<div className="text-base text-start mt-[30px] max-h-[100px]">
						Mini-text in 3-4 lines about how cool KFU is, statistics,
						infographics inside — laudatory marketing odes to the university
					</div>
				</div>
				<div className="text-start absolute bottom-[40px]">
					<Button
						className="rounded-full border-black  w-[200px] h-[50px] text-base font-semibold mt-[40px]"
						onClick={() => {
							navigate('/services/aboutUniversity')
						}}
					>
						Watch
					</Button>
				</div>
			</div>
			<div className="min-w-[125px] min-h-[125px] ml-[15px] mt-[50px] mr-[50px] max-h-[125px] bg-[#3E89F9] bg-opacity-80 rounded-full">
				<img className="rounded-b-full -mt-[5px]" src={img} alt="" />
			</div>
		</div>
	)
}

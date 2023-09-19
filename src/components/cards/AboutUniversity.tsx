import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/image15.png'

export const AboutUniversity = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div className="flex overflow-hidden">
			<div className="ml-[40px] mt-[40px] flex flex-col justify-around bg-orange-500">
				<div>
					<div className="font-semibold text-xl text-start">
						{t('AboutUniversity')}
					</div>
					{/* <div className="text-base text-start mt-[30px] max-h-[100px]"></div> */}
				</div>
				<div className="text-start ">
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

import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/aboutUniversity.png'

export const AboutUniversity = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div className="flex overflow-hidden">
			<div className="ml-[40px] mt-[40px] flex flex-col justify-around">
				<div>
					<div className="font-semibold text-xl text-start">
						{t('AboutUniversity')}
					</div>
					<div className="text-base text-start mt-[30px] max-h-[100px] max-w-[60%]">
						One of the oldest universities in Russia, founded in 1804. The
						university is famous for its strong schools of mathematics...
					</div>
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
			<div className="absolute min-w-[125px] min-h-[125px] top-[40px] right-[10px] max-h-[125px] bg-[#3E89F9] bg-opacity-80 rounded-full flex justify-center items-center">
				<img className="mb-8 ml-6" src={img} alt="" />
			</div>
		</div>
	)
}

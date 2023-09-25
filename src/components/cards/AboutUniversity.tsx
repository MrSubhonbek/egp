import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/images/aboutUniversity.png'

export const AboutUniversity = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div className="px-[60px] py-[40px] h-full">
			<div className="font-semibold text-xl text-start relative flex z-10">
				{t('AboutUniversity')}
			</div>
			<div className="text-base relative text-start mt-[30px] max-h-[100px] w-full lg:max-w-[80%] flex z-10">
				One of the oldest universities in Russia, founded in 1804. The
				university is famous for its strong schools of mathematics...
			</div>
			<div className="text-start absolute left-[60px] bottom-[40px]">
				<Button
					className="rounded-full border-black w-[200px] h-[50px] text-base font-semibold"
					onClick={() => {
						navigate('/services/aboutUniversity')
					}}
				>
					Watch
				</Button>
			</div>
			<div className="absolute min-w-[115px] min-h-[115px] right-[80px] top-[40px] max-h-[115px] bg-[#3E89F9] bg-opacity-80 rounded-full hidden justify-center items-center lg:flex">
				<img className="" src={img} alt="" />
			</div>
		</div>
	)
}

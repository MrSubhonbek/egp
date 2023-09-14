import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import universityPicture from '../../../assets/images/universityView.png'
import { ArrowLongLeftSVG } from '../../../assets/svg'
import { Footer } from '../../layout/Footer'

const AboutUniversity = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	return (
		<div className="flex flex-col w-full min-h-screen">
			<div className="flex flex-col w-full m-10 bg-orange-400">
				<Button
					className="rounded-lg border-solid border-black border-[1px] w-min h-auto mb-4"
					onClick={() => navigate('/user')}
				>
					<div className="flex items-center">
						<ArrowLongLeftSVG />
						<span className="text-lg ml-2">{t('back')}</span>
					</div>
				</Button>
				<div className="flex justify-between w-full">
					<div className="flex flex-col justify-between">
						<span className="text-lg">About the university</span>

						<span></span>

						<span></span>
					</div>
					<img src={universityPicture} alt="" className="w-1/2 h-full" />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutUniversity

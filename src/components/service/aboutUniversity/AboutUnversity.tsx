import { Button, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import universityPicture from '../../../assets/images/universityView.png'
import universityPicSec from '../../../assets/images/universityViewSec.png'
import {
	ArrowLongLeftSVG,
	LargeLogoSVG,
	QuotationMarksSVG
} from '../../../assets/svg'
import pause from '../../../assets/svg/pause.svg'
import { Faq } from '../../faq/Faq'
import { Footer } from '../../layout/Footer'

const AboutUniversity = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	return (
		<div className="flex flex-col w-full min-h-screen">
			<Faq />
			<div className="flex flex-col mx-6 my-20">
				<Button
					className="rounded-2xl border-solid border-black border-[1px] w-min h-auto mb-10"
					onClick={() => navigate('/user')}
				>
					<div className="flex items-center">
						<ArrowLongLeftSVG />
						<span className="text-lg ml-2">{t('back')}</span>
					</div>
				</Button>
				<div className="flex justify-between w-full mb-40 max-lg:flex-col max-lg:items-center">
					<div className="flex flex-col justify-between w-5/12 max-lg:w-3/4 max-lg:mb-5">
						<Typography.Title level={2} className="font-normal">
							About the university
						</Typography.Title>

						<Typography.Title level={4} className="font-normal mt-5 mb-5">
							MISSION
						</Typography.Title>

						<div className="flex flex-col">
							<p className="leading-1 mb-2">
								<span className="font-bold uppercase">
									generation, concentration and dissemination&nbsp;
								</span>
								of knowledge, competencies and technologies in response to
								global challenges related to demographic problems, increasing
								life expectancy, climate change, environmental pollution and
								energy security.
							</p>
							<p className="leading-1 mb-2">
								<span className="font-bold uppercase">
									preservation and enhancement&nbsp;
								</span>
								of the spiritual values of humanity, advanced training of the
								intellectual elite of society, able to act in a rapidly changing
								world and ensure the accelerated development of science and
								technology based on the integration of the educational process
								and fundamental scientific research.
							</p>
							<p className="leading-1 mb-2">
								<span className="font-bold uppercase">
									assistance to the innovative development&nbsp;
								</span>
								of priority areas of the Russian Federation.
							</p>
						</div>
					</div>
					<img src={universityPicture} alt="" className="w-1/2 max-lg:w-3/4" />
				</div>
				<div className="mx-auto flex flex-col gap-10 items-center">
					<LargeLogoSVG />
					<QuotationMarksSVG />
				</div>
				<span className="mx-auto mt-10 mb-40 w-4/6 text-center">
					KFU has almost 40 years of experience in teaching foreigners. The
					university is famous for its strong schools of mathematics, physics,
					biology, chemistry, linguistics. In scientific research, KFU gives
					priority to developments in pharmacology, biomedicine, geology,
					physics, chemistry, oil and gas, nano- and information technologies
					(IT), psychology and cultural studies, humanities, pedagogical and
					interdisciplinary fields.
				</span>
				<div className="relative w-full">
					<img
						src={pause}
						alt=""
						className="absolute right-32 bottom-16 z-10 w-[100px] h-[100px]"
					/>
					<Typography.Title
						level={2}
						style={{ color: 'white' }}
						className="absolute z-10 font-normal left-10 bottom-14"
					>
						Kazan <br /> Federal University
					</Typography.Title>
					<div className="bg-black opacity-30 left-0 right-0 bottom-0 top-0 absolute"></div>
					<img src={universityPicSec} className="w-full h-full" alt="" />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutUniversity

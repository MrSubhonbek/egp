import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'

import universityPicture from '../../../assets/images/universityView.png'
import { StartPlaySVG, StopPlaySVG } from '../../../assets/svg'
import { LargeLogoSVG, QuotationMarksSVG } from '../../../assets/svg'
import mp4 from '../../../assets/video/Kfu.mp4'
import { Footer } from '../../layout/Footer'

import Styles from './AboutUniversity.module.scss'

const AboutUniversity = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [play, changePlay] = useState(false)

	return (
		<div className="flex flex-col w-full min-h-screen">
			<div className="flex flex-col mx-6 my-20">
				<Button
					className={clsx(
						'rounded-2xl border-solid border-black border-[1px] w-min h-auto mb-10',
						Styles.button
					)}
					onClick={() => navigate('/user')}
				>
					<div className="flex items-center">
						<ArrowLeftOutlined className={Styles.arrowStyles} />
						<span className="text-lg ml-2" style={{}}>
							{t('back')}
						</span>
					</div>
				</Button>
				<div className="flex justify-between w-full mb-40 max-lg:flex-col max-lg:items-center">
					<div className="flex flex-col w-5/12 max-lg:w-3/4 max-lg:mb-5">
						<Typography.Title level={2} className="font-normal">
							About the university
						</Typography.Title>

						<Typography.Title level={4} className="font-normal mt-1">
							MISSION
						</Typography.Title>

						<div className="flex flex-col mt-4">
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
				<div className="relative m-auto min-[1100px]:w-[885px] min-[1100px]:h-[500px]">
					<div
						className="absolute right-32 bottom-16 z-10 bg-bluekfu w-[100px] min-[1100px]:w-[80px] min-[1100px]:h-[80px] h-[100px] cursor-pointer flex justify-center items-center rounded-full"
						onClick={() => {
							changePlay(!play)
						}}
					>
						{play ? <StopPlaySVG /> : <StartPlaySVG />}
					</div>
					<Typography.Title
						level={2}
						style={{ color: 'white' }}
						className="absolute z-10 font-normal left-10 bottom-14 rounded-full"
					>
						Kazan <br /> Federal University
					</Typography.Title>
					<div className="left-0 right-0 bottom-0 top-0 absolute">
						{/* <ReactPlayer
							url={mp4}
							width={'100%'}
							height={'100%'}
							playing={play}
							controls={true}
							onEnded={() => changePlay(false)}
							onPause={() => play && changePlay(false)}
							onPlay={() => !play && changePlay(true)}
						/> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutUniversity

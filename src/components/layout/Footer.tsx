import React from 'react'
import { Link } from 'react-router-dom'

import { LogoSvg, TelegramSvg, VkSvg, YoutubeSvg } from '../../assets/svg'

export const Footer = () => {
	return (
		<footer className="w-full min-h-[400px] bg-[#212121] text-white text-base">
			<div className="flex justify-around my-[100px] ">
				<div className="flex flex-col justify-center">
					<LogoSvg />
					<div className=" flex flex-col mt-10 mb-5">
						<span>
							<strong>Адрес:</strong> 420008 г. Казань, ул. Кремлевская, 18
						</span>
						<span>
							<strong>Email:</strong> public.mail@kpfu.ru
						</span>
					</div>
					<span>
						<strong>© 2023 Казанский федеральный университет</strong>
					</span>
				</div>
				<div className="flex flex-col">
					<span>
						<strong>Соцсети:</strong>
					</span>
					<div className="flex gap-5 my-5">
						<Link
							to={'https://vk.com/kazan_federal_university'}
							target="_blank"
						>
							<VkSvg />
						</Link>
						<Link to={'https://www.youtube.com/@univertv'} target="_blank">
							<YoutubeSvg />
						</Link>
						<Link to={'https://t.me/kznuniversity'} target="_blank">
							<TelegramSvg />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

import clsx from 'clsx'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import CalendarSvg from '../../../assets/svg/CalendarSvg'
import { SubtractSVG } from '../../../assets/svg/SubtractSVG'

import { Curriculum } from './Curriculum'
import { Session } from './Session'

const navList = [
	{
		id: '/services/session/session',
		icon: <CalendarSvg />,
		name: 'Session schedule'
	},
	{
		id: '/services/session/curriculum',
		icon: <SubtractSVG />,
		name: 'Curriculum'
	}
]

export const NavSession = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const handleNavigate = (url: string) => {
		navigate(url)
	}
	const handleList = navList.map(({ icon, name, id }, index) => {
		return (
			<li
				key={index}
				className={clsx(
					'w-full flex items-center py-2 pl-8 hover:bg-[#F5F8FB]  cursor-pointer',
					id === pathname && 'bg-[#F5F8FB]'
				)}
				onClick={() => handleNavigate(id)}
			>
				<div className="flex items-center gap-[10px]">
					{icon}
					<p className="text-base">{name}</p>
				</div>
			</li>
		)
	})
	return (
		<>
			<div className="shadowNav">
				<ul className="min-w-[230px] pt-14 flex flex-col gap-4 ">
					{handleList}
				</ul>
			</div>
			<div className="bg-[#F5F8FB] w-full pt-14 px-14 ">
				{pathname === navList[0].id && <Session />}
				{pathname === navList[1].id && <Curriculum />}
			</div>
		</>
	)
}

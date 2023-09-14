import { CloudUploadOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Progress, Typography } from 'antd'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { TypeRole } from '../../../api/types'
import { AboutMeSvg } from '../../../assets/svg/AboutMeSvg'
import { AddressSvg } from '../../../assets/svg/AddressSvg'
import { EducationSvg } from '../../../assets/svg/EducationSvg'
import { MyDocsSvg } from '../../../assets/svg/MyDocsSvg'
import { ParentSvg } from '../../../assets/svg/ParentSvg'
import { WorkSvg } from '../../../assets/svg/WorkSvg'
import { useAppSelector } from '../../../store'

import { AboutMe } from './AboutMe'
import { Address } from './Address'
import { Document } from './Document'
import { Education } from './Education'
import { Parent } from './Parent'
import { Work } from './Work'

export const NavAboutMe = () => {
	const user = useAppSelector(state => state.Profile.profileData.CurrentData)
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const role = useAppSelector(state => state.InfoUser.role)
	const handleNavigate = (url: string) => {
		navigate(url)
	}
	const { t } = useTranslation()
	const roleConverter = (role: TypeRole | null) => {
		if (role === 'ABIT') return 'enrollee'
		if (role === 'ATTEND') return 'attend'
		if (role === 'GUEST' || role === null) return 'guest'
		if (role === 'SCHOOL') return 'schoolboy'
		if (role === 'SEEKER') return 'seeker'
		if (role === 'STUD') return 'student'
	}
	const navList = [
		{
			id: '/services/aboutMe/aboutMe',
			icon: <AboutMeSvg />,
			name: t('aboutMe')
		},
		{
			id: '/services/aboutMe/document',
			icon: <MyDocsSvg />,
			name: t('documents')
		},
		{
			id: '/services/aboutMe/address',
			icon: <AddressSvg />,
			name: t('adress')
		},
		{
			id: '/services/aboutMe/education',
			icon: <EducationSvg />,
			name: t('education')
		},
		{
			id: '/services/aboutMe/work',
			icon: <WorkSvg />,
			name: t('work')
		},
		{
			id: '/services/aboutMe/parent',
			icon: <ParentSvg />,
			name: t('Parents')
		}
	]
	const isStudent = role === 'STUD'
	const handleList = navList.map(({ icon, name, id }, index) => {
		if (isStudent && id === '/services/aboutMe/work') return
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
			<div className="shadowNav ">
				<ul className="min-w-[230px] pt-14 flex flex-col gap-4 ">
					{handleList}
				</ul>
			</div>
			<div className="bg-[#F5F8FB] flex w-full">
				{pathname === navList[0].id && <AboutMe />}
				{pathname === navList[1].id && <Document />}
				{pathname === navList[2].id && <Address />}
				{pathname === navList[3].id && <Education />}
				{pathname === navList[4].id && <Work />}
				{pathname === navList[5].id && <Parent />}
				<div className="p-14 w-full justify-center">
					<div className="h-3/4 bg-white fixed w-full max-w-md rounded-[20px] shadow flex flex-col items-center justify-center">
						<div>
							<Avatar
								size={120}
								className="bg-[#CBDAF1]"
								icon={<UserOutlined />}
							/>
							<Button
								type="primary"
								size="large"
								shape="circle"
								className="left-[255px] bottom-[60%] absolute border-4 flex items-center justify-center text-2xl border-solid border-white"
								icon={<CloudUploadOutlined />}
							/>
						</div>
						<Typography.Text className="text-center text-black text-base font-bold leading-tight mt-5">
							{user?.firstname} {user?.lastname} {user?.middlename}
						</Typography.Text>
						<Typography.Text className="px-5 mt-5 py-[5px] bg-sky-100 rounded-full opacity-60 text-center text-black text-base font-normal leading-tight">
							{roleConverter(role)}
						</Typography.Text>
						<div className="w-[250px] mt-5">
							<Typography.Text>{t('FilledOn')} 69.9%</Typography.Text>
							<Progress
								showInfo={false}
								percent={69.9}
								strokeColor={{ from: '#108ee9', to: '#87d068' }}
							/>
						</div>
						<Button className="rounded-full mt-5" type="primary" ghost>
							{t('ViewProfile')}
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

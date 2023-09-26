import { Button, Divider, Drawer } from 'antd'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IUserData, TypeRole } from '../../api/types'
// import { MenuSvg } from '../../assets/svg'
import {
	LogoIasSvg,
	LogoutSvg,
	PersonCardSvg,
	PersonSvg
} from '../../assets/svg'
import { RootState, useAppSelector } from '../../store'
import { getAbUsForm } from '../../store/creators/MainCreators'
import { LogOut } from '../../store/creators/SomeCreators'
import { allData } from '../../store/reducers/FormReducers/FormReducer'
import { ModalNav } from '../service/modalMenu/ModalNav'

import Styles from './Header.module.scss'

type TypeHeaderProps = {
	type?: 'service' | 'main'
	service?: string
}

export const Header = ({ type = 'main', service }: TypeHeaderProps) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const { t } = useTranslation()
	const role = useAppSelector((state: RootState) => state.InfoUser.role)
	const form = useAppSelector((state: RootState) => state.Form)
	const [userEmail, changeUserEmail] = useState<IUserData | string>('')
	const [IsBurgerActive, changeIsBurgerActive] = useState<boolean>(true)

	const roleConverter = (role: TypeRole | null) => {
		if (role === 'ABIT') return 'Enrollee'
		if (role === 'ATTEND') return 'Attend'
		if (role === 'GUEST' || role === null) return 'Guest'
		if (role === 'SCHOOL') return 'Schoolboy'
		if (role === 'SEEKER') return 'Seeker'
		if (role === 'STUD') return 'Student'
	}

	useEffect(() => {
		if (localStorage.getItem('userInfo')) {
			changeUserEmail(JSON.parse(localStorage.getItem('userInfo') || ''))
		}
	}, [])

	const showDrawer = () => {
		setOpen(!open)
	}

	const getUser = async () => {
		const response = await getAbUsForm(dispatch)
		if (response === 403) navigate('/')
		if (typeof response !== 'number') dispatch(allData(response))
	}

	useEffect(() => {
		getUser()
	}, [])

	const onClose = () => {
		setOpen(false)
	}
	const items: MenuProps['items'] = [
		{
			label: (
				<div className="p-2 text-sm text-[#1F5CB8] font-bold cursor-default">
					{typeof userEmail === 'string' ? '' : userEmail.email}
				</div>
			),
			key: '0'
		},
		{
			type: 'divider'
		},
		{
			label: (
				<div
					onClick={() => {
						navigate('/services/aboutMe/aboutMe')
					}}
					className="flex items-center gap-[15px] px-[4px] py-[5px]"
				>
					<PersonCardSvg />
					About me
				</div>
			),
			key: '1'
		},
		{
			label: (
				<div
					className="flex items-center gap-[15px] px-[4px] py-[5px]"
					onClick={() => {
						LogOut(dispatch)
						navigate('/')
					}}
				>
					<LogoutSvg />
					Log out
				</div>
			),
			key: '5'
		},
		{
			label: <div className="cursor-default" />,
			key: '6'
		}
	]
	return (
		<header
			className={clsx(
				' z-20  h-[80px] fixed flex items-center justify-center w-full',
				type === 'main' ? 'bg-[#f5f8fb]' : 'bg-[#65A1FA]'
			)}
		>
			<div className="w-screen flex h-full justify-between px-8">
				<div className="flex gap-8 items-center">
					{role === 'STUD' && (
						<Button
							onClick={() => {
								changeIsBurgerActive(!IsBurgerActive)
								showDrawer()
							}}
							className={clsx(
								'h-[40px] rounded-full font-semibold bg-transparent border-2 flex items-center justify-center w-[130px] ',
								type === 'main'
									? 'text-[#1F5CB8] border-[#1F5CB8] '
									: 'text-white border-white hover:!border-white hover:!text-white'
							)}
							type="default"
						>
							<div
								className={clsx(
									Styles.burger,
									!IsBurgerActive && Styles.burger_active
								)}
							>
								<span
									className={clsx(
										Styles.burger__line,
										Styles.burger__line_first,
										type === 'main' ? 'bg-[#1F5CB8]' : 'bg-white'
									)}
								></span>
								<span
									className={clsx(
										Styles.burger__line,
										Styles.burger__line_second,
										type === 'main' ? 'bg-[#1F5CB8]' : 'bg-white'
									)}
								></span>
								<span
									className={clsx(
										Styles.burger__line,
										Styles.burger__line_third,
										type === 'main' ? 'bg-[#1F5CB8]' : 'bg-white'
									)}
								></span>
								<span
									className={clsx(
										Styles.burger__line,
										Styles.burger__line_fourth,
										type === 'main' ? 'bg-[#1F5CB8]' : 'bg-white'
									)}
								></span>
							</div>
							<span className="pl-2">{t('services')}</span>
						</Button>
					)}
					<div className="flex items-center gap-5">
						<LogoIasSvg white={type === 'service'} />
						<Divider type="vertical" className="border-l-white h-10 m-0" />
						<div className="text-white text-base font-bold">{service}</div>
					</div>
				</div>
				<div className="flex gap-5 items-center h-full">
					<div
						className={clsx(
							'h-full flex items-center cursor-pointer bg-transparent',
							type === 'main'
								? 'hover:bg-[#E3E8ED]'
								: 'target:bg-[#3073D7] active:bg-[#3073D7] visited:bg-[#3073D7] focus-visible:bg-[#3073D7] focus-within:bg-[#3073D7] focus:bg-[#3073D7] hover:bg-[#3073D7]'
						)}
					>
						<Dropdown
							menu={{ items }}
							placement="bottom"
							trigger={['click']}
							className="cursor-pointer h-full  box-border"
						>
							<Space className="px-10">
								<PersonSvg white={type === 'service'} />
								<div
									className={clsx('h-full', type === 'service' && 'text-white')}
								>
									<div className="font-bold text-sm truncate max-w-[120px]">
										{`${form.surName} ${form.name.charAt(0)}. ${
											!form.patronymic ? '' : form.patronymic.charAt(0) + '.'
										}`}
									</div>
									<div className="text-sm">{roleConverter(role)}</div>
								</div>
							</Space>
						</Dropdown>
						<Drawer
							rootStyle={{ position: 'fixed', top: 75 }}
							placement="top"
							size="large"
							closable={false}
							className="!bg-[#F5F8FB]"
							onClose={onClose}
							open={open}
							key="top"
						>
							<ModalNav close={onClose} />
						</Drawer>
					</div>
				</div>
			</div>
		</header>
	)
}

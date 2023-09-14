import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IUserData } from '../../../api/types'
import { logout } from '../../../store/creators/SomeCreators'
import {
	birthDay,
	name,
	patronymic,
	surName
} from '../../../store/reducers/FormReducers/FormReducer'
import { ImagesLayout } from '../ImagesLayout'

import { Buttons } from './Buttons/Buttons'
import { Inputs } from './Inputs/Inputs'
import { Switcher } from './Radio/Switcher'

export const FormModal = () => {
	const [IsEmpty, changeIsEmpty] = useState<boolean>(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { t, i18n } = useTranslation()

	const exit = async () => {
		await logout(dispatch)
		navigate('/')
	}

	var user: IUserData | string = ''
	if (localStorage.getItem('userInfo')) {
		user = JSON.parse(localStorage.getItem('userInfo') || '')
		if (typeof user !== 'string') {
			user.birthday !== '' && dispatch(birthDay(user.birthday))
			user.firstname !== '' && dispatch(name(user.firstname))
			user.lastname !== '' && dispatch(surName(user.lastname))
			user.middlename !== '' && dispatch(patronymic(user.middlename))
		}
	} else {
		exit()
	}

	useEffect(() => {
		changeIsEmpty(false)
	}, [i18n.language])
	return (
		<ImagesLayout>
			<div className="w-full flex justify-center ">
				<div className="container max-w-2xl flex flex-col items-center justify-center  px-5">
					<h2 className="text-center font-bold text-2xl">{t('fillForm')}</h2>
					<p className="mt-5 text-center text-sm font-bold px-7">
						{t('fillFormDescription')}
					</p>
					<h3 className="self-start my-7 text-xl">{t('aboutMe')}</h3>
					<Switcher />
					<Inputs IsEmpty={IsEmpty} dispatch={dispatch} />
					<Buttons changeIsEmpty={changeIsEmpty} />
				</div>
			</div>
		</ImagesLayout>
	)
}

import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../store'
import { approveEmail, setRole } from '../../store/creators/MainCreators'

import { CardForm } from './cardForm'

export const ApproveEmail = () => {
	const cookies = new Cookies()
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const query = async () => {
		if (searchParams.get('id') !== null && searchParams.get('hash') !== null) {
			const response = await approveEmail(
				{
					id: searchParams.get('id'),
					hash: searchParams.get('hash')
				},
				dispatch
			)

			if (response === 200) {
				await setRole({ role: 'ABIT' }, dispatch)
				navigate('/api/register/approve')
			}
		}
		if (!localStorage.getItem('access')) {
			navigate('/')
		}
	}

	useEffect(() => {
		query()
	}, [])

	const buttonEffect = () => {
		if (
			localStorage.getItem('access') !== null ||
			localStorage.getItem('userInfo') !== null ||
			cookies.get('refresh') !== undefined
		) {
			navigate('/user')
		}
	}

	const closeEffect = () => {
		navigate('/')
	}
	return (
		<CardForm
			buttonEffect={buttonEffect}
			closeEffect={closeEffect}
			withDots={false}
			mainTittle="Welcome"
			secondTittle={
				<span>

				</span>
			}
			buttonText="Start"
			buttonBgBlue={false}
		/>
	)
}

import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CardForm } from '../approve/cardForm'

interface ICheckEmailProps {
	email: string
}

export const CheckEmail: FC<ICheckEmailProps> = ({ email }) => {
	const navigate = useNavigate()

	useEffect(() => {
		if (email === '') navigate('/')
	}, [])

	const buttonEffect = () => {
		console.log("it's buttons effect")
	}

	const closeEffect = () => {
		navigate('/registration')
	}
	return (
		<CardForm
			buttonEffect={buttonEffect}
			closeEffect={closeEffect}
			withDots={true}
			mainTittle="Check your email"
			secondTittle={
				<span>
					Sent to the post office <span className="font-bold">{email}</span>{' '}
					&nbsp; welcome letter. To complete the registration, you need to
					follow the link provided in the letter
				</span>
			}
			buttonText="Resend"
			buttonBgBlue={true}
		/>
	)
}

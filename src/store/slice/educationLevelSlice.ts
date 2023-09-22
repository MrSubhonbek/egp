import { useAppSelector } from '..'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import endpoints from '../../api/endpoints'

import { IEducationLevelRequest, TypeRole } from './../../api/types'

interface Props {
	language: string
	role: TypeRole
}

export const educationLevelAPi = createApi({
	reducerPath: 'educationLevelAPi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://newlk.kpfu.ru/user-api' }),
	endpoints: build => ({
		getEducationLevel: build.query<IEducationLevelRequest[], Props>({
			query: arg => ({
				url:
					arg.role === 'STUD'
						? endpoints.USER.EDUCATION_LEVEL_STUD
						: endpoints.USER.EDUCATION_LEVEL_ANOTHER,
				method: 'GET',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
					'Accept-Language': arg.language
				}
			})
		})
	})
})

export const { useGetEducationLevelQuery } = educationLevelAPi

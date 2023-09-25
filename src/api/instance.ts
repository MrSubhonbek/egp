import axios from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
export const API_URL = `https://newlk.kpfu.ru/`
export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

axiosInstance.interceptors.request.use(
	config => {
		if (
			[
				'users/me',
				'schedule',
				'examsSchedule',
				'studyplan',
				'performance',
				'teachers-rating',
				'country',
				'levels',
				'institution',
				'document',
				'admission-link'
			].some(el => config.url?.includes(el))
		) {
			config.headers['Authorization'] =
				'Bearer ' + `${localStorage.getItem('access')}`
		}
		config.headers['Accept-Language'] = cookies.get('i18next')

		return config
	},
	error => {
		console.log(Promise.reject(error))
	}
)

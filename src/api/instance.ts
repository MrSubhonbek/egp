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
			config.url?.includes('users') ||
			config.url === '/admission-link' ||
			config.url === '/schedule' ||
			config.url?.includes('schedule-api') ||
			config.url?.includes('academic-performance-api') ||
			config.url?.includes('study-plan-api')
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

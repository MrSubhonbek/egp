import { Dispatch } from '@reduxjs/toolkit'

import {
	loginFailure,
	logoutSuccess,
	registrationFailure
} from '../reducers/AuthRegReducer'
import { putRole } from '../reducers/FormReducers/InfoUserReducer'

export const logout = async (dispatch: Dispatch): Promise<void> => {
	dispatch(putRole(null))
	dispatch(logoutSuccess())
}

export const clearLoginErrors =
	() =>
	async (dispatch: Dispatch): Promise<void> => {
		dispatch(loginFailure(null))
	}

export const clearRegistrationErrors =
	() =>
	async (dispatch: Dispatch): Promise<void> => {
		dispatch(registrationFailure(null))
	}

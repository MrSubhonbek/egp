import { Dispatch } from '@reduxjs/toolkit'

import {
	loginFailure,
	registrationFailure,
	setDefaultAuthReg
} from '../reducers/AuthRegReducer'
import { setDefaultAddress } from '../reducers/FormReducers/AddressReducer'
import { setDefaultDocuments } from '../reducers/FormReducers/DocumentReducer'
import { setDefaultEducation } from '../reducers/FormReducers/EducationReducer'
import { setDefaultForm } from '../reducers/FormReducers/FormReducer'
import { putRole } from '../reducers/FormReducers/InfoUserReducer'
import { setDefaultParent } from '../reducers/FormReducers/ParentReducer'
import { setDefaultWork } from '../reducers/FormReducers/WorkReducer'
import { setDefaultProfile } from '../reducers/ProfileReducer'

export const LogOut = async (dispatch: Dispatch): Promise<void> => {
	dispatch(putRole(null))
	var cookies = document.cookie.split(';')
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i]
		var eqPos = cookie.indexOf('=')
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
	}
	localStorage.clear()
	dispatch(setDefaultAuthReg())
	dispatch(setDefaultAddress())
	dispatch(setDefaultDocuments())
	dispatch(setDefaultEducation())
	dispatch(setDefaultForm())
	dispatch(setDefaultParent())
	dispatch(setDefaultProfile())
	dispatch(setDefaultWork())
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

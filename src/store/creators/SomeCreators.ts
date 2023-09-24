import { Dispatch } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'

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
import { setDefaultServices } from '../reducers/FormReducers/ServicesReducer'
import { setDefaultWork } from '../reducers/FormReducers/WorkReducer'
import { setDefaultProfile } from '../reducers/ProfileReducer'

const cookies = new Cookies()

export const LogOut = async (dispatch: Dispatch): Promise<void> => {
	dispatch(putRole(null))
	cookies.remove('refresh')
	cookies.remove('s_id')
	cookies.remove('s_abit_id')
	localStorage.clear()
	dispatch(setDefaultAuthReg())
	dispatch(setDefaultAddress())
	dispatch(setDefaultDocuments())
	dispatch(setDefaultEducation())
	dispatch(setDefaultForm())
	dispatch(setDefaultParent())
	dispatch(setDefaultProfile())
	dispatch(setDefaultServices())
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

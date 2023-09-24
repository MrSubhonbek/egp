import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../..'
import {
	Exam,
	ICalendar,
	ICountryRequest,
	IDocumentsRequest,
	IEducationLevelRequest,
	IPerformance,
	IServices,
	TypeSchedule
} from '../../../api/types'

const initialState: IServices = {
	countries: null,
	educations: null,
	documents: null,
	schedule: null,
	examsSchedule: null,
	studyPlan: null,
	performance: null
}

export const ServicesReducer = createSlice({
	name: 'services',
	initialState,
	reducers: {
		addCountries: (state, action: PayloadAction<ICountryRequest[]>) => {
			state.countries = action.payload
		},
		addEducations: (state, action: PayloadAction<IEducationLevelRequest[]>) => {
			state.educations = action.payload
		},
		addDocuments: (state, action: PayloadAction<IDocumentsRequest[]>) => {
			state.documents = action.payload
		},
		addSchedule: (state, action: PayloadAction<TypeSchedule>) => {
			state.schedule = action.payload
		},
		addExamsSchedule: (state, action: PayloadAction<Exam[]>) => {
			state.examsSchedule = action.payload
		},
		addStudyPlan: (state, action: PayloadAction<ICalendar>) => {
			state.studyPlan = action.payload
		},
		addPerformance: (state, action: PayloadAction<IPerformance>) => {
			state.performance = action.payload
		},
		setDefaultServices: (state, action: PayloadAction<void>) =>
			(state = initialState)
	}
})

export const {
	addCountries,
	addEducations,
	addDocuments,
	addSchedule,
	addExamsSchedule,
	addStudyPlan,
	addPerformance,
	setDefaultServices
} = ServicesReducer.actions

export default ServicesReducer.reducer

export const selectState = (state: RootState) => state.Services

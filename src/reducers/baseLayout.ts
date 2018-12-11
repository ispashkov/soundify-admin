import { CHANGE_PAGE_TITLE, ChangePageTitle } from '../constants/actionTypes'

interface State {
	pageTitle: string
}

const initialState: State = {
	pageTitle: 'Dashboard'
}

type Action = ChangePageTitle

export default (state = initialState, { type, payload }: Action) => {
	switch(type) {
		case CHANGE_PAGE_TITLE:
			return {
				...state,
				pageTitle: payload
			}
		default:
			return state
	}
}
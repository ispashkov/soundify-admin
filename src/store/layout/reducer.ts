import { CHANGE_PAGE_TITLE, ChangePageTitle } from "./types";

export interface LayoutInterface {
  pageTitle: string
}

const initialState: LayoutInterface = {
  pageTitle: 'Dashboard'
};

type Action = ChangePageTitle

export default (state = initialState, { type, payload }: Action): LayoutInterface => {
  switch(type) {
    case CHANGE_PAGE_TITLE:
      return {
        ...state,
        pageTitle: payload
      };
    default:
      return state
  }
}

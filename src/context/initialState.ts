import { AppStateI } from "./types";

export const initialState: AppStateI = {
  user: {
    user: null,
    isLoading: true,
    isError: false,
  },
  tasks: {
    isError: false,
    isFetching: false,
    data: [],
  },
  dispatch: () => {},
  goals: {
    today: {
      isFetching: false,
      isError: false,
      data: [],
    },
    week: {
      isFetching: false,
      isError: false,
      data: [],
    },
    month: {
      isFetching: false,
      isError: false,
      data: [],
    },
    year: {
      isFetching: false,
      isError: false,
      data: [],
    },
    custom: {
      isFetching: false,
      isError: false,
      data: [],
    },
  },
};

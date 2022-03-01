import { AppActionI, AppStateI, ActionTypes } from "./types";

const AppReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_USER:
      console.log("pyload", payload);
      return {
        ...state,
        user: {
          ...state.user,
          user: payload,
          isError: false,
          isLoading: false,
        },
      };
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          user: payload,
          isLoading: false,
          isError: false,
        },
      };
    case ActionTypes.REMOVE_USER:
      return {
        ...state,
        user: { ...state.user, user: null, isLoading: false, isError: false },
      };
    case ActionTypes.ADD_TASKS_DAY:
      return {
        ...state,
        tasks: payload.reverse(),
      };
    case ActionTypes.UPDATE_TASKS_DAY:
      return {
        ...state,
        tasks: payload,
      };
    //goals
    //today
    case ActionTypes.ADD_GOALS_TODAY:
      return {
        ...state,
        goals: {
          ...state.goals,
          today: {
            ...state.goals.today,
            data: payload,
          },
        },
      };
    case ActionTypes.UPDATE_GOALS_TODAY:
      return {
        ...state,
        goals: {
          ...state.goals,
          today: {
            ...state.goals.today,
            data: payload,
          },
        },
      };
    //week
    case ActionTypes.ADD_GOALS_WEEK:
      return {
        ...state,
        goals: {
          ...state.goals,
          week: {
            ...state.goals.week,
            data: payload,
          },
        },
      };
    case ActionTypes.UPDATE_GOALS_WEEK:
      return {
        ...state,
        goals: {
          ...state.goals,
          week: {
            ...state.goals.week,
            data: payload,
          },
        },
      };
    //month
    case ActionTypes.ADD_GOALS_MONTH:
      return {
        ...state,
        goals: {
          ...state.goals,
          month: {
            ...state.goals.month,
            data: payload,
          },
        },
      };
    case ActionTypes.UPDATE_GOALS_MONTH:
      return {
        ...state,
        goals: {
          ...state.goals,
          month: {
            ...state.goals.month,
            data: payload,
          },
        },
      };
    //year
    case ActionTypes.ADD_GOALS_YEAR:
      return {
        ...state,
        goals: {
          ...state.goals,
          year: {
            ...state.goals.year,
            data: payload,
          },
        },
      };
    case ActionTypes.UPDATE_GOALS_YEAR:
      return {
        ...state,
        goals: {
          ...state.goals,
          year: {
            ...state.goals.year,
            data: payload,
          },
        },
      };
    //custom
    case ActionTypes.ADD_GOALS_CUSTOM:
      return {
        ...state,
        goals: {
          ...state.goals,
          custom: {
            ...state.goals.custom,
            data: payload,
          },
        },
      };
    case ActionTypes.UPDATE_GOALS_CUSTOM:
      return {
        ...state,
        goals: {
          ...state.goals,
          custom: {
            ...state.goals.custom,
            data: payload,
          },
        },
      };
    //tasks
    case ActionTypes.ADD_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          data: payload,
          isFetching: false,
        },
      };
    case ActionTypes.FETCH_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          isFetching: true,
          data: [],
        },
      };
    default:
      return { ...state };
  }
};
export default AppReducer;

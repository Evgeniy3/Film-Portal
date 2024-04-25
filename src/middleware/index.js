// interface Film {
//   favFilms: string[];
//   pageValue: number;
// }

// interface Api {
//   config: {
//     online: boolean;
//     focused: boolean;
//     middlewareRegistered: boolean;
//     refetchOnFocus: boolean;
//     refetchOnReconnect: boolean;
//   };
//   mutations: {};
//   provided: {};
//   queries: {
//     searchFilms: (params: {
//       pageValue: number;
//       searchValue: string;
//       sortType: { name: string; value: string };
//       sortYear: { name: string; value: string };
//     }) => {};
//   };
//   subscriptions: {
//     searchFilms: (params: {
//       pageValue: number;
//       searchValue: string;
//       sortType: { name: string; value: string };
//       sortYear: { name: string; value: string };
//     }) => {};
//   };
// }

// interface Filter {
//   pageValue: number;
//   searchValue: string;
//   sortType: { name: string; value: string };
//   sortYear: { name: string; value: string };
// }

// interface INext {
//   favFilm: Film,
//   api: Api,
//   filter: Filter,
// }

// interface IStore {
//   dispatch: () => void,
//   getState: () => void,
// }

// interface IAction {
//   meta: object,
//   payload: [],
//   type: string,
// }

const logger = (store) => (next) => (action) => {
  console.group('action type', action.type);
  console.info('dispatching', action, store);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
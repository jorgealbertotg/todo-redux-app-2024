import { createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFiltro } from './filtro.actions';
import { Todo } from "../todos/models/todo.model";

// const initialState: Todo[] = [];

const initialState: any = "TODOS";

const _filtroReducer = createReducer(initialState,
  on(setFiltro, (state, props) => props.filtro)
  // on(set, (state, props) => {
  //   switch (props.filtro) {
  //     case "ALL":
  //       return [ ...state ];
  //     case "ACTIVE":
  //       return state.filter(todo => !todo.completado);
  //     case "COMPLETED":
  //       return state.filter(todo => todo.completado);
  //     default:
  //       return state;
  //   }
  // })
);

export function filtroReducer(state, action): filtrosValidos {
  return _filtroReducer(state, action);
}

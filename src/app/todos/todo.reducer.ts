import { Action, createReducer, on } from "@ngrx/store";
import { borrar, clear, crear, editar, toggle, toggleAll } from "./todo.actions";
import { Todo } from "./models/todo.model";

const initialState: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Vencer a Thanos"),
  new Todo("Comprar escudo del capitan america")
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, props) => [...state, new Todo(props.texto)]),
  on(toggle, (state, props) =>
    state.map((todo: Todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    })
  ),
  on(editar, (state, props) =>
    state.map((todo: Todo) => {
      if (todo.id === props.id) {
        return {
          ...todo,
          texto: props.texto
        };
      } else {
        return todo;
      }
    })
  ),
  on(borrar, (state, props) =>
    state.filter((todo) => todo.id !== props.id)
  ),
  on(toggleAll, (state, props) => 
    state.map(todo => ({ ...todo, completado: props.completado }))
  ),
  on(clear, state =>
    state.filter(todo => !todo.completado)
  )
);

export function todoReducer(state: any, action: Action) {
  return _todoReducer(state, action);
}

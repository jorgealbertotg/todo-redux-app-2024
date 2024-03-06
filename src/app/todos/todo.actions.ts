import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  "[TODO] Crea Todo",
  props<{ texto: string }>()
);

export const toggle = createAction(
  "[TODO] Toggle Todo",
  props<{ id: number }>()
);

export const editar = createAction(
  "[TODO] Edit Todo",
  props<{ id: number, texto: string }>()
)

export const borrar = createAction(
  "[TODO] Borrar Todo",
  props<{ id: number }>()
);

export const toggleAll = createAction(
  "[TODO] Toggle all Todo",
  props<{ completado: boolean }>()
);

export const clear = createAction("[TODO] Clear completed Todo");
import { createAction, props } from "@ngrx/store";

export type filtrosValidos = "TODOS" | "COMPLETADOS" | "PENDIENTES";

export const setFiltro = createAction(
  "[Filtro] Set filtro",
  props<{ filtro: filtrosValidos }>()
);

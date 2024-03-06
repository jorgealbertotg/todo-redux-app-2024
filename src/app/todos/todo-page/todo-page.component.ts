import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import  * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {

  chkToggleAll: FormControl;

  constructor(private store: Store<AppState>) {
    this.chkToggleAll = new FormControl(false);
  }

  ngOnInit(): void {
    this.chkToggleAll.valueChanges.subscribe(valor =>
      this.store.dispatch(actions.toggleAll({ completado: valor }))
    );
  }
}

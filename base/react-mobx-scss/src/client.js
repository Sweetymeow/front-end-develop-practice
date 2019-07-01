import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import CounterStore from './stores/CounterStore';
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

const initialState = window.initialState && JSON.parse(window.initialState) || {};

var todoStore = TodoStore.fromJS(initialState.todos || []);
var viewStore = new ViewStore();
var counterStore = new CounterStore();

todoStore.subscribeServerToStore();

ReactDOM.render(
	<TodoApp
		todoStore={todoStore}
		viewStore={viewStore}
		counterStore={counterStore} />,
	document.getElementById('todoapp')
);

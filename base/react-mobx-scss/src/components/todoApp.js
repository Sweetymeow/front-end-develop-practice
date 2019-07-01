import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import { Router } from 'director/build/director'
import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import Counter from './counter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';

// import DevTool from 'mobx-react-devtools';

@observer
export default class TodoApp extends React.Component {
	render() {
		const {todoStore, viewStore, counterStore } = this.props;
		return (
			<div>
				<div className="todolist-wrapper">
					{/* <DevTool /> */}
					<header className="header">
						<h1>todos</h1>
						<TodoEntry todoStore={todoStore} />
					</header>
					<TodoOverview todoStore={todoStore} viewStore={viewStore} />
					<TodoFooter todoStore={todoStore} viewStore={viewStore} />
				</div>
				<div className="calculator-wrapper">
					<Counter counterStore={counterStore} />
				</div>
			</div>
		);
  }

	componentDidMount() {
    const viewStore = this.props.viewStore;
    const router = Router({
      '/': function() {
				viewStore.todoFilter = ALL_TODOS;
			},
      '/active': function() {
				viewStore.todoFilter = ACTIVE_TODOS;
			},
      '/completed': function() {
				viewStore.todoFilter = COMPLETED_TODOS;
			}
    });
    router.init('/');
	}
}

TodoApp.propTypes = {
	viewStore: PropTypes.object.isRequired,
	todoStore: PropTypes.object.isRequired
};

import {observable, action} from 'mobx';
// import { ALL_TODOS } from '../constants';

export default class CounterStore {
	@observable count = 0;
	@action increment = (n = 1) => {
		this.count += n;
	};
	@action decrement = (n = 1) => {
		this.count -= n;
	};
}

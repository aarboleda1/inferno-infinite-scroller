import Component from 'inferno-component';
import createElement from 'inferno-create-element';
require('inferno-devtools')
import { render } from 'inferno';

export default class InfiniteScroll extends Component {

	componentDidMount() {

	}
	componentDidUpdate() {

	}
	componentWillUpdate() {

	}	
	attachScrollListener() {

	}
	scrollListener() {

	}
	// render() {
	// 	const {
	// 		children,
	// 	} = this.props;
	// return createElement('div')
	// }
	render() {
		return createElement('div')
	}
}
render(<InfiniteScroll/>, document.getElementById('app'))
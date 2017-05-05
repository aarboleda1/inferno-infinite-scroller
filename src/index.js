import { render } from 'inferno';
import App from './App';
import './index.css';
import InfiniteScroll from './InfiniteScroll';

render(<InfiniteScroll />, document.getElementById('app'));

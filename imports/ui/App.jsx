import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Loading from './layouts/Loading.jsx';

import Main from './layouts/Main.jsx';
import Home from './components/Home.jsx';


const Routes = (
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path='/' component={Home} />
		</Route>
	</Router>
);

class App extends Component {

	componentDidMount() {
		phonon.options({
			navigator: {
					defaultPage: 'home',
					animatePages: true,
					enableBrowserBackButton: true,
					templateRootDirectory: './tpl'
			},
			i18n: null // for this example, we do not use internationalization
		});
		var app = phonon.navigator();
		app.on({page: 'home', preventClose: false, content: null});
		app.start();
	}

	render() {
		return Routes;
	}
}

export default App;

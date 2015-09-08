import React from 'react';
import Router from 'react-router';
import routes from './routes';
// this file just puts the rendered react component container into the #app div

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, document.getElementById('app'));
});

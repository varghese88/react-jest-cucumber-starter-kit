import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import { inject } from './middlewares/dependency-inject';
import { appRoutes } from './middlewares/app-routes';
import { dataService } from './middlewares/data-service';
export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router:routerReducer
    }),applyMiddleware(middleware,inject({}),appRoutes,dataService));


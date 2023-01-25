import Charts from './views/Charts/Charts';
import User from './views/User/User';
import UserDetails from './views/User/UserDetails';
import Dashboard from './views/Dashboard/Dashboard';
import Calendar_Component from './views/Calendar/Calendar';

export const adminRoutes = [
	{
		path: 'dashboard',
		component: Dashboard,
	},
	{
		path: 'user',
		component: User,
	},
	{
		path: 'user/add',
		component: UserDetails,
	},
	{
		path: 'user/:id',
		component: UserDetails,
	},
	{
		path: 'charts',
		component: Charts,
	},
	{
		path: 'calendar',
		component: Calendar_Component,
	}
]
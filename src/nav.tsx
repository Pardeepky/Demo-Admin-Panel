import React from "react";
import { FiUsers } from "react-icons/fi";
import { BsFillBarChartFill } from "react-icons/bs";
import {MdDashboard} from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";

export const Navigation = [
	{
		name: 'Dashboard',
		url: '/dashboard',
		icon: <MdDashboard/>
	},
	{
		name: 'Users',
		url: '/user',
		icon: <FiUsers/>
	},
	{
		name: 'Charts',
		url: '/charts',
		icon: <BsFillBarChartFill/>
	},
	{
		name: 'Calendar',
		url: '/calendar',
		icon: <AiFillCalendar/>
	}
]
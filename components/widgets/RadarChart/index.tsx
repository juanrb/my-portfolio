import React from 'react'
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import colors from "tailwindcss/colors"

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
)

export const data = {
	labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
	datasets: [
		{
			label: '# of Votes',
			data: [7, 9, 4, 5, 3, 3],
			backgroundColor: 'rgba(23, 89, 128, 0.2)',
			borderColor: 'rgba(23, 89, 128, 1)',
			borderWidth: 1,
		},
	],
}

export function RadarChart() {
	return <Radar data={data} options={{
		scales: {
			r: {
				suggestedMin: 0,
				suggestedMax: 10
			}
		}
	}} />
}

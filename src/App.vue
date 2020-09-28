<template>
	<div id="app">
		<Score
			:questions="questions"
			:results="results"
			:defaultMessage="defaultMessage"
		/>
	</div>
</template>

<script>
import Score from './components/Score/Score'

export default {
	name: 'App',
	data(){
		return{
			questions:[
				{
					title: 'CHF history',
					points: 1,
					checked: false
				},
				{
					title: 'Hypertension history',
					points: 1,
					checked: false
				},
				{
					title: 'Age > 75 years',
					points: 1,
					checked: false
				},
				{
					title: 'Diabetes mellitus history',
					points: 1,
					checked: false
				},
				{
					title: 'Stroke or TIA symptons previously',
					points: 2,
					checked: false
				},
			],
			results:[
				{
					points: 0,
					message: "Low risk of thromboembolic event. 1.9% risk of event per year if no coumadin"
				},
				{
					points: 1,
					message: "Intermediate risk of thromboembolic event. 2.8% risk of event per year if no coumadin."
				},
				{
					points: 2,
					message: "Low risk of thromboembolic event. 1.9% risk of event per year if no coumadin."
				},
				{
					points: 3,
					message: "High risk of thromboembolic event. 5.9% risk of event per year if no coumadin."
				},
				{
					points: 4,
					message: "High risk of thromboembolic event. 8.5% risk of event per year if no coumadin."
				},
				{
					points: 5,
					message: "By points directly:High risk of thromboembolic event. 12.5% risk of event per year if no coumadin."
				},
				{
					points: 6,
					message: "By points directly:High risk of thromboembolic event. 18.2% risk of event per year if no coumadin."
				},
			],
			defaultMessage: 'The adjusted stroke rate was the expected stroke rate per 100 person-years derived from the multivariable model assuming that aspirin was not taken.'
		}
	},
	components: {
		Score
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#app {
	width: 100vw;
	height: 100vh;
	background: #eee;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>

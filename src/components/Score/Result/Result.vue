<template>
	<div class="result">
		<h2>Points: {{totalPoints}}</h2>
		<p>{{message}}</p>
		<p v-if="defaultMessage">{{defaultMessage}}</p>
	</div>
</template>

<script>
export default {
	name: 'Result',
	props:{
		results:{
			type: Array,
			required: true
		},
		totalPoints:{
			type: Number,
			required: true
		},
		defaultMessage:{
			type: String
		}
	},
	computed:{
		message(){
			return this.results.find(x=>x.points===this.totalPoints).message
		}
	}
}
</script>

<style scoped>
.result{
	padding: 20px;
	background: #1bb193;
	color: white;
}
.result p{
	margin-top: 15px;
}

</style>
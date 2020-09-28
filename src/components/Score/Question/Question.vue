<template>
	<div class="question">
		<div class="info">
			<h2>{{question.title}}</h2>
			<p v-if="question.description">{{question.description}}</p>
		</div>
		<div class="buttons">
			<button 
				:class="!question.checked && 'checked'"
				@click="$emit('toggle-checked', question)"
			>
				no
			</button>
			<button 
				@click="$emit('toggle-checked', question)"
				:class="question.checked && 'checked'"
			>
				yes <span>+{{question.points}}</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Question',
	props:{
		question:{
			required: true,
			type: Object
		}
	}
}
</script>

<style scoped>
.question{
	display: flex;
	justify-content: space-between;
	border-bottom: solid 1px silver;
	margin: 10px 0;
	padding: 10px 0;
}
.buttons{
	margin-left: 50px;
	display: flex;
	align-items: center;
}
.buttons button{
	outline: none;
	width: 100px;
	border: silver 1px solid;
	padding: 10px;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
}
.buttons button.checked{
	color: white;
	background: #1bb193;
}
.info h2{
	word-wrap: break-word;
}
</style>
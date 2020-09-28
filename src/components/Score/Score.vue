<template>
	<div class="score">
		<div class="questions">
			<app-question
				v-for="(question, i) in $data._questions"
				:key="i"
				:question="question"
				:defaultMessage="defaultMessage"
				@toggle-checked="toggleChecked"
			/>
		</div>
		<app-result 
			:results="results"
			:totalPoints="totalPoints"
		/>
	</div>
</template>

<script>
import Question from './Question/Question'
import Result from './Result/Result'

export default {
	name: 'Score',
	components:{
		'app-question': Question,
		'app-result': Result,
	},
	computed:{
		totalPoints(){
			return this.$data._questions.reduce((acc,curr)=>{
				if(curr.checked){
					return acc + curr.points
				}
				return acc
			},0)
		}
	},
	data(){
		return{
			_questions: JSON.parse(JSON.stringify(this.questions.map((x,i)=>{
				return {
					...x,
					id: i
				}
			})))
		}
	},
	props: {
		questions:{
			type: Array,
			required: true
		},
		results:{
			type: Array,
			required: true
		},
		defaultMessage:{
			type: String
		}
	},
	methods:{
		toggleChecked(question){
			this.$data._questions = this.$data._questions.map(q => {
				if(q.id === question.id){
					q.checked = !q.checked
				}
				return q
			})
		}
	}
}
</script>
<style scoped>
.score{
	position: fixed;
	top: 10vh;
	background: white;
	padding: 20px;
	width: 700px;
}
</style>

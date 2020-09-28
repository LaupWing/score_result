import {mount} from '@vue/test-utils'
import Score from '@/components/Score/Score'
const questions  = [
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
]

const results = [
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
]
const defaultMessage = 'The adjusted stroke rate was the expected stroke rate per 100 person-years derived from the multivariable model assuming that aspirin was not taken.'
const testQuestion = questions[0]
const wrapper = mount(Score, {
	propsData:{
		questions,
		results,
		defaultMessage
	}
})

// Buttons:
// * When toggle one questiont it needs to add the correct amount of points to the totalpoints
// * When toggle one questiont it needs to subtract the correct amount of points to the totalpoints
describe("Button triggers", ()=>{
	it(`Toggle question will add ${testQuestion.points} points`, async ()=>{
		await wrapper.vm.toggleChecked(testQuestion)
		console.log(wrapper.vm.totalPoints)
		console.log(wrapper.vm.totalPoints)
		console.log(testQuestion)
		expect(wrapper.vm.totalPoints).toBe(1)
	})

	it(`Toggle question will subtract ${testQuestion.points} points`, async ()=>{
		await wrapper.vm.toggleChecked(testQuestion)
		expect(wrapper.vm.totalPoints).toBe(0)
	})
})


// Results:
// * Show correct message at certain totalpoints
describe("Result.vue", ()=>{
	it(`Show the right message at a certain total points`, async ()=>{
		await wrapper.vm.toggleChecked(testQuestion)
		expect(wrapper.vm.totalPoints).toBe(0)
	})
})
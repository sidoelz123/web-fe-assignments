import { calculateBmiValue } from "./modules/calcBmi.js";
import { checkBmiValue } from "./modules/checkBmi.js";


const formElement = document.querySelector("form");
const heightValueElement = document.querySelector("#height");
const weightValueElement = document.querySelector("#weight");
const headerResultElement = document.querySelector(".result").firstElementChild;
const bmiValueElement = document.querySelector("#bmi-value");
const bmiCategoryElement = document.querySelector("#bmi-category");


formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const [weight, height] = [weightValueElement.value, heightValueElement.value];
	const bmiValue = calculateBmiValue(weight, height);
	const bmiCategory = checkBmiValue(bmiValue);

	
	headerResultElement.classList.remove("hidden");
	bmiValueElement.textContent = bmiValue;
	bmiCategoryElement.textContent = bmiCategory;

	// Reset input field
	// formElement.reset();
});


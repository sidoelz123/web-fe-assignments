export const checkBmiValue = (bmi) => {
	const bmiCategories = {
		Underweight: bmi < 18.5,
		Normal: bmi >= 18.5 && bmi <= 24.9,
		Overweight: bmi >= 25 && bmi <= 29.9,
		Obesity: bmi >= 30,
	};

	return Object.keys(bmiCategories).find((key) => bmiCategories[key]);
};
const calculateBmiValue = (weight, height) => {
	const result = weight / ((height/100)**2);
	return Number((result).toFixed(1));
};

export {calculateBmiValue};
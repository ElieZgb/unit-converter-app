//* For the sake of explication,
//* I am condidering converting from Decimeter --> Kilometer
import { equations } from "./equations";

export const convertFromTo = (props) => {
	const { convertFrom, convertTo, inputValue } = props;

	if (inputValue.length === 0) return { resultValue: "" };

	if (convertFrom === convertTo) {
		return { resultValue: inputValue };
	}

	let found = equations.find(
		(e) => e.units.includes(convertFrom) && e.units.includes(convertTo)
	);

	//* [1] If an equation with both units exists, the job is done and we return the result.
	//* In my case, there is not an equation with a 'unit' array of ['Decimeter', 'Kilometer']
	if (found) {
		return {
			resultValue: `${Number(
				found.calculate(inputValue, convertFrom)
			).toFixed(3)}`,
		};
	} else {
		//* Contrary to [1] above, there is not an equation with both units.
		//* How this works is that I wrote the equations so that in every category, I have 1 unit that has an equation with all the other sister units.
		//? Ex: Meter -> Kilometer, Meter -> Yard, etc... (there is no Kilometer -> Yard)
		//* So, back to our equation at the top, I searh for the equation having Decimeter as one of the units (should be only one present).
		//* I store the resulting value aside along with the Second unit figured when finding the equation.
		//* Then I convert again from the value stored to the Second unit in my actual conversion which is Decimeter.
		//? This looks like this: Decimeter -> x, then, x -> Kilometer. (resulting in Decimeter -> Kilometer conversion)

		// searching for an existing equation with Decimeter
		found = equations.find((e) => e.units.includes(convertFrom));

		if (found) {
			// storing the Second unit of the found equation and executing the conversion (In our example: Decimeter -> Meter)
			const firstOperationRightHand = found.units.filter(
				(u) => u !== convertFrom
			)[0];

			found = equations.find(
				(e) =>
					e.units.includes(convertFrom) &&
					e.units.includes(firstOperationRightHand)
			);

			// In our example: conversion result of Decimeter -> Meter
			const firstOperationResult = found.calculate(
				inputValue,
				convertFrom
			);

			// In our example: Searching for Meter -> Kilometer
			found = equations.find(
				(e) =>
					e.units.includes(firstOperationRightHand) &&
					e.units.includes(convertTo)
			);

			// In our example: executing conversion of ((Decimeter -> Meter) -> Kilometer)
			const secondOperationResult = found.calculate(
				firstOperationResult,
				firstOperationRightHand
			);

			return {
				resultValue: `${Number(secondOperationResult).toFixed(3)}`,
			};
		} else {
			alert(
				"Something went wrong! Please report from what unit to what unit you where converting and in which text input you typed and what value you typed."
			);

			return { resultValue: 0 };
		}
	}
};

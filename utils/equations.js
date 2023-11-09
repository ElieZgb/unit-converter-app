export const equations = [
	//! LENGTH EQUATIONS START //
	{
		units: ["Meter", "Kilometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n / 1000) ||
				(convertFromUnit === "Kilometer" && n * 1000) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Decimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 10) ||
				(convertFromUnit === "Decimeter" && n / 10) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Centimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 100) ||
				(convertFromUnit === "Centimeter" && n / 100) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Millimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1000) ||
				(convertFromUnit === "Millimeter" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Micrometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1000000) ||
				(convertFromUnit === "Micrometer" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Nanometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1000000000) ||
				(convertFromUnit === "Nanometer" && n / 1000000000) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Mile"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 0.0006213712) ||
				(convertFromUnit === "Mile" && n / 0.0006213712) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Yard"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1.0936132983) ||
				(convertFromUnit === "Yard" && n / 1.0936132983) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Foot"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 3.280839895) ||
				(convertFromUnit === "Foot" && n / 3.280839895) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Inch"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 39.37007874) ||
				(convertFromUnit === "Inch" && n / 39.37007874) ||
				""
			);
		},
	},
	{
		units: ["Meter", "LightYear"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1.057000834e-16) ||
				(convertFromUnit === "LightYear" && n / 1.057000834e-16) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Exameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e-18) ||
				(convertFromUnit === "Exameter" && n / 1e-18) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Petameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e-15) ||
				(convertFromUnit === "Petameter" && n / 1e-15) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Terameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e-12) ||
				(convertFromUnit === "Terameter" && n / 1e-12) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Gigameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e-9) ||
				(convertFromUnit === "Gigameter" && n / 1e-9) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Megameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 0.000001) ||
				(convertFromUnit === "Megameter" && n / 0.000001) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Hectometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 0.01) ||
				(convertFromUnit === "Hectometer" && n / 0.01) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Dekameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 0.1) ||
				(convertFromUnit === "Dekameter" && n / 0.1) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Micron"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1000000) ||
				(convertFromUnit === "Micron" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Picometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e12) ||
				(convertFromUnit === "Picometer" && n / 1e12) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Femtometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e15) ||
				(convertFromUnit === "Femtometer" && n / 1e15) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Attometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 1e18) ||
				(convertFromUnit === "Attometer" && n / 1e18) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Megaparsec"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 3.240779289e-23) ||
				(convertFromUnit === "Megaparsec" && n / 3.240779289e-23) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Kiloparsec"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 3.240779289e-20) ||
				(convertFromUnit === "Kiloparsec" && n / 3.240779289e-20) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Parsec"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 3.240779289e-17) ||
				(convertFromUnit === "Parsec" && n / 3.240779289e-17) ||
				""
			);
		},
	},
	{
		units: ["Meter", "Astronomical Unit"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter" && n * 6.684587122e-12) ||
				(convertFromUnit === "Astronomical Unit" &&
					n / 6.684587122e-12) ||
				""
			);
		},
	},
	//! LENGTH EQUATIONS END //

	//! AREA EQUATIONS START //
	{
		units: ["SquareMeter", "SquareKilometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.000001) ||
				(convertFromUnit === "SquareKilometer" && n / 0.000001) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareCentimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 10000) ||
				(convertFromUnit === "SquareCentimeter" && n / 10000) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareDecimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 100) ||
				(convertFromUnit === "SquareDecimeter" && n / 100) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareMillimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1000000) ||
				(convertFromUnit === "SquareMillimeter" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareMicrometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1e12) ||
				(convertFromUnit === "SquareMicrometer" && n / 1e12) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareNanometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1e18) ||
				(convertFromUnit === "SquareNanometer" && n / 1e18) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "Hectare"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.0001) ||
				(convertFromUnit === "Hectare" && n / 0.0001) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "Acre"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.0002471054) ||
				(convertFromUnit === "Acre" && n / 0.0002471054) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareMile"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 3.861021585e-7) ||
				(convertFromUnit === "SquareMile" && n / 3.861021585e-7) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareYard"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1.1959900463) ||
				(convertFromUnit === "SquareYard" && n / 1.1959900463) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareFoot"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 10.763910417) ||
				(convertFromUnit === "SquareFoot" && n / 10.763910417) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareInch"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1550.0031) ||
				(convertFromUnit === "SquareInch" && n / 1550.0031) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareHectometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.0001) ||
				(convertFromUnit === "SquareHectometer" && n / 0.0001) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "SquareDekameter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.01) ||
				(convertFromUnit === "SquareDekameter" && n / 0.01) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "Are"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 0.01) ||
				(convertFromUnit === "Are" && n / 0.01) ||
				""
			);
		},
	},
	{
		units: ["SquareMeter", "Barn"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "SquareMeter" && n * 1e28) ||
				(convertFromUnit === "Barn" && n / 1e28) ||
				""
			);
		},
	},
	//! AREA EQUATIONS END //

	//! ANGLE EQUATIONS START //
	{
		units: ["Degree", "Radian"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 0.0174532925) ||
				(convertFromUnit === "Radian" && n / 0.0174532925) ||
				""
			);
		},
	},
	{
		units: ["Degree", "Grad"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 1.1111111111) ||
				(convertFromUnit === "Grad" && n / 1.1111111111) ||
				""
			);
		},
	},
	{
		units: ["Degree", "Revolution"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 0.0027777778) ||
				(convertFromUnit === "Revolution" && n / 0.0027777778) ||
				""
			);
		},
	},
	{
		units: ["Degree", "Circle"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 0.0027777778) ||
				(convertFromUnit === "Circle" && n / 0.0027777778) ||
				""
			);
		},
	},
	{
		units: ["Degree", "Quadrant"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 0.0111111111) ||
				(convertFromUnit === "Quadrant" && n / 0.0111111111) ||
				""
			);
		},
	},
	{
		units: ["Degree", "Right Angle"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Degree" && n * 0.0111111111) ||
				(convertFromUnit === "Right Angle" && n / 0.0111111111) ||
				""
			);
		},
	},
	//! ANGLE EQUATIONS END //

	//! SPEED EQUATIONS START //
	{
		units: ["Meter/Second", "Kilometer/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter/Second" && n * 3.6) ||
				(convertFromUnit === "Kilometer/Hour" && n / 3.6) ||
				""
			);
		},
	},
	{
		units: ["Meter/Second", "Mile/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter/Second" && n * 2.2369362921) ||
				(convertFromUnit === "Mile/Hour" && n / 2.2369362921) ||
				""
			);
		},
	},
	{
		units: ["Meter/Second", "Foot/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter/Second" && n * 11811.023622) ||
				(convertFromUnit === "Foot/Hour" && n / 11811.023622) ||
				""
			);
		},
	},
	{
		units: ["Meter/Second", "Yard/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter/Second" && n * 3937.007874) ||
				(convertFromUnit === "Yard/Hour" && n / 3937.007874) ||
				""
			);
		},
	},
	{
		units: ["Meter/Second", "Knot"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Meter/Second" && n * 1.9438444924) ||
				(convertFromUnit === "Knot" && n / 1.9438444924) ||
				""
			);
		},
	},
	//! SPEED EQUATIONS END //

	//! TEMPERATURE EQUATIONS START //
	{
		units: ["Celcius", "Fahrenheit"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Celcius" && (n * 9) / 5 + 32) ||
				(convertFromUnit === "Fahrenheit" && (n - 32) * (5 / 9)) ||
				""
			);
		},
	},
	{
		units: ["Celcius", "Kelvin"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Celcius" && parseInt(n) + 273.15) ||
				(convertFromUnit === "Kelvin" && parseInt(n) - 273.15) ||
				""
			);
		},
	},
	{
		units: ["Celcius", "Rankine"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Celcius" && n * (9 / 5) + 491.67) ||
				(convertFromUnit === "Rankine" && (n - 491.67) * (5 / 9)) ||
				""
			);
		},
	},
	{
		units: ["Celcius", "Reaumur"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Celcius" && n * 0.8) ||
				(convertFromUnit === "Reaumur" && n / 0.8) ||
				""
			);
		},
	},
	//! TEMPERATURE EQUATIONS END //
	//! TIME EQUATIONS START //
	{
		units: ["Second", "Microsecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1e6) ||
				(convertFromUnit === "Microsecond" && n / 1e6) ||
				""
			);
		},
	},
	{
		units: ["Second", "Nanosecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1e9) ||
				(convertFromUnit === "Nanosecond" && n / 1e9) ||
				""
			);
		},
	},
	{
		units: ["Second", "Picosecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1e12) ||
				(convertFromUnit === "Picosecond" && n / 1e12) ||
				""
			);
		},
	},
	{
		units: ["Second", "Femtosecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1e15) ||
				(convertFromUnit === "Femtosecond" && n / 1e15) ||
				""
			);
		},
	},
	{
		units: ["Second", "Attosecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1e18) ||
				(convertFromUnit === "Attosecond" && n / 1e18) ||
				""
			);
		},
	},
	{
		units: ["Second", "Millisecond"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n * 1000) ||
				(convertFromUnit === "Millisecond" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["Second", "Minute"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 60) ||
				(convertFromUnit === "Minute" && n * 60) ||
				""
			);
		},
	},
	{
		units: ["Second", "Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 3600) ||
				(convertFromUnit === "Hour" && n * 3600) ||
				""
			);
		},
	},
	{
		units: ["Second", "Day"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 86400) ||
				(convertFromUnit === "Day" && n * 86400) ||
				""
			);
		},
	},
	{
		units: ["Second", "Week"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 604800) ||
				(convertFromUnit === "Week" && n * 604800) ||
				""
			);
		},
	},
	{
		units: ["Second", "Month"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 2.628e6) ||
				(convertFromUnit === "Month" && n * 2.628e6) ||
				""
			);
		},
	},
	{
		units: ["Second", "Year"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 3.154e7) ||
				(convertFromUnit === "Year" && n * 3.154e7) ||
				""
			);
		},
	},
	{
		units: ["Second", "Decade"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 3.154e8) ||
				(convertFromUnit === "Decade" && n * 3.154e8) ||
				""
			);
		},
	},
	{
		units: ["Second", "Century"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 3.154e9) ||
				(convertFromUnit === "Century" && n * 3.154e9) ||
				""
			);
		},
	},
	{
		units: ["Second", "Millennium"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 3.154e10) ||
				(convertFromUnit === "Millennium" && n * 3.154e10) ||
				""
			);
		},
	},
	{
		units: ["Second", "Planck Time"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Second" && n / 1.855e43) ||
				(convertFromUnit === "Planck Time" && n * 1.855e43) ||
				""
			);
		},
	},
	//! TIME EQUATIONS END //
	//! VOLUME EQUATIONS START //
	{
		units: ["CubicMeter", "CubicKilometer"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n / 1e9) ||
				(convertFromUnit === "CubicKilometer" && n * 1e9) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "CubicCentimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1e6) ||
				(convertFromUnit === "CubicCentimeter" && n / 1e6) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "CubicMillimeter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1e9) ||
				(convertFromUnit === "CubicMillimeter" && n / 1e9) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Liter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1000) ||
				(convertFromUnit === "Liter" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Deciliter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 10000) ||
				(convertFromUnit === "Deciliter" && n / 10000) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Centiliter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 100000) ||
				(convertFromUnit === "Centiliter" && n / 100000) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Milliliter"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1000000) ||
				(convertFromUnit === "Milliliter" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Gallon (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 264.2) ||
				(convertFromUnit === "Gallon (US)" && n / 264.2) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Quart (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1057) ||
				(convertFromUnit === "Quart (US)" && n / 1057) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Pint (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1760) ||
				(convertFromUnit === "Pint (US)" && n / 1760) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Tablespoon (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 67630) ||
				(convertFromUnit === "Tablespoon (US)" && n / 67630) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Tablespoon (UK)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 56310) ||
				(convertFromUnit === "Tablespoon (UK)" && n / 56310) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Teaspoon (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 202900) ||
				(convertFromUnit === "Teaspoon (US)" && n / 202900) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Teaspoon (UK)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 168900) ||
				(convertFromUnit === "Teaspoon (UK)" && n / 168900) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Barrel (oil)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 6.29) ||
				(convertFromUnit === "Barrel (oil)" && n / 6.29) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "FluidOunce (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 33810) ||
				(convertFromUnit === "FluidOunce (US)" && n / 33810) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "FluidOunce (UK)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 35200) ||
				(convertFromUnit === "FluidOunce (UK)" && n / 35200) ||
				""
			);
		},
	},
	{
		units: ["CubicMeter", "Stere"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "CubicMeter" && n * 1) ||
				(convertFromUnit === "Stere" && n / 1) ||
				""
			);
		},
	},
	//! VOLUME EQUATIONS END //
	//! WEIGHT EQUATIONS START //
	{
		units: ["Gram", "Kilogram"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n / 1000) ||
				(convertFromUnit === "Kilogram" && n * 1000) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Milligram"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 1000) ||
				(convertFromUnit === "Milligram" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Tonne"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n / 1e6) ||
				(convertFromUnit === "Tonne" && n * 1e6) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Pound"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n / 453.6) ||
				(convertFromUnit === "Pound" && n * 453.6) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Ounce"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n / 28.35) ||
				(convertFromUnit === "Ounce" && n * 28.35) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Carat"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 5) ||
				(convertFromUnit === "Carat" && n / 5) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Atomic Mass Unit"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 6.0221366516752e23) ||
				(convertFromUnit === "Atomic Mass Unit" &&
					n / 6.0221366516752e23) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Dalton"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 6.02217364335e23) ||
				(convertFromUnit === "Dalton" && n / 6.02217364335e23) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Stone (US)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 0.0001763698) ||
				(convertFromUnit === "Stone (US)" && n / 0.0001763698) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Stone (UK)"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 0.000157473) ||
				(convertFromUnit === "Stone (UK)" && n / 0.000157473) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Gamma"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 1000000) ||
				(convertFromUnit === "Gamma" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Planck Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 45950) ||
				(convertFromUnit === "Planck Mass" && n / 45950) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Muon Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 5.3091724927313e24) ||
				(convertFromUnit === "Muon Mass" && n / 5.3091724927313e24) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Proton Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 5.9786332019449e23) ||
				(convertFromUnit === "Proton Mass" && n / 5.9786332019449e23) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Neutron Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 5.9704037533301e23) ||
				(convertFromUnit === "Neutron Mass" &&
					n / 5.9704037533301e23) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Deuteron Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n * 2.9908008946084e23) ||
				(convertFromUnit === "Deuteron Mass" &&
					n / 2.9908008946084e23) ||
				""
			);
		},
	},
	{
		units: ["Gram", "Earth Mass"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Gram" && n / 5.972e27) ||
				(convertFromUnit === "Earth Mass" && n * 5.972e27) ||
				""
			);
		},
	},
	//! WEIGHT EQUATIONS END //
	//! PRESSURE EQUATIONS START //
	{
		units: ["Pascal", "Kilopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1000) ||
				(convertFromUnit === "Kilopascal" && n * 1000) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Hectopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 100) ||
				(convertFromUnit === "Hectopascal" && n * 100) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Dekapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 10) ||
				(convertFromUnit === "Dekapascal" && n * 10) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Decipascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 10) ||
				(convertFromUnit === "Decipascal" && n / 10) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Centipascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 100) ||
				(convertFromUnit === "Centipascal" && n / 100) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Millipascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 1000) ||
				(convertFromUnit === "Millipascal" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Micropascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 1e6) ||
				(convertFromUnit === "Micropascal" && n / 1e6) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Nanopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 1e9) ||
				(convertFromUnit === "Nanopascal" && n / 1e9) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Bar"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 100000) ||
				(convertFromUnit === "Bar" && n * 100000) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Psi"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 6895) ||
				(convertFromUnit === "Psi" && n * 6895) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Ksi"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 6.895e6) ||
				(convertFromUnit === "Ksi" && n * 6.895e6) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Standard Atmosphere"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 101300) ||
				(convertFromUnit === "Standard Atmosphere" && n * 101300) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Exapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1e18) ||
				(convertFromUnit === "Exapascal" && n * 1e18) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Petapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1e15) ||
				(convertFromUnit === "Petapascal" && n * 1e15) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Terapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1e12) ||
				(convertFromUnit === "Terapascal" && n * 1e12) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Gigapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1e9) ||
				(convertFromUnit === "Gigapascal" && n * 1e9) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Megapascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1e6) ||
				(convertFromUnit === "Megapascal" && n * 1e6) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Picopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 1000) ||
				(convertFromUnit === "Picopascal" && n * 1000) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Femtopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 100) ||
				(convertFromUnit === "Femtopascal" && n * 100) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Attopascal"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 1.0e18) ||
				(convertFromUnit === "Attopascal" && n / 1.0e18) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Torr"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 133.3) ||
				(convertFromUnit === "Torr" && n * 133.3) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Centimeter mercury"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n * 0.00075) ||
				(convertFromUnit === "Centimeter mercury" && n / 0.00075) ||
				""
			);
		},
	},
	{
		units: ["Pascal", "Centimeter water"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Pascal" && n / 98.066) ||
				(convertFromUnit === "Centimeter water" && n * 98.066) ||
				""
			);
		},
	},
	//! PRESSURE EQUATIONS END //
	//! POWER EQUATIONS START //
	{
		units: ["Watt", "Kilowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1000) ||
				(convertFromUnit === "Kilowatt" && n * 1000) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Hectowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 100) ||
				(convertFromUnit === "Hectowatt" && n * 100) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Dekawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 10) ||
				(convertFromUnit === "Dekawatt" && n * 10) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Deciwatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 10) ||
				(convertFromUnit === "Deciwatt" && n / 10) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Centiwatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 100) ||
				(convertFromUnit === "Centiwatt" && n / 100) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Milliwatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1000) ||
				(convertFromUnit === "Milliwatt" && n / 1000) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Microwatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1000000) ||
				(convertFromUnit === "Microwatt" && n / 1000000) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Nanowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1e9) ||
				(convertFromUnit === "Nanowatt" && n / 1e9) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Picowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1e12) ||
				(convertFromUnit === "Picowatt" && n / 1e12) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Femtowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1e15) ||
				(convertFromUnit === "Femtowatt" && n / 1e15) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Attowatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 1e18) ||
				(convertFromUnit === "Attowatt" && n / 1e18) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Exawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1e18) ||
				(convertFromUnit === "Exawatt" && n * 1e18) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Petawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1e15) ||
				(convertFromUnit === "Petawatt" && n * 1e15) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Terawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1e12) ||
				(convertFromUnit === "Terawatt" && n * 1e12) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Gigawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1e9) ||
				(convertFromUnit === "Gigawatt" && n * 1e9) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Megawatt"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 1e6) ||
				(convertFromUnit === "Megawatt" && n * 1e6) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Horsepower Mechanical"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 745.699872) ||
				(convertFromUnit === "Horsepower Mechanical" &&
					n * 745.699872) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Horsepower Electrical"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 746) ||
				(convertFromUnit === "Horsepower Electrical" && n * 746) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Horsepower Metric"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n / 735.49875) ||
				(convertFromUnit === "Horsepower Metric" && n * 735.49875) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Kilocalorie/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 0.8598452279) ||
				(convertFromUnit === "Kilocalorie/Hour" && n / 0.8598452279) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Calorie/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 859.85) ||
				(convertFromUnit === "Calorie/Hour" && n / 859.85) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Joule/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 3600) ||
				(convertFromUnit === "Joule/Hour" && n / 3600) ||
				""
			);
		},
	},
	{
		units: ["Watt", "Kilojoule/Hour"],
		calculate: (n, convertFromUnit) => {
			return (
				(convertFromUnit === "Watt" && n * 3.6) ||
				(convertFromUnit === "Kilojoule/Hour" && n / 3.6) ||
				""
			);
		},
	},
	//! POWER EQUATIONS END //
	//! DATA EQUATIONS START //
	{
		units: ["Decimal", "Binary"],
		calculate: (n, convertFromUnit) => {
			if (convertFromUnit === "Decimal") {
				if (n === "wrong format") return "wrong format";
				let binary = "";
				let dividande = n;
				let quotient = 0;
				let reste = 0;

				if (dividande < 2) quotient = dividande;
				else {
					while (dividande >= 2) {
						// If I write dividande / 2, I get the result to the division which is a float number,
						// but i only want the integer part of it (quotient)
						quotient = (dividande - (dividande % 2)) / 2;
						reste = dividande % 2;
						dividande = quotient;
						binary += reste;
					}
				}

				binary += quotient;
				let temp1 = binary.split("");
				binary = "";

				for (let i = temp1.length - 1; i >= 0; i--) {
					binary += temp1[i];
				}

				return binary;
			} else if (convertFromUnit === "Binary") {
				const re = /[2-9.]/;
				if (re.test(n)) {
					return "wrong format";
				}

				let decimal = 0;
				for (let i = 0, exp = n.length - 1; exp >= 0; exp--, i++) {
					decimal += parseInt(n[i]) * Math.pow(2, exp);
				}
				return decimal;
			} else {
				return "";
			}
		},
	},
	{
		units: ["Decimal", "Octal"],
		calculate: (n, convertFromUnit) => {
			if (convertFromUnit === "Decimal") {
				let octal = "";
				let dividande = n;
				let quotient = 0;
				let reste = 0;

				if (dividande < 8) quotient = dividande;
				else {
					while (dividande >= 8) {
						quotient = (dividande - (dividande % 8)) / 8;
						reste = dividande % 8;
						dividande = quotient;
						octal += reste;
					}
				}

				octal += quotient;
				let temp1 = octal.split("");
				octal = "";

				for (let i = temp1.length - 1; i >= 0; i--) {
					octal += temp1[i];
				}

				return octal;
			} else if (convertFromUnit === "Octal") {
				const re = /[8-9.]/;
				if (re.test(n)) {
					return "wrong format";
				}

				let decimal = 0;
				for (let i = 0, exp = n.length - 1; exp >= 0; exp--, i++) {
					decimal += parseInt(n[i]) * Math.pow(8, exp);
				}
				return decimal;
			} else {
				return "";
			}
		},
	},
	{
		units: ["Decimal", "Hexadecimal"],
		calculate: (n, convertFromUnit) => {
			if (convertFromUnit === "Decimal") {
				let hex = "";
				let dividande = n;
				let quotient = 0;
				let reste = 0;

				if (dividande < 16) quotient = dividande;
				else {
					while (dividande >= 16) {
						quotient = (dividande - (dividande % 16)) / 16;
						reste = dividande % 16;
						dividande = quotient;

						if (reste === 10) hex += "A";
						else if (reste === 11) hex += "B";
						else if (reste === 12) hex += "C";
						else if (reste === 13) hex += "D";
						else if (reste === 14) hex += "E";
						else if (reste === 15) hex += "F";
						else hex += reste;
					}
				}

				if (quotient === 10) hex += "A";
				else if (quotient === 11) hex += "B";
				else if (quotient === 12) hex += "C";
				else if (quotient === 13) hex += "D";
				else if (quotient === 14) hex += "E";
				else if (quotient === 15) hex += "F";
				else hex += quotient;

				let temp1 = hex.split("");
				hex = "";

				for (let i = temp1.length - 1; i >= 0; i--) hex += temp1[i];

				return hex;
			} else if (convertFromUnit === "Hexadecimal") {
				let decimal = 0;
				for (let i = 0, exp = n.length - 1; exp >= 0; exp--, i++) {
					switch (n[i].toUpperCase()) {
						case "A":
							decimal += 10 * Math.pow(16, exp);
							break;
						case "B":
							decimal += 11 * Math.pow(16, exp);
							break;
						case "C":
							decimal += 12 * Math.pow(16, exp);
							break;
						case "D":
							decimal += 13 * Math.pow(16, exp);
							break;
						case "E":
							decimal += 14 * Math.pow(16, exp);
							break;
						case "F":
							decimal += 15 * Math.pow(16, exp);
							break;
						default:
							decimal += parseInt(n[i]) * Math.pow(16, exp);
							break;
					}
				}
				return decimal;
			} else {
				return "";
			}
		},
	},
	//! DATA EQUATIONS END //
	//! CURRENCY EQUATIONS START //
	//* API *//
	//! CURRENCY EQUATIONS END //
];

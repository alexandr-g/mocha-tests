function getData () {
	return ["#dddddd", "#900455", "#FFFF00"];
};

module.exports = function () {
	var palette = getData();

	if (!Array.isArray(palette)) {
		throw new Error("Palette is not an array");	
	}

	return palette;
};
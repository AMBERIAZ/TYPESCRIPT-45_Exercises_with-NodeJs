//assignment no : 45
function create_Car(manufacturer, model) {
    var properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        properties[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        properties: properties,
    };
    for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
        var _b = properties_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
//example usage
var myCar = create_Car("toyota", "carolla", ["color", "red"], ["optionalFeature", "sunroof"], ["speed", "180 km/hour"]);
console.log(myCar);

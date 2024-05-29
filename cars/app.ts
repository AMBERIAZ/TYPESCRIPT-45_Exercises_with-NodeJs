//assignment no : 45

function create_Car(manufacturer: string, model: string, ...
    properties: [string, any][]
): any{
    const car: any = {
        manufacturer: manufacturer,
        model: model,
        properties: properties,
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}

//example usage
const myCar = create_Car("toyota", "carolla", ["color", "red"], ["optionalFeature", "sunroof"], ["speed", "180 km/hour"]);

console.log(myCar);
// function multiplyValue(value: number, multiplier?: number) {

// if(multiplier === undefined ){
// return value * 2
// }

// if(multiplier !== undefined) {
//     return value * multiplier
//   }
//  if(value && undefined){
//     return undefined
//  }
// }

// function processInput(value: string | number | boolean) {
//     if (typeof value === "string") {
//         return value.trim().toLowerCase();
//     }

//     if (typeof value === "number") {
//         return value * 10;
//     }

//     if (typeof value === "boolean") {
//         return value ? "Active" : "Inactive";
//     }
// }

function formatCoordinate(coordinate: readonly [number, number, string]) {
  const [latitude, longitude, locationName] = coordinate;

  return `location: ${locationName} ($${latitude}, ${longitude})`;
}

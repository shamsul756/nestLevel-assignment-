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

// function formatCoordinate(coordinate: readonly [number, number, string]) {
//   const [latitude, longitude, locationName] = coordinate;

//   return `location: ${locationName} ($${latitude}, ${longitude})`;
// }

// function concatenateArrays<T>(...arrays: T[][]):T[]{
// return (([] as T[]).concat(...arrays))
// }

// interface Course {
//   title: string;
//   students: number;
//   isPublished: boolean;
// }

// function getPopularCourses(
//     courses : Course[],
//    minStudents : number
// ): Course[]{
//    return courses.filter((course) => {
//         return cou>rse.isPublished === true &&
//                course.students >= minStudents;
//     });
// }

function pluckValues<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((i) => i[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];



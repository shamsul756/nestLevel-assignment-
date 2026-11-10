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

// function pluckValues<T, K extends keyof T>(array: T[], key: K): T[K][] {
//   return array.map((i) => i[key]);
// }

// const users = [
//   { id: 1, name: "Rakib", role: "Admin" },
//   { id: 2, name: "Sadia", role: "Editor" },
//   { id: 3, name: "Tariq", role: "Subscriber" },
// ];

class Employee {
  public name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    console.log(`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
  }
}
class Manager extends Employee {
  public department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}





import { Semester } from "../semester";

export class Professor {
  name: string;
  email: string;
  registration: number;
  semesters: [Semester];
  salary: number;
}

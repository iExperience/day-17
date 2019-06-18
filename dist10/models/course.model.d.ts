import { Entity } from '@loopback/repository';
export declare class Course extends Entity {
    id?: number;
    name?: string;
    constructor(data?: Partial<Course>);
}
export interface CourseRelations {
}
export declare type CourseWithRelations = Course & CourseRelations;

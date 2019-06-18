import {Entity, model, property} from '@loopback/repository';

@model({settings: {}, name: 'course'})
export class Course extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    mysql: {
      columnName: 'n_a_m_e',
    },
  })
  name?: string;

  constructor(data?: Partial<Course>) {
    super(data);
  }
}

export interface CourseRelations {
  // describe navigational properties here
}

export type CourseWithRelations = Course & CourseRelations;

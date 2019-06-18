import {get, post, requestBody} from '@loopback/rest';
import {repository} from '@loopback/repository';
import {CourseRepository} from '../repositories';

export class CourseController {
  constructor(
    @repository(CourseRepository.name)
    private courseRepo: CourseRepository,
  ) {}

  @get('/courses')
  async getCourses(): Promise<Array<any>> {
    const courses = await this.courseRepo.find();
    return courses;
  }

  @post('/courses')
  async createCourse(@requestBody() courseData: any): Promise<any> {
    await this.courseRepo.create(courseData);
  }
}

/*
async () => {
  const courseCtrl = new CourseController();
  try {
    const courses = await courseCtrl.getCourses();
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Finished');
  }
};
*/

/*
const courseCtrl = new CourseController();
courseCtrl
  .getCourses()
  .then(courses => {

  })
  .catch(err => {

  })
  .finally(() => {
    console.log('I am done');
  });
*/

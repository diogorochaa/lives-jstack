type CourseDomain = {
  name: string;
  tags: string[];
}

type CourseAPI = {
  course: {
    name: string;
    tags?: string[];
  }
}

export class CourseMapper {
  static toDomain(courseAPI: CourseAPI): CourseDomain {
    return {
      name: courseAPI.course.name,
      tags: courseAPI.course.tags ?? [],
    };
  }
  
  static toAPI(courseDomain: CourseDomain): CourseAPI {
    return {
      course: {
        name: courseDomain.name,
        tags: courseDomain.tags,
      },
    };
  }
}

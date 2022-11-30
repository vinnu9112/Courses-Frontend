package com.springrest.springrest.service;

// import java.util.ArrayList;
import java.util.List;
// import java.util.stream.Collectors;
// import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entity.Course;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDao courseDao;

    // List<Course> list;

    public CourseServiceImpl(){
        // list = new ArrayList<>();
        // list.add(new Course(145, "Java Course","This Course contains basics of java"));
        // list.add(new Course(4343, "React JS","This Course contains basics of react"));
    }

    @Override
    public List<Course> getCourses() {
       
        // return list;
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        // Course c = null;
        // for (Course course : list) {
        //     if (course.getId()==courseId) {
        //         c = course;
        //         break;
        //     }
        // }
        // return c;
        return courseDao.getCourseById(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        // list.add(course);
        // return course;
        courseDao.save(course);
        return course;
    }

    @Override
    public Course updateCourse(Course course) {
        // Course c = null;
        // list.forEach(e->{
        //     if (e.getId() == course.getId()) {
        //         e.setTitle(course.getTitle());
        //         e.setDescription(course.getDescription());
                
        //     }
        // });
        // return c;
        courseDao.save(course);
        return course;
    }

    @Override
    public void deleteCourse(long parseLong) {
        // list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());        
        Course entity = courseDao.getReferenceById(parseLong);
        courseDao.delete(entity);
    }

   
   
   
    
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";


const Courses = () => {
  const [courseList, setCourseList] = useState([
    { id: 1, title: "React Basics", description: "Learn the fundamentals of React.", totalEnrollments: 120, enrolledStudents: 0, path: "/ReactBasics" },
    { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript concepts.", totalEnrollments: 100, enrolledStudents: 0, path: "/AdvancedJavaScript" },
    { id: 3, title: "Node.js Backend", description: "Build REST APIs with Node.js.", totalEnrollments: 80, enrolledStudents: 0, path: "/NodeJsBackend" },
  ]);



  // const handleEnroll = (courseId) => {
  //   setCourseList((prevCourses) =>
  //     prevCourses.map((course) =>
  //       course.id === courseId ? { ...course, enrolledStudents: course.enrolledStudents + 1 } : course
  //     )
  //   );
  // };

  return (
    <div>
      <nav>
        <button onClick={() => window.location.href = "/login"}>Logout</button>
      </nav>

      <h1>Available Courses</h1>

      {/* Course Table */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Title</th>
            <th>Description</th>
            <th>Total Enrollment Slots</th>
            <th>Students Enrolled</th>
          </tr>
        </thead>
        <tbody>
          {courseList.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td><Link to={course.path} className="course-link">{course.title}</Link></td>
              <td>{course.description}</td>
              <td>{course.totalEnrollments}</td>
              <td>{course.enrolledStudents}</td> {/* Live count updates dynamically */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
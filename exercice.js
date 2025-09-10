
// exercise.js
'use strict';

/*
 Mini in-memory backend: students + courses
*/

// ---------- In-memory stores ----------
const students = new Map(); // key: id, value: Student instance
const courses = new Map();  // key: id, value: Course instance

// ---------- Classes ----------
class Student {
  constructor(id, name, age, email) {
    this.id = id;               // string or number
    this.name = name;
    this.age = age;
    this.email = email;
    this.courses = new Set();   // store course ids
  }

  enroll(courseId) {
    this.courses.add(courseId);
  }

  leave(courseId) {
    this.courses.delete(courseId);
  }

  listCourses() {
    return Array.from(this.courses);
  }
}

class Course {
  constructor(id, title, durationHours = 1) {
    this.id = id;
    this.title = title;
    this.duration = durationHours;
  }
}

// ---------- Functions (to implement) ----------

// 1) addStudent(obj)
//  - accepts object { id, name, age, email }
//  - stores in `students` Map

function addStudent({ id, name, age, email }) {
  // TODO: implement using const/let, check duplicate id
  if(!students.has(id)) {
    students.set(id, new Student(id, name, age, email))
  }
}

// 2) addCourse(obj)
//  - accepts object { id, title, duration }
//  - stores in `courses` Map
function addCourse({ id, title, duration = 1 }) {
  // TODO
    if(!courses.has(id)) {
      students.set(id, new Course(id, title, duration));
    }
}

// 3) findStudentByEmail(email) -> Student or null
function findStudentByEmail(email) {
  // TODO: iterate Map and match email
    for(const item of students) {
        if(item.email == students.email) {
            console.log(item)
        }
    }
}

// 4) enrollStudentToCourse(studentId, courseId) -> Student
function enrollStudentToCourse(studentId, courseId) {
  // TODO: check student and course exist, use student.enroll()
  const student = students.get(studentId)
    if(students.has(studentId) && courses.has(courseId)) {
         student.enroll(courseId)
    }
}

// 5) getStudentsInCourse(courseId) -> array of student objects (simple)
function getStudentsInCourse(courseId) {
  // TODO: iterate students and filter by Set.has(courseId)
  for(const student of students) {
    student.has(courseId)
  }
}

// 6) averageAge() -> number (use array reduce)
function averageAge() {
  // TODO
  const totalAge = students.values().reduce((accumulator, item) => accumulator += item,0);
  const avg = totalAge / students.size

  console.log(avg)
}

// averageAge()



// 7) listAllStudents() -> array of { id, name, email }
function listAllStudents() {
  // TODO
  const newArray = []
  for(const item of students.values()) {
    newArray.push(item)
  }
}

listAllStudents()

// ---------- Seed & demo runner (não mexer inicialmente) ----------
function seed() {
  addCourse({ id: 'c1', title: 'JS Básico', duration: 4 });
  addCourse({ id: 'c2', title: 'Git & CLI', duration: 3 });
  addStudent({ id: 's1', name: 'Ana', age: 20, email: 'ana@example.com' });
  addStudent({ id: 's2', name: 'Bruno', age: 25, email: 'bruno@example.com' });
  enrollStudentToCourse('s1', 'c1');
  enrollStudentToCourse('s2', 'c1');
  enrollStudentToCourse('s2', 'c2');
}

function printState() {
  console.log('Students:', listAllStudents());
  console.log('Students in c1:', getStudentsInCourse('c1').map(s => s.name));
  console.log('Average age:', averageAge());
}

// expose for tests / REPL
module.exports = {
  Student,
  Course,
  students,
  courses,
  addStudent,
  addCourse,
  findStudentByEmail,
  enrollStudentToCourse,
  getStudentsInCourse,
  averageAge,
  listAllStudents,
  seed,
  printState,
};
use("Cruddb")
db

// db.createCollection("courses");

/* Insert operation */

// db.courses.insertOne({name:"javaScript",fee:0,tutor:"Hitesh & Harry",assignment:10,project:5,mode:"online",platform:"youtube"})

// db.courses.insert( [
//     {name:"javaScript", fee:0, tutor:"Hitesh & Harry", assignment:10, project:5, mode:"online", platform:"youtube"},
//     {name:"Python", fee:0, tutor:"John & Jane", assignment:12, project:4, mode:"online", platform:"coursera"},
//     {name:"Java", fee:50, tutor:"Alice & Bob", assignment:8, project:3, mode:"offline", platform:"udemy"},
//     {name:"C++", fee:100, tutor:"Charlie & Dave", assignment:15, project:7, mode:"online", platform:"edX"},
//     {name:"Ruby", fee:30, tutor:"Eve & Frank", assignment:10, project:5, mode:"online", platform:"codecademy"},
//     {name:"HTML & CSS", fee:0, tutor:"Grace & Heidi", assignment:5, project:2, mode:"online", platform:"youtube"},
//     {name:"SQL", fee:20, tutor:"Ivan & Judy", assignment:7, project:3, mode:"offline", platform:"coursera"},
//     {name:"React", fee:75, tutor:"Karl & Leo", assignment:12, project:6, mode:"online", platform:"udemy"},
//     {name:"Node.js", fee:50, tutor:"Mona & Nina", assignment:10, project:5, mode:"online", platform:"edX"},
//     {name:"Swift", fee:60, tutor:"Oscar & Pam", assignment:8, project:4, mode:"offline", platform:"codecademy"},
//     {name:"Kotlin", fee:40, tutor:"Quinn & Raj", assignment:9, project:5, mode:"online", platform:"youtube"}
//   ])

/* Find operation */

let course=db.courses.find({fee:0});
// console.log(course);
// console.log(course.count());
// console.log(course.toArray());
let courseone=db.courses.findOne({fee:0});
// console.log(courseone);

/* Update operation */

// db.courses.updateOne({fee:0},{$set:{fee:100}})
// db.courses.updateMany({fee:0},{$set:{fee:99}})

/* Delete Operation */

// db.courses.deleteOne({fee:99})
// db.courses.deleteMany({fee:99})

/* Query Operator */

let notpresent=db.courses.find({price:{$ne:99}})
console.log(notpresent.toArray());

















// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function points_possible (id , assignments) {
console.log(id)
console.log(assignments)

}

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];
  let ids = []
  console.log(submissions[0].learner_id)
for(let i = 0 ; i < submissions.length; i++){
  if(!ids.includes(submissions[i].learner_id)){

    ids.push(submissions[i].learner_id)
  }
  points_possible(submissions[i].assignment_id, ag.assignments)
  console.log(submissions[i].submission.score)
}

console.log(ids);


function percentage (submission, ag){
 (submission.score/points_possible * 100).toFixed(2)
  if ("assignment not due "){
    result = "not include in average"
    break;
if ("assignment not due"){
  result = "not include in keyed dictonary of scores"
}
  } else {
    result = " to be included in all"
  } 
  return result;
} ;
    


 console.log(percentage);

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
function add(x,y){
  console.log(x)
  console.log(y);
  console.log( x+y)
}
// add(3,5)
// let num = 6

// add(num, 4)




//{g(percentage)
    // the ID of the learner for which this data has been collected
 //   "id": number,




    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
 //   "avg": number,



    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
 //   <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
//}





//{
    // the ID of the learner for which this data has been collected
 //   "id": number,

//  const result = []; 

// const learners = [ id: 125, id: 132];
  
    


// // console.log(result);
// console.log(learners);



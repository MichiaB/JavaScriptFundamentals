


// Learner 125: total

 for (let i=0; i<LearnerSubmissions.length; i++){

  if (LearnerSubmissions[i].learner_id=== 125) {

    console.log(LearnerSubmissions[i]);
  }
  
}
  
    // Learner 125: Assignment w/ more points

 for (let i=0; i<AssignmentGroup.assignments.length; i++){

  if (AssignmentGroup.assignments[i].learner_id=== 125) {

    console.log(AssignmentGroup.assignments[i]);
  }
  
}
  
// Learner 125: weighted avg

 for (let i=0; i<getLearnerid.length; i++) {

 if (getLearnerData[i].learner_id=== 125) {

    console.log(getLearnerData[i]);
  }
}






// Learner 132: total

 for (let i=0; i<LearnerSubmissions.length; i++){

  if (LearnerSubmissions[i].learner_id === 132) {

    console.log(LearnerSubmissions[i]);
  }
  
}
  
    // Learner 132: Assignment w/ more points

 for (let i=0; i<AssignmentGroup.assignments.length; i++){

  if (AssignmentGroup.assignments[i].learner_id === 132) {

    console.log(AssignmentGroup.assignments[i]);
  }
  
}
  
// Learner 132: weighted avg

 for (let i=0; i<getLearnerData.length; i++) {

 if (getLearnerData[i].learner_id=== 132) {

    console.log(getLearnerData[i]);
 }
}


 LearnerTotalScore = 0

LearnerWeightedAvg = 0

for (let i=0,  getLearnerData   LearnerSubmissions.length, i++) {

    // add score
    LearnerTotalScore += LearnerSubmissions[i].submission.score;

  //   add points
    LearnerTotalPoints += 100;
};

  
let avg = LearnerTotalScore / LearnerTotalPoints; 



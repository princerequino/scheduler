 function matchIds(appointments, ids){
  const matched = ids.map(id => appointments[id]);
  return matched;
}

 function getAppointmentsForDay(state, day) {
  const appointmentsArray = [];

  state.days.map((dayItem) => {
    if (dayItem.name === day) {
      dayItem.appointments.filter((appointment) => {
        appointmentsArray.push(state.appointments[appointment]);
      });
    }
  });
  return appointmentsArray;
}

 function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerInfo = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewerInfo
  }
}



 function getInterviewersForDay(state, day) {

  let interviewersArr = [];
  state.days.map(dayObject => {
    if (dayObject.name === day) {
      dayObject.interviewers.forEach(interviewerId => interviewersArr.push(interviewerId))
    }
  })
  return matchIds(state.interviewers, interviewersArr);
};

export { matchIds , getInterviewersForDay, getInterview, getAppointmentsForDay };
 function matchIds(array, ids){
  const matched = ids.map(id => array[id]);
  return matched;
}

 function getAppointmentsForDay(state, day) {
  const appointmentsArray = [];
  // const dayItem = state.days.find((dayItem) => dayItem.name = day )
  // if (!dayItem) {
  //   return []
  // }
  // const appointments = dayItem.appointments.map((appointment) => state.appointments[appointment] )
  // return appointments



  // debugger;
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

  // const dayItem = state.days.find((dayItem) => dayItem.name = day )
  // const appointments = dayItem.appointments.map((appointment) => state.appointments[appointment] )
  // return appointments
  // debugger;
  // const dayObject = state.days.find((dayObject) =>dayObject.name = day )
  // if (!dayObject) {
  //   return []
  // }
  // return dayObject.interviewers

  let interviewersArr = [];
  state.days.map(dayObject => {
    if (dayObject.name === day) {
      dayObject.interviewers.forEach(interviewerId => interviewersArr.push(interviewerId))
    }
  })
  return matchIds(state.interviewers, interviewersArr);
};

export { matchIds , getInterviewersForDay, getInterview, getAppointmentsForDay };
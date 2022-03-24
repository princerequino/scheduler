const matchAppointments = (appointments, ids) => {
  const matched = ids.map(id => appointments[id]);
  return matched;
}

export function getAppointmentsForDay(state, day) {
  const appointmentsArray = [];

  state.days.filter((dayItem) => {
    if (dayItem.name === day) {
      dayItem.appointments.filter((appointment) => {
        appointmentsArray.push(state.appointments[appointment]);
      });
    }
  });
  return appointmentsArray;
}


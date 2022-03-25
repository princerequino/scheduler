import React from 'react';
import Form from 'components/Appointment/Form';
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import 'components/Appointment/styles.scss';
import useVisualMode from 'hooks/useVisualMode';


export default function Appointment(props) {

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const { mode, transition, back } = useVisualMode (
  props.interview ? SHOW : EMPTY
);
console.log("appointment props: ", props);
  return (

    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
       <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
       />
      )}  
      {mode === CREATE && <Form name={props.name} value={props.value} interviewers={props.interviewers} onCancel={back}/>}
    </article>
  )
}

import Score from "./Score";

const Student = (props) => {
  return ( 
    <div>
      <p><span>Student name:</span> {props.student.name}</p>
      <p><span>Student bio:</span> {props.student.bio}</p>
      <span>Student scores:</span>
      {props.student.scores.map(score => <Score key={score.score} score={score}/>)}
    </div>
   );
}
 
export default Student;
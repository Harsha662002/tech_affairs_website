import TeamMemberCSS from "./TeamMember.module.css";

export default function TeamMember(props) {
  return (
    <div className={TeamMemberCSS.team_element_full_photo}>
      <img
        className={TeamMemberCSS.team_element_photo}
        src={`/assests/images/developers/${props.image}`}
        alt="Photo"
      />
      <div className={TeamMemberCSS.team_element_photo_background}></div>
      <h2 className={TeamMemberCSS.team_element_fullname}>{props.name}</h2>
      <h4 className={TeamMemberCSS.team_element_rollno}>{props.rollno}</h4>
    </div>
  );
}

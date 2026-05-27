import { useNavigate } from "react-router-dom";
import "./ProfileActions.css";

function ProfileActions() {

  const navigate = useNavigate();

  return (

    <div className="profile-actions">

      <button onClick={() => navigate("/edit-profile")}>
        Edit Profile
      </button>


    </div>
  );
}

export default ProfileActions;
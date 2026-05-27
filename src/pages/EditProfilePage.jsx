import "./EditProfilePage.css";
import profilePic from "../assets/users/empty_dp.jpeg";
import Sidebar from "../components/common/Sidebar";

function EditProfilePage() {
  return (
    <div className="edit-layout">

      <Sidebar />

      <div className="edit-content">

        <h1>Edit profile</h1>

        {/* PROFILE BOX */}

        <div className="edit-profile-box">

          <div className="edit-user">

            <img
              src={profilePic}
              alt="profile"
              className="edit-avatar"
            />

            <div className="edit-user-info">
              <h3>username</h3>
              <p>user</p>
            </div>

          </div>

          <button className="change-photo-btn">
            Change photo
          </button>

        </div>

        {/* FORM */}

        <div className="edit-form">

          <div className="form-group">

            <label>Website</label>

            <input
              type="text"
              placeholder="Website"
            />

            <p className="helper-text">
              Editing your links is only available on mobile.
            </p>

          </div>

          <div className="form-group">

            <label>Bio</label>

            <textarea placeholder="Bio"></textarea>

          </div>

          <div className="form-group">

            <label>Gender</label>

            <select>
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
            </select>

          </div>

          {/* TOGGLE */}

          <div className="toggle-section">

            <div className="toggle-card">

              <div className="toggle-card-text">

                <h4>
                  Show account suggestions on profiles
                </h4>

                <p>
                  Choose whether people can see similar
                  account suggestions on your profile.
                </p>

              </div>

              <label className="toggle-switch">

                <input
                  type="checkbox"
                  defaultChecked
                />

                <span className="toggle-slider"></span>

              </label>

            </div>

          </div>

          {/* SUBMIT */}

          <div className="submit-btn-wrapper">

            <button className="submit-btn">
              Submit
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditProfilePage;
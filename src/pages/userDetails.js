import ProfileCard from "../components/ProfileCard/ProfileCard";

const UserDetails = () => {

  return (
    <div className="device-list" style={{ marginTop: "6rem", display: "flex", flexWrap: "wrap", padding: "16px", gap: "16px" }}>
      <ProfileCard/>
    </div>
  );
};

export default UserDetails;

import LoginPageCard from "../components/LoginPage/LoginPageCard";

const LoginPage = () => {
  return (
    <div
      className="device-list"
      style={{
        marginTop: "6rem",
        display: "flex",
        flexWrap: "wrap",
        padding: "16px",
        gap: "16px",
      }}
    >
      <LoginPageCard />
    </div>
  );
};

export default LoginPage;

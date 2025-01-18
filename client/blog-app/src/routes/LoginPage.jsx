import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div>
      <SignIn mode="modal" />
    </div>
  );
};

export default LoginPage;

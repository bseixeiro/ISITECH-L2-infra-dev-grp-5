import { FC, useState } from "react";
import { Button } from "./Button";
import { UserInfoInputs } from "./UserInfoInputs";

type IProps = {
  test: string;
};

const ConnexionPage: FC<IProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center border-stone-800 border-2 rounded p-5 bg-stone-800 w-80">
        <h2 className="text-white border-b-2 border-white p-2 mb-5 w-full text-center text-2xl">
          Connexion
        </h2>
        <UserInfoInputs
          email={email}
          onEmailChange={(e) => setEmail(e.target.value)}
          password={password}
          onPasswordChange={(e) => setPassword(e.target.value)}
          firstName={firstName}
          onFirstNameChange={(e) => setFirstName(e.target.value)}
          lastName={lastName}
          onLastNameChange={(e) => setLastName(e.target.value)}
        ></UserInfoInputs>
        <Button
          label="Connexion"
          onClick={() => console.log("")}
          className="m-2"
        ></Button>
      </div>
    </div>
  );
};

export { ConnexionPage };

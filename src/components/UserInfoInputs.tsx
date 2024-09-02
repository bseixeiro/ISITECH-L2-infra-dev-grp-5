import { ChangeEventHandler, FC } from "react";
import { Input } from "./Input";
import { ConnexionInputs } from "./ConnexionInputs";

type IProps = {
  onEmailChange: ChangeEventHandler<HTMLInputElement>;
  email: string;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  password: string;
  onFirstNameChange: ChangeEventHandler<HTMLInputElement>;
  firstName: string;
  onLastNameChange: ChangeEventHandler<HTMLInputElement>;
  lastName: string;
};

const UserInfoInputs: FC<IProps> = (props) => {
  const {
    onEmailChange,
    onFirstNameChange,
    onLastNameChange,
    onPasswordChange,
    email,
    password,
    firstName,
    lastName,
  } = props;
  return (
    <>
      <Input
        value={firstName}
        onChange={onFirstNameChange}
        label="First Name"
      ></Input>
      <Input
        value={lastName}
        onChange={onLastNameChange}
        label="Last Name"
      ></Input>
      <ConnexionInputs
        email={email}
        onEmailChange={onEmailChange}
        password={password}
        onPasswordChange={onPasswordChange}
      ></ConnexionInputs>
    </>
  );
};

export { UserInfoInputs };

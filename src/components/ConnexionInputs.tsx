import { ChangeEventHandler, FC } from "react";
import { Input } from "./Input";

type IProps = {
  onEmailChange: ChangeEventHandler<HTMLInputElement>;
  email: string;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  password: string;
};

const ConnexionInputs: FC<IProps> = (props) => {
  const { onEmailChange, onPasswordChange, email, password } = props;
  return (
    <>
      <Input
        value={email}
        onChange={onEmailChange}
        label="Email"
        className=" mb-2 p-2 min-w-100"
      ></Input>
      <Input
        value={password}
        onChange={onPasswordChange}
        label="Password"
        className="mb-2 p-2 min-w-80"
      ></Input>
    </>
  );
};

export { ConnexionInputs };

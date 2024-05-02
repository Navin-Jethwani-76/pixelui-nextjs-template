import React from "react";
import {
  Button,
  Card,
  CardBody,
  Link,
  Checkbox,
  Image,
  Divider,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import EmailInput from "../../components/Login/EmailInput";
import PasswordInput from "../../components/Login/PasswordInput";

const Separator = () => {
  return (
    <div className="flex items-center gap-4 py-2 w-full max-w-xs">
      <Divider className="flex-1" />
      <p className="shrink-0 text-tiny text-default-500">OR</p>
      <Divider className="flex-1" />
    </div>
  );
};

const SocialBtns = ({ variant, color }) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <Button
        className="flex items-center justify-center w-full rounded-medium h-10 font-medium shadow-input max-w-xs"
        variant={variant}
        color={color}
      >
        <FcGoogle size={20} />
        Login with Google
      </Button>
      <Button
        className="flex items-center justify-center w-full rounded-medium h-10 font-medium shadow-input max-w-xs"
        variant={variant}
        color={color}
      >
        <FaGithub size={20} />
        Login with Github
      </Button>
    </div>
  );
};

const SocialBtnsContainer = () => {
  return (
    <>
      <Separator />
      <SocialBtns variant="bordered" color="default" />
    </>
  );
};

const Header = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      <Image
        src="/Logo.png" // add image with same name in /public dir.
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="flex flex-col w-full items-center">
        <p className="text-xl font-medium">Welcome Back</p>
        <p className="text-small text-default-500">
          Log in to your account to continue
        </p>
      </span>
    </div>
  );
};

const Content = () => {
  return (
    <form className="w-full h-full flex flex-col gap-4 items-center">
      <Header />

      <EmailInput variant="bordered" color="default" />
      <PasswordInput variant="bordered" color="default" />
      <div className="flex w-full max-w-xs justify-between gap-4">
        <Checkbox name="remember">Remember Me</Checkbox>
        <Link href="#">Forgor Password?</Link>
      </div>
      <Button
        className="max-w-xs"
        type="submit"
        color="primary"
        variant="solid"
        fullWidth={true}
      >
        Log In
      </Button>
      <SocialBtnsContainer />
      <span>
        Don&#39;t Have an Account? <Link href="#">Sign Up</Link>
      </span>
    </form>
  );
};

const Login = () => {
  return (
    <div className="flex w-full h-full rounded-md justify-center items-center gap-4">
      <Card className="w-full max-w-sm m-4">
        <CardBody>
          <Content />
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;

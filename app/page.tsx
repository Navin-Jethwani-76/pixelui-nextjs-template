import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Snippet,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <CardHeader className="flex flex-col gap-2">
        <h1>Make beautiful</h1>
        <h1>websites regardless of your design experience.</h1>
        <h2>Beautiful, fast and modern React UI library.</h2>
      </CardHeader>

      <CardBody className="flex flex-row justify-center items-center gap-4">
        <Button color="secondary">Documentation</Button>
        <Button variant="bordered">
          <FaGithub size={20} />
          GitHub
        </Button>
      </CardBody>

      <CardFooter className="flex justify-center">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="success">app/page.tsx</Code>
          </span>
        </Snippet>
      </CardFooter>
    </Card>
  );
}

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AlertComponent() {
  return (
    <div className="w-[20%] mx-auto my-10 space-y-5">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Login Error!</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Login Error!</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  );
}

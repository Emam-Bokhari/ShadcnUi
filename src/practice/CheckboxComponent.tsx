import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxComponent() {
  return (
    <div className="flex items-center space-x-2 min-h-screen justify-center">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept term and condition
      </label>
    </div>
  );
}

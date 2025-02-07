import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { MailOpen } from "lucide-react";

export default function ButtonComponent() {
  return (
    <div className="space-x-4 my-10">
      <Button className="bg-primary">Click Here</Button>
      {/* variants */}
      <Button variant="destructive" size="sm">
        Destructive
      </Button>
      <Button variant="destructive" size="lg">
        Destructive
      </Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      {/* icons */}
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button className="bg-[#415be7] hover:bg-[#2f44b3] transition-colors duration-300">
        <MailOpen /> Open with Email
      </Button>
      {/* loader */}
      <Button>
        <Loader2 className="animate-spin" />
        Loading
      </Button>
    </div>
  );
}

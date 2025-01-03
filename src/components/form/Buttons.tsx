"use client";
import { RefreshCcw } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size="lg"
    >
      {pending ? (
        <>
          <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
          Aanvraag verwerken...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

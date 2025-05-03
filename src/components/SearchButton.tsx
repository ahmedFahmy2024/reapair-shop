"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SearchButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-20">
      {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
    </Button>
  );
};

export default SearchButton;

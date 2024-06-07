import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InputAndButton = ({ onTextChange, onButtonPress }) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search for images"
        onChange={onTextChange}
      />
      <Button onClick={onButtonPress}>Search</Button>
    </div>
  );
};

export default InputAndButton;

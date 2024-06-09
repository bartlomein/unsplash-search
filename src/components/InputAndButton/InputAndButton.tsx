import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type InputAndButtonP = {
  onButtonPress: (t: string) => void;
  value?: string;
};

const InputAndButton = ({ onButtonPress, value }: InputAndButtonP) => {
  const [textInputValue, setTextInputValue] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onButtonPress(textInputValue);
    }
  };
  return (
    <div className="flex justify-center p-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          value={textInputValue}
          placeholder={value || "Search for images"}
          onChange={(e) => setTextInputValue(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <Button onClick={() => onButtonPress(textInputValue)}>Search</Button>
      </div>
    </div>
  );
};

export default InputAndButton;

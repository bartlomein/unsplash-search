import { Input } from "@/components/ui/input";

const TextInput = ({ onChange }) => {
  return (
    <div>
      <Input type="text" placeholder="Search for images" onChange={onChange} />
    </div>
  );
};

export default TextInput;

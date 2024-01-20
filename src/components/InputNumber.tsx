type InputNumberProps = {
  handleInputNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

export default function InputNumber({
  handleInputNumber,
  type,
}: InputNumberProps) {
  return <input onChange={handleInputNumber} type={type} />;
}

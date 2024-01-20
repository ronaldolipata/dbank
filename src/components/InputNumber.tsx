type InputNumberProps = {
  variant: string;
  handleInputNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

export default function InputNumber({
  variant,
  handleInputNumber,
  type,
}: InputNumberProps) {
  function getVariantClass() {
    switch (variant) {
      case 'primary':
        return 'primary';
      default:
        return 'default';
    }
  }

  return (
    <input
      className={getVariantClass()}
      onChange={handleInputNumber}
      type={type}
    />
  );
}

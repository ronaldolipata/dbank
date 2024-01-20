type InputProps = {
  variant: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

export default function Input({ variant, handleInput, type }: InputProps) {
  function getVariantClass() {
    switch (variant) {
      case 'primary':
        return 'primary';
      default:
        return 'default';
    }
  }

  return (
    <input className={getVariantClass()} onChange={handleInput} type={type} />
  );
}

type ButtonProps = {
  variant: string;
  disabled: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({
  variant,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  function getVariantClass() {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      default:
        return 'default';
    }
  }

  return (
    <button className={getVariantClass()} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

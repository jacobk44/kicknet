import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex w-60 items-center justify-center rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400",
        className,
      )}
    >
      {children}
    </button>
  );
}

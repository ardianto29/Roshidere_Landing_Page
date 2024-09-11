interface FormProps {
  className?: string;
}

export function Form({ className = "" }: FormProps) {
  return (
    <div className={`flex -translate-y-1 translate-x-1 ${className}`}>
      <button className="rounded-bl-lg w-[40%] rounded-tl-lg border-r-0 border-primary bg-background px-5 font-lato font-semibold text-secondary">
        Sign Up
      </button>
      <input
        type="email"
        placeholder="Email..."
        className="rounded-none w-full rounded-br-lg rounded-tr-lg bg-primary px-10 py-15 font-lato placeholder:font-lato placeholder:text-[#AFADA5] focus:outline-none"
      />
    </div>
  );
}

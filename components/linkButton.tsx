import { cn } from "@/lib/utils";

interface linkButtonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({ children, link, className }: linkButtonProps) {
  return (
    <a
      href={link}
      className={cn(
        "w-fit relative flex gap-1.5 items-center before:pointer-events-none after:pointer-events-none before:absolute before:w-0 before:h-0.5 before:bg-black before:content-[''] before:-bottom-1 before:left-0 hover:before:w-full before:transition-all before:duration-300 hover:before:delay-200 before:ease-out after:absolute after:w-full after:delay-200 hover:after:delay-0 after:h-0.5 after:bg-black after:content-[''] after:-bottom-1 after:right-0 hover:after:w-0 after:transition-all after:duration-300 after:ease-out animate-fade-up animate-duration-1000 animate-delay-[3500ms] animate-ease-out",
        className
      )}
    >
      {children}
    </a>
  );
}

export const LogoIcon = ({ className = "h-5 w-5 text-white" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 17L3 12L8 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 7L21 12L16 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8C12 10.2 13.8 12 16 12C13.8 12 12 13.8 12 16C12 13.8 10.2 12 8 12C10.2 12 12 10.2 12 8Z" fill="currentColor"/>
    </svg>
  );
};

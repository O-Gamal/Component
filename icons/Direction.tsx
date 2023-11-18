import { cn } from "../utils/classNames";

const DirIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
    >
      <path
        d="M0.599976 1.80001C0.599976 1.13726 1.13723 0.600006 1.79998 0.600006H16.2C16.8627 0.600006 17.4 1.13726 17.4 1.80001V4.20001C17.4 4.86275 16.8627 5.40001 16.2 5.40001H1.79998C1.13723 5.40001 0.599976 4.86275 0.599976 4.20001V1.80001Z"
        fill="currentColor"
      />
      <path
        d="M0.599976 9.00001C0.599976 8.33726 1.13723 7.80001 1.79998 7.80001H8.99998C9.66272 7.80001 10.2 8.33726 10.2 9.00001V16.2C10.2 16.8627 9.66272 17.4 8.99998 17.4H1.79998C1.13723 17.4 0.599976 16.8627 0.599976 16.2V9.00001Z"
        fill="currentColor"
      />
      <path
        d="M13.8 7.80001C13.1372 7.80001 12.6 8.33726 12.6 9.00001V16.2C12.6 16.8627 13.1372 17.4 13.8 17.4H16.2C16.8627 17.4 17.4 16.8627 17.4 16.2V9.00001C17.4 8.33726 16.8627 7.80001 16.2 7.80001H13.8Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default DirIcon;

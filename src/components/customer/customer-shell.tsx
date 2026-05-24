import { ReactNode } from "react";

export function CustomerShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className="desktop-accent min-h-screen px-3 py-4 sm:px-6 sm:py-8">
      <div
        className={`mobile-frame mx-auto min-h-[calc(100vh-2rem)] w-full max-w-[430px] overflow-hidden rounded-[32px] ${className}`}
      >
        {children}
      </div>
    </main>
  );
}

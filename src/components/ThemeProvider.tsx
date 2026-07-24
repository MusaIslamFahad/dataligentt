import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * ThemeProvider component that wraps the entire application
 * Provides theme context (light/dark/system) with localStorage persistence
 * and system preference detection
 */
export function ThemeProvider({ children, ...props }: { children: ReactNode; [key: string]: any }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Theme } from "@/components/ui/theme-provider";
import { useTheme } from "@/components/ui/theme-provider";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = useState<Theme>("dark");

  const toggleThemeHandler = () => {
    setTheme(theme);
    if (theme === "dark") setThemeState("light");
    else setThemeState("dark");
  };
  return (  
    <Button
      variant="outline"
      size="icon"
      onClick={toggleThemeHandler}
      className="cursor-pointer hover:bg-none"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        color="black"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

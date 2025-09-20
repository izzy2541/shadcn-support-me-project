"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

// export interface PasswordInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          {...props}
          ref={ref}
          className={cn("pr-15", className)}
        />
        {/* select-none ensures no text is selected if we double click on the eye icon */}
        <span className="absolute top-[7px] right-2 cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOffIcon onClick={() => setShowPassword(true)} />
          )}
        </span>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
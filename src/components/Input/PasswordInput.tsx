import React, { useState } from "react";
import { Input, type InputProps } from "./Input";
import { Eye, EyeOff } from "lucide-react"; 

type Props = Omit<InputProps, "type">;

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [show, setShow] = useState(false);

    return (
      <Input
        {...props}
        ref={ref}
        type={show ? "text" : "password"}
        endAdornment={
          <button
            type="button"
            aria-label={show ? "Hide password" : "Show password"}
            onClick={() => setShow((s) => !s)}
            className="p-1 rounded hover:bg-gray-100 text-gray-500 transition-colors"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        }
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";
import { forwardRef } from "react";

const Input = forwardRef((props: any, ref) => (
  <div className="mb-4 w-full">
    {props.label && (
      <div className="text-gray-600 text-sm mb-1">{props.label}</div>
    )}
    <input ref={ref} className="border rounded px-4 py-2 w-full" {...props} />
  </div>
));

export { Input };

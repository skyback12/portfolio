import * as React from "react";

export function Tabs({ defaultValue, children, className = "" }) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { value, setValue }) : child
      )}
    </div>
  );
}

export function TabsList({ children, className = "", value, setValue }) {
  return (
    <div className={`flex border-b border-slate-200 dark:border-slate-700 ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { value, setValue }) : child
      )}
    </div>
  );
}

export function TabsTrigger({ value: v, children, value, setValue }) {
  const active = v === value;
  return (
    <button
      onClick={() => setValue(v)}
      className={`px-4 py-2 text-sm -mb-px border-b-2 ${
        active ? "border-brand-600 text-brand-600" : "border-transparent text-slate-500"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value: v, children, value }) {
  return v === value ? <div className="pt-4">{children}</div> : null;
}

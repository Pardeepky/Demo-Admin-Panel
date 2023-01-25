export const required = (value: string) =>
  value ? undefined : "Field is required";

export const maxLength = (max: number) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

export const minValue = (min: number) => (value: any) =>
  value && value.length < min
    ? `Must be at least ${min} characters or more`
    : undefined;

export const minLength = minValue(8);

export const email = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

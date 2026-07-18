const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s-]{7,15}$/;

export function required(value, message = "This field is required") {
  if (value === undefined || value === null) return message;
  if (typeof value === "string" && value.trim() === "") return message;
  return "";
}

export function email(value) {
  if (!value) return "";
  return EMAIL_RE.test(value) ? "" : "Enter a valid email address";
}

export function phone(value) {
  if (!value) return "";
  return PHONE_RE.test(value) ? "" : "Enter a valid phone number";
}

export function minLength(value, min, label = "This field") {
  if (!value) return "";
  return value.trim().length >= min ? "" : `${label} must be at least ${min} characters`;
}

export function numberRange(value, min, max, label = "Value") {
  if (value === "" || value === undefined || value === null) return "";
  const num = Number(value);
  if (Number.isNaN(num)) return `${label} must be a number`;
  if (num < min || num > max) return `${label} must be between ${min} and ${max}`;
  return "";
}

/**
 * Runs a { field: [validatorFns] } map against a values object and returns
 * a { field: errorMessage } map containing only fields that failed.
 */
export function runValidation(values, rules) {
  const errors = {};
  Object.entries(rules).forEach(([field, validators]) => {
    for (const validate of validators) {
      const message = validate(values[field]);
      if (message) {
        errors[field] = message;
        break;
      }
    }
  });
  return errors;
}

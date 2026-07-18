import { useState } from "react";
import { runValidation } from "../utils/validation";

/**
 * Generic form state manager — replaces the identical handleChange /
 * handleBlur / handleSubmit / handleReset logic copy-pasted in both
 * ContactForm and JoinForm.
 *
 * @param {object} initialValues   Key/value map of field names → initial values.
 * @param {object} rules           Key/value map of field names → validator arrays.
 * @param {Function} onSuccess     Called when validation passes on submit.
 *
 * @returns {{ values, errors, submitted, handlers, reset }}
 *
 * Usage:
 *   const { values, errors, submitted, handlers, reset } = useForm(
 *     INITIAL_VALUES,
 *     RULES,
 *     () => setSubmitted(true),
 *   );
 *   <input name="name" value={values.name} {...handlers} />
 */
export function useForm(initialValues, rules, onSuccess) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /** Works for <input>, <textarea>, <select> onChange events */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /** Used by ChipSelect which passes (name, value) directly */
  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!rules[name]) return;
    const fieldErrors = runValidation({ [name]: value }, { [name]: rules[name] });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] ?? "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldErrors = runValidation(values, rules);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length === 0) {
      setSubmitted(true);
      onSuccess?.();
    } else {
      // Scroll to first error field
      const firstErrorField = Object.keys(fieldErrors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  return {
    values,
    errors,
    submitted,
    reset,
    handlers: { onChange: handleChange, onBlur: handleBlur },
    setField,
    handleSubmit,
  };
}

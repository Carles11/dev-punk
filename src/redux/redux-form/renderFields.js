export const renderField = ({
  input,
  className,
  name,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className={className}>
    <label htmlFor={name}>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
export const renderNumberField = ({
  input,
  className,
  name,
  label,
  type,
  placeholder,
  pattern,
  meta: { touched, error, warning },
}) => (
  <div className={className}>
    <label htmlFor={name}>{label}</label>
    <div>
      <input
        {...input}
        pattern={pattern}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

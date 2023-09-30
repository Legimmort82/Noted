import "../Button/Button.css"
function Button({children,onClick,variant}) {
  return (
<button onClick={onClick} className={`button-color button-color--${variant
}`}>
    {children}
</button>
  )
}

export default Button
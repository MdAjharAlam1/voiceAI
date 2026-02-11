
type ButtonType = "button" | "reset" | "submit"

interface ButtonInterface {
    label:string,
    type?:ButtonType,
    className:string,
    onClick?: ()=> void
    disabled?: boolean
}

const Button = ({
    label,
    type="button",
    className,
    onClick,
    disabled
}:ButtonInterface) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled} type={type}>
        {label}
    </button>
  )
}

export default Button
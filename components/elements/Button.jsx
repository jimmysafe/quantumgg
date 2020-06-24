
const Button = ({ children, dark, pxl, disabled }) => {
    return (
        <button disabled={disabled} className={`${dark ? 'btn dark' : 'btn'} ${pxl ? 'p-l-xl p-r-xl' : ''}`}>
            {children}
        </button>
    )
}

export default Button


const Button = ({ children, dark, pxl }) => {
    return (
        <button className={`${dark ? 'btn dark' : 'btn'} ${pxl ? 'p-l-xl p-r-xl' : ''}`}>
            {children}
        </button>
    )
}

export default Button

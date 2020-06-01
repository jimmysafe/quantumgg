
const Button = ({ children, dark }) => {
    return (
        <div className={`${dark ? 'btn dark' : 'btn'}`}>
            {children}
        </div>
    )
}

export default Button

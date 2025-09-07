const FormattedDate = ({ isHighLight, children }) => {
    return (
        <div>
            <span className={`text-sm ${isHighLight ? "" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;
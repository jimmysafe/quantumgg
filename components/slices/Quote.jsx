

const Quote = ({ slice }) => {
    const {
        quote_text,
        quote_author,
        author_company
    } = slice.primary

    return (
        <div className="section-quote">
            <div className="container">
                <div className="quote">
                    <h4>{quote_text[0].text}</h4>
                </div>
                <div className="author">
                    <p>{quote_author[0].text}</p>
                </div>
                <div className="company">
                    <p>{author_company[0].text}</p>
                </div>
            </div>
        </div>
    )
}

export default Quote

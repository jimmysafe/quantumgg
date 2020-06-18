
const SingleImage = (props) => {
    const { slice } = props
    return (
        <div className="section-single-image">
            <div className="container">
                <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
            </div>
        </div>
    )
}

export default SingleImage

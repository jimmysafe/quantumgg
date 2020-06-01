
const Text = ({ slice }) => {
    const { 
        text_heading, 
        main_text_content, 
        section_bg_color, 
        button_link 
    } = slice.primary

    const { items:images } = slice

    const heading = text_heading[0] && text_heading[0].text

    const getBgColor = () => {
        switch(section_bg_color){
            case 'white':
                return '#FFFFFF'
            case 'grey':
                return '#F4F4F4'
            case 'purple':
                return '#2A2766'
            default:
                return '#FFFFFF'
        }
    }

    return (
        <div 
            className={`section-text ${section_bg_color === 'purple' ? 'purple' : ''}`} 
            style={{ backgroundColor: getBgColor() }}
        >
            <div className="container">
                {heading && <h3>{heading}</h3>}
                {main_text_content.map((content, i) => {
                    if(content.text){
                        return  <p key={i}>{content.text}</p>
                    }
                })}

                {images[0] &&
                    <div className="logos-container">
                        {images.map((img, i) => (
                            <img key={i} src={img.logo_image.url} alt={img.logo_image.alt}/>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Text

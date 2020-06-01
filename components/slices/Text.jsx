import Link from 'next/link'
import Button from '../elements/Button'

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

    const formatButtonText = (uid) => {
        let textArr = uid.split("-")
        let finalArr = []
        textArr.forEach(str => {
            let x = str.charAt(0).toUpperCase() + str.slice(1)
            finalArr.push(x)
        });
        let buttonText = finalArr.toString().replace(/,/g, " ")
        return buttonText
    }

    return (
        <div 
            className={`section-text ${section_bg_color === 'purple' ? 'purple' : ''}`} 
            style={{ backgroundColor: getBgColor() }}
        >
            <div className="container flex column content-center items-center">
                {heading && <h3>{heading}</h3>}
                {main_text_content.map((content, i) => {
                    if(content.text){
                        return  <p key={i}>{content.text}</p>
                    }
                })}

                {images[0] && images[0].logo_image.url &&
                    <div className="logos-container">
                        {images.map((img, i) => (
                            <img key={i} src={img.logo_image.url} alt={img.logo_image.alt}/>
                        ))}
                    </div>
                }

                {button_link && button_link.uid &&
                    <Link as={`/${button_link.uid}`} href="/[page]" >
                        <a>
                        <Button>{formatButtonText(button_link.uid)}</Button>
                        </a>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Text


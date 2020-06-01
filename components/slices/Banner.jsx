
import { RichText } from 'prismic-reactjs';

const Banner = (props) => {
    console.log('banner', props)
    const { slice, page } = props
    const heading = slice.primary.banner_heading[0]
    const sub_heading = slice.primary.banner_text
    return (
        <div 
            className="section-banner"
            style={{
                minHeight: page.uid === 'home' ? '60vh' : '30vh',
                backgroundImage: `url(${slice.primary.bg_image.url})`
            }}
        >
            <div className="container flex content-center items-center column">
                {heading &&
                    <div className="heading">
                        <h1>{heading.text}</h1>
                    </div>
                }
                <div className="sub-heading">
                    <RichText render={sub_heading} />
                </div>
            </div>
        </div>
    )
}

export default Banner

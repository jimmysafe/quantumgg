
import { RichText } from 'prismic-reactjs';
import { Parallax } from 'react-parallax';

const Banner = (props) => {
    const { slice, page } = props
    const heading = slice.primary.banner_heading[0]
    const sub_heading = slice.primary.banner_text
    return (
        <Parallax
            blur={0}
            bgImage={slice.primary.bg_image.url}
            bgImageAlt={slice.primary.bg_image.alt}
            strength={400}
        >
        <div className={`section-banner ${page.uid === 'home' ? 'home-banner' : ' '}`}>
            <div className="container flex content-center items-center column">
                {heading &&
                    <div className="heading">
                        <h1>{heading.text}</h1>
                    </div>
                }
                {sub_heading.length > 0 &&
                    <div className="sub-heading">
                        <RichText render={sub_heading} />
                    </div>
                }
            </div>
        </div>
        </Parallax>
    )
}

export default Banner

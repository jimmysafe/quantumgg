import { RichText } from 'prismic-reactjs';


const DoubleImages = (props) => {
    const { slice } = props  
    console.log(slice.items)
    return (
        <div className="section-double-images">
            <div className="container">
                {slice.items.map((item, i) => (
                    <div key={i} className="img-cont">
                        <div className="title">
                            <RichText render={item.image_title}/>
                        </div>
                        <div className="image">
                            <img src={item.image.url} alt={item.image.alt}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoubleImages

import Banner from "./slices/Banner"
import Quote from "./slices/Quote"
import Text from './slices/Text'

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
            case 'banner':
                return <Banner {...props}/>
            case 'quote':
                return <Quote {...props}/>
            case 'text':
                return <Text {...props}/>
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice

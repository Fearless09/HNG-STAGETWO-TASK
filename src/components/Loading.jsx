import { ColorRing } from 'react-loader-spinner'

function Loading() {
    return (
        <div className='absolute z-10 top-0 left-0 bg-[#00000073] h-screen w-screen flex items-center justify-center'>
            <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default Loading

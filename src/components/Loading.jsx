import { AiOutlineLoading } from 'react-icons/ai'

function Loading() {
    return (
        <div className='absolute z-10 top-0 left-0 bg-[#00000073] h-screen w-screen flex items-center justify-center'>
            <button type="button" class="animate-spin" disabled>
                <AiOutlineLoading color='blue' size={'5rem'} />
            </button>
        </div>
    )
}

export default Loading

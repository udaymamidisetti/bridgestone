import React from 'react'
import { WebcamCapture} from '../../NewTireRework/WebCamera';


const AfterView = () => {
    return (
        <div className="mb-5 p-8 border-blue text-center w-64 border-spacing-10 border">  
                    <form >
                        <WebcamCapture/>    
                    </form>
        </div>
    )
}
export default AfterView

import { React } from 'react';
import '../../styles/Container.css'

function Container({ content }) {
    return(
        <div className='grid-item-container'>
            {content}
        </div>
    )
}

export default Container;
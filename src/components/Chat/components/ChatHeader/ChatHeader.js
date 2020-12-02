import React, {Fragment} from 'react'
import chatReducer from '../../../../store/reducers/chat'
import './ChatHeader.scss'

const ChatHeader = ({chat}) =>{
    return(
        <Fragment>
            <div id='chatter'>
                {
                    chatReducer.Users.map(user =>{
                        return <div className='chatter-info'>
                            <h3>{user.firstName} {user.lastName}</h3>
                        </div>
                    })
                }
            </div>
        </Fragment>
    )
}

export default ChatHeader
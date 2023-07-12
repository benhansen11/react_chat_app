import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
            projectId="fe6efbed-82bb-4261-bfe9-9e068231e6ff"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100vh' }}
    />
    </div>
    )

}

export default ChatsPage
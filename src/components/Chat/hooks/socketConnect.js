import {useEffect} from 'react'
import SocketIOClient from 'socket.io-client'
import {fetchChats, onlineFriends, onlineFriend, offlineFriend} from '../../../store/actions/chat'

function useSocket (user, dispatch){

    useEffect(() =>{

        dispatch(fetchChats())
            .then(res =>{
                const socket = SocketIOClient.connect('http://127.0.0.1:8081')

                socket.emit('join', user)

                socket.on('typing',(user) =>{
                    console.log("Event",user)
                })

                socket.on('friends',(friends) =>{
                    console.log("Friends",friends)
                    dispatch(onlineFriends(friends))
                })

                socket.on('online',(user) =>{
                    console.log("Online",user)
                    dispatch(onlineFriend(user))
                })

                socket.on('offline',(user) =>{
                    console.log("Offline",user)
                    dispatch(offlineFriend(user))
                })
            })
            .catch(err =>{

            })

    }, [dispatch])
}

export default useSocket
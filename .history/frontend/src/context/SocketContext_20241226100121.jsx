import React, { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_SERVER_BASE_URL}`); // Replace with your server URL

const SocketProvider = ({ children }) => {
    useEffect(() => {
        // Basic connection logic
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);

    const sendMessage = async (eventName,message)=>{
        socket.emit(eventName,message)
    }

    const recieveMessage = async (eventName,callback)=>{
        socket.on(eventName,callback)
    }

    return (
        <SocketContext.Provider value={{ socket,sendMessage,recieveMessage }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
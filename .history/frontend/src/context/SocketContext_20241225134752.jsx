// import React, { createContext, useEffect } from 'react';
// import { io } from 'socket.io-client';

// export const SocketContext = createContext();

// const socket = io(`${import.meta.env.VITE_SERVER_BASE_URL}`); // Replace with your server URL

// const SocketProvider = ({ children }) => {
//     useEffect(() => {
//         // Basic connection logic
//         socket.on('connection', () => {
//             console.log('Connected to server');
//         });

//         socket.on('disconnect', () => {
//             console.log('Disconnected from server');
//         });

//     }, [socket]);

//     return (
//         <SocketContext.Provider value={{ socket }}>
//             {children}
//         </SocketContext.Provider>
//     );
// };

// export default SocketProvider;
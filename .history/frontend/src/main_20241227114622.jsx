import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CaptainContext.jsx';
import RideContext from './context/RideContext.jsx';
import SocketProvider from './context/SocketContext.jsx';

createRoot(document.getElementById('root')).render(


  <CaptainContext>
    <UserContext>
      <RideContext>
        <SocketProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </SocketProvider>
      </RideContext>
    </UserContext>
  </CaptainContext>

)

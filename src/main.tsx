import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import AuthZeroProvider from './Providers/AuthZeroProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store} >
    <AuthZeroProvider>
      <App/>
    </AuthZeroProvider>
  </Provider>
 
  
)

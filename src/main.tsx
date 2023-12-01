
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { HashRouter } from 'react-router-dom'
import GlobalStyle from './globalStyle.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
   <HashRouter>
    <GlobalStyle/>
      <App />
  </HashRouter>,
)

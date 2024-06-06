import { useEffect } from 'react'
import './App.css'

const App = () =>{
  useEffect(() => {
    if(window.Telegram && window.Telegram.WebApp){
      window.Telegram.WebApp.expand();
    }
  }, []);

  return(
    <>
    <h1>Aerox Telegram App</h1>
    </>
  )
}
export default App;
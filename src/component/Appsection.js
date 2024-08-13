import React from 'react'
import '../style/app_section.css'
export const Appsection = () => {
  return (
    <div id='app-section'>
        <img src='./images/mobil-app.png' alt='app' id='appic'/>
        <div id='app-desc'>
            <h3>ULTRAS.MA</h3>
            <h2>App is available</h2>
            <p>Find our application and download it, you can find more images ,<br/> info about ultras, see your favorite video and share like them and more.</p>
            <a target='_blank' href='https://play.google.com/store/apps/details?id=com.otot.ultras&pli=1'><img src='./images/app2.png' alt='applink'/></a>
        </div>
    </div>
  )
}

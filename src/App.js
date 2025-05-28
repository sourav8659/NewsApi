import './App.css';
import React, {useState} from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=() => {
	const pageSize=15
	const country="in"
	// const apiKey=process.env.REACT_APP_NEWS_API_KEY
	const apiKey=process.env.REACT_APP_GNEWS_API_KEY
	
	const [progress, setProgress] = useState(0)
	const [mode, setMode] = useState('light')
	
	const toggleMode=() => {
		if(mode==='light'){
			setMode('dark')
			document.body.style.backgroundColor='#1b1b1c'
		}
		else{
			setMode('light')
			document.body.style.backgroundColor='white'
		}
	}
	
	return (
	<div><BrowserRouter>
		<NavBar mode={mode} toggleMode={toggleMode}/>
		<LoadingBar
			color='#088cff'
			progress={progress}
			height={3}
		/>
		{/* <News pageSize={pageSize} country={country} category="science" /> */}
		<Routes>
				<Route exact path="/" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} openedPath="/" />}/>
				<Route exact path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" openedPath="/business" />}/>
				<Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" openedPath="/entertainment" />}/>
				<Route exact path="/general" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" openedPath="/general" />}/>
				<Route exact path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" openedPath="/health" />}/>
				<Route exact path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" openedPath="/science" />}/>
				<Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" openedPath="/sports" />}/>
				<Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" openedPath="/technology" />}/>
		</Routes>
	</BrowserRouter></div>
	)
}

export default App;
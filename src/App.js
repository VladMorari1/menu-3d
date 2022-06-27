import './App.css';

function App() {
    return (
        <div className="App">
            <ul>
                <li style={{zIndex:6}}><a  href="#">Home</a></li>
                <li style={{zIndex:5}}><a href="#">About</a></li>
                <li style={{zIndex:4}}><a href="#">Services</a></li>
                <li style={{zIndex:3}}><a href="#">Portofolio</a></li>
                <li style={{zIndex:2}}><a href="#">Our Team</a></li>
                <li style={{zIndex:1}}><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default App;

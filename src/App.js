import 'bootstrap/dist/css/bootstrap.min.css';

import Navber from "./Components/Navber/Navber"
import Slider from "./Components/Slider/Slider"
import Advantace from "./Components/MyAdvantage/Advantace"
import PopularServices from "./Components/PopularServices/PopularServices"
import RecentWork from "./Components/RecentWork/RecentWork"

function App() {
  return (
    <div className="App">
     <Navber />
     <Slider />
     <Advantace />
     <PopularServices />
     <RecentWork />
    </div>
  );
}

export default App;

import PBarComponent from "./Components/PBarComponent";
import UploadComponent from "./Components/UploadComponent";


function App() {
  return (
    <div className="App bg-bgMobile bg-cover flex flex-col min-h-screen min-w-screen">
      <UploadComponent />
     <PBarComponent />
    </div>
  );
}

export default App;

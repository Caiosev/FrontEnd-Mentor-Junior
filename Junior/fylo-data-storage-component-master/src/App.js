import PBarComponent from "./Components/PBarComponent";
import UploadComponent from "./Components/UploadComponent";


function App() {
  return (
    <div className="App bg-bgMobile bg-cover flex md:flex-row md:items-center md:justify-center flex-col min-h-screen md:w-screen min-w-screen">
      <UploadComponent />
     <PBarComponent />
    </div>
  );
}

export default App;

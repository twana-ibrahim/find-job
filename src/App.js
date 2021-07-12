import NavigationBar from "./components/NavigationBar/NavigationBar";
import Routes from "./routes/routes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen min-h-full">
      <NavigationBar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;

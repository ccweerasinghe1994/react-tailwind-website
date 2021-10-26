import tw from 'twin.macro';
import './App.css';
import TopSection from './Pages/topSection/topSection.component';


const AppContainer = tw.div`
flex
w-full
h-full

`



  const  App = ()=> {
  return (
  <AppContainer>
    <TopSection/>
  </AppContainer>
  );
}

export default App;

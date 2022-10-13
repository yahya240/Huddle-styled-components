import './App.css';
import {Header,Card,Footer} from './components'
import {Container, GlobalStyles} from './components/styles';
import { ThemeProvider } from 'styled-components';
import content from './content'

const theme ={
  colors:{
    header: '#ebfbff',
    body: '#fff',
    footer:'#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
            {content.map((items)=>{
              return <Card key={items.id} {...items}></Card>
            })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

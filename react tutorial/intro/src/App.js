import React from 'react';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import {Container,Row,Col} from 'reactstrap';

function App() {
  return (
    //Burdaki div h2 ler bunlar html etiketleri zannetmeyelim bunlar jsx formatı içerisindeki elementlerdir
    <div className="App">
        <Container>
          <Row>  <Navi/></Row>
          <Row>
          
          
<Col xs="3"><CategoryList
title="CategoryTitle is very important for us!"
/></Col>
<Col xs="9"><ProductList
title="This is ProductList"
/></Col>

          </Row>

        </Container>
   
 
    </div>
  );
}

export default App;

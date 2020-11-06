import React, {useState} from "react";
import logo from './logo.svg';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container,Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { FaCpanel } from "react-icons/fa";

const itemArray = new Array(9).fill("empty")
function App() {

  const [isCross , setIsCross] = useState(false);
  const [winMessage , setWinMessage] = useState("");

  function reloadGame(){
    //

  }
  function checkisWinner(){
    //
  }

  function changeItem (itemNumber){
    //
  }


  return (
       <Container className="P-5">
         <ToastContainer position="bottom-center"/>
         <Row>
           <Col md={6} className="offset-md-3">
              <div className="grid">
                {itemArray.map(function(item,index){
                  return(
                    <Card>
                      <CardBody className="box">
                        <Icon name={item}/>
                      </CardBody>
                    </Card>
                  )
                })}

              </div>
           </Col>
         </Row>
       </Container>
       
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Heeder from './Components/Header';
import SectionOne from './Components/Section_1';
import SectionTwo from './Components/Section_2';
import SectionThree from './Components/Section_3';
import Footer from './Components/Footer';

const Container = styled.div`
display: flex;
justify-content: center;
flex-flow:column;
align-items: center;

`;



function App(){

    return(
        <Container>
            <Heeder/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <Footer/>
        </Container>

    );
}

ReactDOM.render(<App />, document.getElementById('root'));



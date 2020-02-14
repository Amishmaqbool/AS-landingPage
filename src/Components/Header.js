import React from 'react';
import styled from 'styled-components';
import HeaderBars from './HeaderBars';

const Header = styled.div`
display:flex;
justify-content : space-between;
// padding-bottom:58px;
width:70%;
align-items:center;
padding-top:54px;

`;

const Headerlogo = styled.div`
// padding-top:54px;
// padding-left:316px;
` ;

const IMG = styled.img`
`

function Heeder(){

    return(
      <Header>
        <Headerlogo>
        <IMG src={require('./img/alpha.svg')} alt=""/>
        </Headerlogo>
        <HeaderBars/>
      </Header>
    );
}

export default Heeder;
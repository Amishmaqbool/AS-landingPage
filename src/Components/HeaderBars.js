import React from 'react';
import styled from 'styled-components';

const HeaderBar =styled.div`
// padding-top: 45px;
//   padding-right:273px;
`;

const Line= styled.p`
border: solid 3px #222a41;
  width: 39px;
  border-radius: 5px;
  margin:0px;
`;
const Line2= styled.p`
border: solid 3px #222a41;
width: 28px;
border-radius: 5px;
margin:8px 0px;

`;


function HeaderBars()
{

    return(

        <HeaderBar>
          <Line/>
          <Line2/>
          <Line/>
        </HeaderBar>
    )
}

export default HeaderBars;
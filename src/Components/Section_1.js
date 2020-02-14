import React from 'react';
import styled from 'styled-components';


const Section1 = styled.div`

background-image: url(/static/media/bg-s-hape.012220fd.svg);
background-repeat:no-repeat;
background-size:initial;
background-position:center;
display :flex;
justify-content:center;

`;

const Img1 = styled.img`
position :absolute;
  top: 360px;
  left: 737px;
  width :273px

`;

const Img2 = styled.img`
position: absolute;
width:562px
  top: 230px;
  left: 955px;
`;

const Img3 = styled.img`
position: absolute;
  width: 585px
  top: 346px;
  left: 775px;
`;

const S1content = styled.div`
    padding-right: 586px;
    padding-top: 150px;
    padding-bottom: 57px;

`;


const Heading = styled.h1`
width: 487px;
height: 170px;
font-family: Roboto;
font-size: 60px;
line-height: 1.42;
letter-spacing: normal;
color: #253d5f;
`;

const Para = styled.p`
  width: 493px;
  height: 348px;
  opacity: 0.63;
  font-family: Roboto;
  font-size: 22px;
  line-height: 1.45;
  letter-spacing: normal;
  color: #4a505e;
`;

function SectionOne(){

    return(
         <Section1>
              <S1content>
         
             <Heading>Treatment Center Dashboards</Heading>
             <Para>We turn your disconnected data into crystal-clear, interactive dashboards 
                  that empower you to make the right business decisions.
                  Our dashboards make it easy to understand and track your most important
                  KPIs, helping you reduce operational costs, optimize marketing spend, 
                  improve UR & billing processes, identify compliance risks, 
                  and deliver a higher quality of care.</Para>
                  </S1content>
                  
                  <Img1 src="/static/media/bitmap.00688ad2.png"/>
                  <Img2 src="/static/media/bitmap.f8424999.jpg" />
                  <Img3 src="/static/media/macbook-air.ac0eaeff.png" />
              
         </Section1>
    );
}

export default SectionOne;
import React from 'react';
import styled from 'styled-components';



const Section3 = styled.div`
margin-top:187px;
display: flex;
justify-content: center;
flex-flow: column;
text-align: center;
background-image: linear-gradient(300deg, #902afc, #3498f6);

`;
const Heading = styled.h1`
height: 57px;
font-family: Roboto;
font-size: 48px;
color: #ffffff;
margin-top: 104px;
`;
const Span = styled.span`
font-weight: 400;
`;

const Section3Content = styled.div`
display: flex;


`; 

const Img =styled.img`
width:908px;

`; 

const OurComplimentaryContent = styled.div`
display: flex;
  justify-content: center;
  flex-flow: column;
  padding-right: 38px;
`;

const OurComplimentaryContentPara = styled.p`
width: 569px;
height: 214px;
font-family: Roboto;
font-size: 24px;
line-height: 1.42;
color: #ffffff;
text-align: start;
padding-top: 72px;

`;

const OurComplimentaryRow = styled.div`
display: flex;
  justify-content: start;
`;

const OurComplimentaryColmun1  = styled.div`
display: flex;
flex-flow: column;
text-align: start;
font-family: Roboto;
font-size: 18px;
line-height: 1.89;
color: #ffffff;
`;

const OurComplimentaryColmun2  = styled.div`
display: flex;
flex-flow: column;
text-align: start;
font-family: Roboto;
font-size: 18px;
line-height: 1.89;
color: #ffffff;

`;

const Link = styled.a`
display: flex;
flex-flow: column;
text-align: start;
font-family: Roboto;
font-size: 18px;
line-height: 1.89;
color: #ffffff;
text-decoration: none;
`
const Heading1 = styled.h5`
font-size: 24px;
font-weight: bold;
`;

const Button = styled.button`
width: 334px;
  height: 50px;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 17px;
  line-height: 1.24;
  color: #020202;
  margin-top:48px;
  margin-bottom :100px
`;
function SectionThree(){

    return(
       <Section3>
           <div>
             <Heading><Span>COMPLIMENTARY </Span> DATA AUDIT</Heading>
           </div>

           <Section3Content>
              <Img  src={require("./img/i-mage.png")} />
            <OurComplimentaryContent>
              <OurComplimentaryContentPara>
                  Our complimentary audit will review the following data sources and evaluate system configuration,
                   data accuracy and completeness, procedural inconsistencies, compliance issues, and billing oversights.
                    We’ll provide a report of findings with recommendations.
                  </OurComplimentaryContentPara>

                  <OurComplimentaryRow>
                     <OurComplimentaryColmun1>
                       <Heading1>EMR SYSTEM</Heading1>
                       <Link href="">Group notes</Link>
                       <Link href="">Individual Sessions</Link>
                       <Link href="">Treatment Plan</Link>
                       <Link href="">Other Clinical Documentation</Link>
                       <Link href="">Operations</Link>
                       <Link href="">Discharge Planning</Link>
                       <Link href="">Alumni Management</Link>
                       <Link href="">Medication Management</Link>

                     </OurComplimentaryColmun1>
                     <OurComplimentaryColmun2>
                     <Heading1>BILLING SYSTEM</Heading1>
                       <Link href="">Billing</Link>
                       <Link href="">UR</Link>
                    </OurComplimentaryColmun2>
                  </OurComplimentaryRow> 
                  <Button>Schedule Complimentary Data Audit</Button>
            </OurComplimentaryContent>
           </Section3Content>
       </Section3>
    );
}

export default SectionThree;
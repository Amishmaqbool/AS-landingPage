import React from 'react';
import styled from 'styled-components';


const Section2 = styled.div`

`;


const SignupBtn = styled.div` 
  display: flex;
  justify-content: center;

`;

const Para = styled.p`
  width: 211px;
  height: 21px;
  font-family: Roboto;
  font-size: 18px;
  color: #5a667c;
  padding-left: 22px;
`;

const Button = styled.button`

width: 200px;
  height: 50px;
  border-radius: 3px;
  box-shadow: 0 5px 15px 0 rgba(100, 110, 121, 0.3);
  background-image: linear-gradient(256deg, #bf6cff, #9041ff);
  font-family: CircularStd;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.24;
  color: #ffffff;
  border: 0px;
`;

const Img = styled.img`
margin-left: 10px;
`;

const Knowledge = styled.div`
display: flex;
justify-content: center;
`;

const Heading = styled.h1`
width: 851px;
height: 57px;
font-family: Roboto;
font-size: 48px;
text-align: center;
color: #244574;
padding-top: 160px;
padding-bottom:88px;
`;

const Span = styled.span`
font-weight: 400;
`;

const MainGrid = styled.div`
display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const MainGrid1 = styled.div`
display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin-top:66px;
`;

const Card = styled.div`
  width: 281px;
  height: 364px;
  border-radius: 5px;
  box-shadow: 0 25px 50px 0 rgba(78, 81, 144, 0.07);
  background-color: #ffffff;
  text-align: center;
  margin-right:  60px;
`;

const CardImg=styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  padding-top: 65px;
`;
const CardTxt = styled.p`
width: 204px;
  height: 71px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.94;
  text-align: center;
  color: #4e4e4e;
  padding-left:39px;
`;

const TalkToData = styled.div`
margin-top: 213px;
display: flex;
justify-content: center;
`;

const TalkToDataIMG = styled.img`

`; 

const TalkToDataTxt = styled.div`
margin-left: 235px;
`;

const TalkToDataTxtIMG = styled.img`

`;

const TalkToDataTxtHeading = styled.h1`
width: 559px;
height: 110px;
font-family: Roboto;
font-size: 48px;
line-height: 1.15;
color: #3e3e3e;
`;

const TalkToDataTxtSpan = styled.span`
font-weight: 400;
`;

const TalkToDataTxtPara = styled.p`
width: 485px;
height: 341px;
font-family: Roboto;
font-size: 18px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.72;
letter-spacing: normal;
color: #848991;
`;

const TalkToDataTxtButton =styled.button`
width: 387px;
height: 50px;
border-radius: 3px;
box-shadow: 0 5px 15px 0 rgba(100, 110, 121, 0.3);
background-image: linear-gradient(263deg, #bf6cff, #9041ff);
border: 0px;
color:#ffffff;
`;


function SectionTwo(){

    return(
        <Section2>
             <SignupBtn>
                 <Button>Sign up for free</Button>
                 <Para>Complimentary Data Autid</Para>
                 <Img src={require("./img/goto-icon.png")} />
             </SignupBtn>

             <Knowledge>
                 <Heading> <Span>KNOWLEDGE IS </Span> POWER </Heading>
             </Knowledge>

             <MainGrid>
                <Card>
                    <CardImg src={require("./img/patients.png")} />
                    <CardTxt>Who are our most valuable patients?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/revenue.png")} />
                    <CardTxt>Where are we missing billing revenue ?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/authorization.png")} />
                    <CardTxt>How can we improve our UR authorizations?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/flow.png")} />
                    <CardTxt>What are the impacts of patient flow trends?</CardTxt>
                </Card>
             </MainGrid>

             <MainGrid1>
                <Card>
                    <CardImg src={require("./img/marketing.png")} />
                    <CardTxt>How effective is our marketing spend?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/doc.png")} />
                    <CardTxt>Where are there gaps in my clinical care documentation?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/forecast.png")} />
                    <CardTxt>How do operations, clinical, admissions, and billing trends impact my revenue forecast?</CardTxt>
                </Card>

                <Card>
                    <CardImg src={require("./img/outcome.png")} />
                    <CardTxt>How can I minimize undesirable outcomes?</CardTxt>
                </Card>
             </MainGrid1>


              <TalkToData>
                    <TalkToDataIMG src={require("./img/question.png")} />
                 <TalkToDataTxt>
                     <TalkToDataTxtIMG src={require("./img/guess.png")}/>
                     <TalkToDataTxtHeading><TalkToDataTxtSpan> TAKE THE GUESSWORK OUT OF</TalkToDataTxtSpan> DECISIONS</TalkToDataTxtHeading>
                     <TalkToDataTxtPara>We help treatment centers integrate their data sources (billing, EMR, CRM, web, etc.) 
                          into a unified dashboard that provides clear KPIs for operations, UR and billing, admissions,
                           clinical, and compliance. <br/> <br/> 
                           Our dashboards will empower you to allocate budget, resources, and 
                           staff in the right areas to grow your center. <br/> <br/>
                           Talk to one of our experts and will provide a 
                           complimentary audit your current systems, data quality, and data management processes.
                           </TalkToDataTxtPara>
                           <TalkToDataTxtButton>Talk to a Data and Dashboard Expert</TalkToDataTxtButton>

                 </TalkToDataTxt>

              </TalkToData>
        </Section2>
        
    );
}

export default SectionTwo;


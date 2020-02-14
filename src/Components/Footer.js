import React from 'react';
import styled from 'styled-components';

const Footerr = styled.div`
width: 1100px;
display: flex;
justify-content: space-between;
padding-top:400px;
padding-bottom:106px;
`;

const FooterColHeading = styled.p`
font-family: Roboto;
font-size: 20px;
line-height: 1.8;
color: #63646a;
margin:0px;
`;

const FooterCol1 =styled.div`
width: 316.5px;
hight: 124px;
font-family: Roboto;
font-size: 24px;
line-height: 2.58;
color: #110f10;

`;

const Link =styled.a`
color: #110f10;
text-decoration: none;
`
const FooterCol2  = styled.div`
  width: 281.3px; 
  hight: 124px;
  font-family: Roboto;
  font-size: 24px;
  line-height: 2.58;
  color: #110f10;
`;

const FooterCol3 = styled.div`
width: 316.5px;
hight: 124px;
font-family: Roboto;
font-size: 24px;
line-height: 2.58;
color: #110f10;
`;

const Para = styled.p`
margin: 0px;
`

const FooterCol3Link = styled.a`
color: #110f10;
Border-bottom:1px solid #110f10;
padding-bottom:4px;
text-decoration: none;
`

function Footer() {
   return(
     <Footerr>
         <FooterCol1>
              <FooterColHeading>
                     Office 
              </FooterColHeading>
              <Link href="">
              4275 Executive Square Suite 200  La Jolla, CA 92037
              </Link>
         </FooterCol1>

         <FooterCol2>
              <FooterColHeading>
              Start a conversation
              </FooterColHeading>

              <Link href="">howdy@alphasquad.com </Link>
              <Link href="">+1 619 335 8680</Link>
         </FooterCol2>

         <FooterCol3>
             <FooterColHeading>Social</FooterColHeading>
              <Para> Connect with us on <FooterCol3Link href="" >facebook,</FooterCol3Link>  </Para>
              <Para> <FooterCol3Link href="">twitter</FooterCol3Link > or <FooterCol3Link href=""> instagram </FooterCol3Link> </Para>
              
         </FooterCol3>
         
     </Footerr>
   );    
}

export default Footer;
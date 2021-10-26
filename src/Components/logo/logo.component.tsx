import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const LogoContainer = styled.div`

${tw`
    font-family["ZCOOL KuaiLe"]
    font-black
    text-2xl
    text-white


`}
`

const Logo = ()=>{
    return(
        <LogoContainer>
          TRAVEL  
        </LogoContainer>
    )
}

export default Logo
import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const DivTopBar = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const DivContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const DivContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const LeftSpan = styled.div `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const CenterSpan = styled.div `
  cursor: pointer;
  margin-right: 5%;
`

const RightSpan = styled.div `
  cursor: pointer;
`

const DivContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const DivContainerRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBar = () => {
  return (
    <DivTopBar>
      <DivContainer>
        <DivContainerLeft>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </DivContainerLeft>
        <DivContainerCenter>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </DivContainerCenter>
        <DivContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </DivContainerRight>
      </DivContainer>
    </DivTopBar>
  )
}

export default TopBar;
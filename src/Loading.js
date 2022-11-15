import React from 'react';
import styled from "styled-components"

const Loading = () => {
    return (
        <Wrapper>
            <div class="container">
                <div class="dash uno"></div>
                <div class="dash dos"></div>
                <div class="dash tres"></div>
                <div class="dash cuatro"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
height:90vh;
width:100%;

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content:center;
  }
  
  .dash {
    margin: 0 15px;
    width: 35px;
    height: 15px;
    border-radius: 8px;
    background:#003580;
    box-shadow: 0 0 10px 0 #FECDFF;
  }
  
  .uno {
    margin-right: -18px;
    transform-origin: center left;
    animation: spin 3s linear infinite;  
  }
  
  .dos {
    transform-origin: center right;
    animation: spin2 3s linear infinite;
    animation-delay: .2s;
  }
  
  .tres {
    transform-origin: center right;
    animation: spin3 3s linear infinite;
    animation-delay: .3s;
  }
  
  .cuatro {
    transform-origin: center right;
    animation: spin4 3s linear infinite;
    animation-delay: .4s;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(360deg);
    }
    30% {
      transform: rotate(370deg);
    }
    35% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin2 {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-180deg);
    }
    35% {
      transform: rotate(-190deg);
    }
    40% {
      transform: rotate(-180deg);
    }
    78% {
      transform: rotate(-180deg);
    }
    95% {
      transform: rotate(-360deg);
    }
    98% {
      transform: rotate(-370deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  
  @keyframes spin3 {
    0% {
      transform: rotate(0deg);
    }
    27% {
      transform: rotate(0deg);  
    }
    40% {
      transform: rotate(180deg);
    }
    45% {
      transform: rotate(190deg);
    }
    50% {
      transform: rotate(180deg);
    }
    62% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    80% {
      transform: rotate(370deg);
    }
    85% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin4 {
    0% {
      transform: rotate(0deg);
    }
    38% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(-360deg);
    }
    65% {
      transform: rotate(-370deg);
    }
    75% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

`

export default Loading

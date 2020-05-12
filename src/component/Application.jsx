import React, { Component } from 'react';
import './../style/App.css';
import logo from './../logo.svg';
import styled from 'styled-components';

/*
* Please react about the : Tagged_templates **
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates 
*/

class Application extends Component {

    render() {
        let Application = styled.div`
            text-align: center;
        `;
        
        let AppHeader = styled.div`
            background-color: #282c34;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;        
        `;

        let AppImage = styled.img`
            height: 40vmin;
            pointer-events: none;
            @media (prefers-reduced-motion: no-preference) {
                animation: App-logo-spin infinite 20s linear;
            }
            &:hover {
                height: 20vmin;
            }
            @keyframes App-logo-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(180deg);
                }
            }                        
        `;

        let Text = styled.p`
            ${props => console.log(props.name)}
            &:hover {
                font-size: 30px;
            }
        `;

        return (
            <Application>
                <AppHeader>
                    <AppImage src={logo} alt="logo" />
                        <Text name={`Kartik`}>
                            Kartik
                        </Text>
                </AppHeader>
            </Application>
        );
    }
} 

export default Application;
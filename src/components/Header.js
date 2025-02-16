import React, { Component } from "react"
import styled from 'styled-components'
import SocialIcon from '../components/SocialIcon/SocialIcon'
import ReactTooltip from 'react-tooltip'
import Image from '../assets/portrait.jpg'
import theme from '../lib/theme'

class Header extends Component {
    render() {
        const {
            data,
            colorTheme
        } = this.props;

        const NameHeader = styled.a`
            color: ${colorTheme.colorAccent};
            font-family: ${colorTheme.font};
            font-weight: bold;
            margin:0;
            font-size: 58px;
            cursor: pointer;
            z-index: 100;
            letter-spacing: 15px;

            &:hover {
                color: ${colorTheme.colorAccent};
                text-decoration: none;
            }
        ` 

        const Subtitle = styled.h1`
            color: ${colorTheme.colorAccent};
            font-family: ${colorTheme.font};
            margin:0;
            padding: 0;
            font-size: 22px;
            z-index: 100;
            word-break: break-word;
            text-align: center;
            @media screen and (max-width: 767px) {
                width: 300px;
                font-size: 18px;
            }
        ` 
        const Container = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column; 
            align-items: center;
            height: 95%;
            justify-content: center;
            position: fixed;
        `
        const ImageContainer = styled.img`
            width: 300px;
        
        `

        return (
            <Container>
                <NameHeader data-tip data-for="Tooltip">SUMANTH KUMAR</NameHeader>
                <ReactTooltip place="right" id="Tooltip">
                    <ImageContainer src={Image}/>
                </ReactTooltip>
                <Subtitle>{data.headerSubtitle}</Subtitle>
                <SocialIcon theme={colorTheme} data={data} width={theme.socialIconSize}></SocialIcon>
            </Container>
        );
    }
}

export default Header;

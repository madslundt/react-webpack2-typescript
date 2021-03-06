import * as React from 'react';
import styled, { keyframes, ThemedStyledProps } from 'styled-components';
import { panel } from '../common/colors';

export interface IProps {
    loadings: number
}

type LoadingProps = ThemedStyledProps<{show: boolean}, any>;

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .8);
    text-align: center;
    vertical-align: middle;
    transition: .5s ease-in-out all;
    margin: 0 auto;

    z-index: 999999;
    opacity: ${(props: LoadingProps) => props.show ? 1 : 0};
    visibility: ${(props: LoadingProps) => props.show ? 'visible' : 'hidden'};
` as ThemedStyledProps<any, {show: boolean}>;

const animation = keyframes`
    0%,
    60%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    30% {
        opacity: .1;
        transform: scale(.01);
    }
`;

const BallPulse = styled.div`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: transparent;
    width: 100%;
    height: 20px;
    top: 50%;

    &>div {
        position: relative;
        box-sizing: border-box;
        display: inline-block;
        background-color: currentColor;
        border: 0 solid currentColor;
        width: 12px;
        height: 12px;
        margin: 4px;
        border-radius: 100%;
        animation: ${animation} 1s ease infinite;

        &:nth-child(1) {
            color: ${panel.colorCategory1};
            animation-delay: -400ms;
        }
        &:nth-child(2) {
            color: ${panel.colorCategory2};
            animation-delay: -300ms;
        }
        &:nth-child(3) {
            color: ${panel.colorCategory3};
            animation-delay: -200ms;
        }
        &:nth-child(4) {
            color: ${panel.colorCategory4};
            animation-delay: -100ms;
        }
        &:nth-child(5) {
            color: ${panel.colorCategory5};
            animation-delay: 0ms;
        }
    }

`;

// Dumb/stateless component
const Loading = (props: IProps) => {
    const { loadings } = props;

    return (
        <Container show={loadings > 0}>
            <BallPulse>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </BallPulse>
        </Container>
    )
}

export default Loading;

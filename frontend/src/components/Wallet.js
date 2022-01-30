import React from 'react';
import { ReactComponent as WalletLogo } from '../ethereum-wallet.svg';
import styled from 'styled-components'

export const Wallet = () => {
    return <WalletDiv className="wallet-div">
        <WalletLogo />
    </WalletDiv>;
};

const WalletDiv = styled.div`
position:fixed;
    z-index: 1;
    bottom:0;
    right:0;
    padding-bottom: 1%;
`

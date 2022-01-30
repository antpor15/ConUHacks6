import React from 'react';
import { ReactComponent as WalletLogo } from '../ethereum-wallet.svg';
import { ReactComponent as RedWalletLogo } from '../red-ethereum-wallet.svg';
import styled from 'styled-components'

export const Wallet = (props) => {
    if (props.hasWallet) {
        return <WalletDiv className="wallet-div">
            <WalletLogo />
        </WalletDiv>;
    }
    return <WalletDiv className="wallet-div">
        <RedWalletLogo />
    </WalletDiv>;
};

const WalletDiv = styled.div`
position:fixed;
    z-index: 1;
    bottom:0;
    right:0;
    padding-bottom: 1%;
`
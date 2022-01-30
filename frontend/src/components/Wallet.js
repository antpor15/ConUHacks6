import React from 'react';
import { ReactComponent as WalletLogo } from '../ethereum-wallet.svg';
import { ReactComponent as WalletLogoRed } from '../red-ethereum-wallet.svg';
import "../css/wallet.css"

export const Wallet = (props) => {
    if (props.hasWallet) {
        return <div className="wallet-div">
            <WalletLogoRed />
        </div>;
    }
    return <div className="wallet-div">
        <WalletLogoRed />
    </div>;
};

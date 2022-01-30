import React from 'react';
import { ReactComponent as WalletLogo } from '../ethereum-wallet.svg';
import "../css/wallet.css"

export const Wallet = () => {
    return <div className="wallet-div">
        <WalletLogo />
    </div>;
};

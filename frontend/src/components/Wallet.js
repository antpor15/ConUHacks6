import { React, useState } from 'react';
import { ReactComponent as WalletLogo } from '../ethereum-wallet.svg';
import { ReactComponent as RedWalletLogo } from '../red-ethereum-wallet.svg';
import styled from 'styled-components'
import { Popover, Text } from '@mantine/core';

export const Wallet = (props) => {
    const [opened, setOpened] = useState(false);

    if (props.hasWallet) {
        return <WalletDiv className="wallet-div">
            <Popover
                opened={opened}
                onClose={() => setOpened(false)}
                position="left"
                placement="center"
                withArrow
                noFocusTrap
                noEscape
                transition="pop-top-left"
                width={260}
                styles={{ body: { pointerEvents: 'none' } }}
                target={
                    <WalletLogo onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
                    </WalletLogo>
                }
            >
                <div style={{ display: 'flex' }}>
                    <Text size="sm">Your wallet is registered!</Text>
                </div>
            </Popover>
        </WalletDiv>;
    }
    return <WalletDiv className="wallet-div">
        <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            position="left"
            placement="center"
            withArrow
            noFocusTrap
            noEscape
            transition="pop-top-left"
            width={260}
            styles={{ body: { pointerEvents: 'none' } }}
            target={
                <RedWalletLogo onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
                </RedWalletLogo>
            }
        >
            <div style={{ display: 'flex' }}>
                <Text size="sm">Make sure to register your wallet before making a donation!</Text>
            </div>
        </Popover>
    </WalletDiv>;
};

const WalletDiv = styled.div`
position:fixed;
    z-index: 1;
    bottom:0;
    right:0;
    padding-bottom: 1%;
`
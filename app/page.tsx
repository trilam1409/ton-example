"use client"

import {TonConnectButton, TonConnectUIProvider} from '@tonconnect/ui-react';

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl="https://ton-example.vercel.app/tonconnect-manifest.json">
      <TonConnectButton />
    </TonConnectUIProvider>
  );
}

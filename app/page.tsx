"use client"

import {TonConnectButton, TonConnectUIProvider} from '@tonconnect/ui-react';
import Button from "@/app/Button";

export default function Home() {
  return (
    <TonConnectUIProvider manifestUrl="https://ton-example.vercel.app/tonconnect-manifest.json">
      <div className={'flex items-center justify-center flex-col gap-32'}>
        <TonConnectButton />
        <Button />
      </div>
    </TonConnectUIProvider>
  );
}

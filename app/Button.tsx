import {useTonConnectUI} from "@tonconnect/ui-react";
import {useEffect, useState} from "react";

const Button = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const [wallet, setWallet] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     const walletList = tonConnectUI.getWallets();
  //
  //   })()
  // }, []);

  const transaction: any = {
    messages: [
      {
        address:
          "0QAHHsAap0OqtLf-v385nfRJ0rU-8-vQtm3BefwfZDUWY_Tj",
        amount: "20000000",
        validUntil: Math.floor(Date.now() / 1000) + 60
      },
    ],
  };


  return (
    <button onClick={async () => {
      await tonConnectUI.sendTransaction(transaction)
    }}>Make Transaction</button>
  )
}

export default Button;

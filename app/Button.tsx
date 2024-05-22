import {useTonConnectUI} from "@tonconnect/ui-react";

const Button = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const transaction: any = {
    messages: [
      {
        address:
          "0QAHHsAap0OqtLf-v385nfRJ0rU-8-vQtm3BefwfZDUWY_Tj", // destination address
        amount: "10000000", //Toncoin in nanotons
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

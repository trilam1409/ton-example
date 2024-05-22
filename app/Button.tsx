import {useTonConnectUI} from "@tonconnect/ui-react";

const Button = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const transaction: any = {
    messages: [
      {
        address:
          "0:a6899d667f029f29061bf93fbc0dc0f55ded3569569d7a269d02de55ebeb88aa", // destination address
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

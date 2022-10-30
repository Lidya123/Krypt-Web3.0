import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { Button } from "react-bootstrap";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const tableStyle = {
    border : "1px solid grey",
    paddingLeft : "10px"
}
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

const handleSubmit =(e) => {
  const { addressTo, amount, keyword, message } = formData;

  e.preventDefault();

  if(!addressTo || !amount || !keyword || !message) return;

  sendTransaction();
};

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          {!currentAccount && (
          <Button variant="outline-warning" className="w-75 p-1.5" onClick={connectWallet}>
            Connect Wallet 
          </Button>
          )} 

          <div className="text-white mt-2">
            <table style={{width:"45%"}}>
                <thead>
                <tr>
                <td style={tableStyle}> Reliability </td>
                <td style={tableStyle}> Security </td>
                <td style={tableStyle}> Low Fees </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td style={tableStyle}> Ethereum </td>
                <td style={tableStyle}> Web3.0 </td>
                <td style={tableStyle}> Blockchain </td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>              
        </div>

<div className="d-md-flex h-md-100 align-items-center">

{/* <!-- First Half --> */}
<div className="col-md-6 h-md-100 loginarea">
    <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
    <div className="flex flex-row items-center justify-start w-full mf:mt-0 mt-10">
        
        <div className="p-5 sm:w-96 flex-col justify-content-end items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} /><br/>
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} /><br/>
            <Input placeholder="Enter Message" name="keyword" type="text" handleChange={handleChange} /><br/>
            <Input placeholder="Keyword" name="message" type="text" handleChange={handleChange} /><br/>

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading
              ? <Loader />
              : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  variant="outline-warning"
                >
                  Send now
                </Button>
              )}
          </div>
        </div>
    </div>
</div>
    
{/* <!-- Second Half --> */}
<div className="col-md-6 h-md-50">
    <div className="d-md-flex-3 h-100 p-5 text-center justify-content-center">
    <div className ="text-white rounded-lg shadow-xl white-glassmorphism">
    <div className="col-md-1 mt-2">
        <SiEthereum fontSize={21} color="#fff" />
    </div>
    <div className ="p-5 px-5 text-gray-500">
      {currentAccount ? (
        <p className="text-white font-light text-sm">
            Curr Acc : { shortenAddress(currentAccount) }
        </p>
        ) : ( <p className="text-blue font-light text-sm"> Connect wallet to get your current account address here!</p> )}
        <p className="text-white font-semibold text-lg mt-1">
            Ethereum
        </p>
    </div>
    </div>
    </div>
    </div>
</div>

</div>
  );
};

export default Welcome;
import React, {useContext, useState} from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shortenAddress';
// import dummyData from '../utils/dummyData';
import "./transactions.css";
import useFetch from '../hooks/useFetch';

const TransactionsCard = ({addressTo, addressFrom, amount, keyword, message, timestamp, url}) =>{
  const gifUrl = useFetch({keyword});

    return (
      <div className='card text-white rounded-lg shadow-xl white-glassmorphism mt-3'>
          <div className="card-body text-warning">
            <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopener noreferrer'>
              <p className='text-white text-base'>From : {shortenAddress(addressFrom)}</p>
            </a>  
            <a href={`https://goerli.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
              <p className='text-white text-base'>To : {shortenAddress(addressTo)}</p>
            </a> 
            {/* <a href={`https://goerli.etherscan.io/address/${amount}`} target='_blank' rel='noopener noreferrer'> */}
              <p className='text-white text-base'>Amount : {amount}</p>
            {/* </a>  */}
            {message && (
                <>
                <p className='text-white text-base'>Message : {message}</p>
                </>
              )}
              <img src={gifUrl || url} alt='gif' className='rounded-md shadow-lg' style={{"objectFit":"contain", "height":"200px", "width":"180px"}}/>
              <p className='text-[#37c7da] font-build'>{timestamp}</p>
          </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="md:p-12 py-12 px-4">
          {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">
              Latest Transactions
              <input
                type="text"
                className="search_btn white-glassmorphism mx-5"
                placeholder="Search message"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </h3>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              Connect your account to see the latest transactions
            </h3>
          )}
          </div>
            <div className="justify-center items-center" style={{"display": "flex", "flexWrap": "wrap"}}>
                {transactions.filter(
                  transaction => {
                    if(searchTerm === ""){
                      return transaction;
                    }
                    else if (transaction.message.toLowerCase().includes(searchTerm.toLowerCase())){
                      return transaction;
                    }
                  }
                ).map((transaction, i)=> (
                  <TransactionsCard key={i}{...transaction} />
                ))}
            </div>
        </div>
    );
};

export default Transactions;
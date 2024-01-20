# solana-token-tool
Create new token and update metadata with Metaplex

# generate new account
$ solana config set --url https://api.devnet.solana.com<br>
$ cd keys<br>
$ solana-keygen grind --starts-with Char:1<br>
>Wrote keypair to CharkDuBJruC5pMehKR2sPbD8DR36MS8C7GAi8pag72b.json<br>

$ mv CharkDuBJruC5pMehKR2sPbD8DR36MS8C7GAi8pag72b.json id_dev_CharkDuBJruC5pMehKR2sPbD8DR36MS8C7GAi8pag72b.json<br>
$ cp id_dev_CharkDuBJruC5pMehKR2sPbD8DR36MS8C7GAi8pag72b.json ~/.config/solana/id.json<br>
$ solana config get<br>
>   Config File: ~/.config/solana/cli/config.yml<br>
    RPC URL: https://api.devnet.solana.com<br>
    WebSocket URL: wss://api.devnet.solana.com/ (computed)<br>
    Keypair Path: ~/.config/solana/id.json<br>
    Commitment: confirmed<br>

$ solana airdrop 5 <br>
$ solana balance<br>
>   5 SOL<br>

# create new token
$ cd keys
$ solana-keygen grind --starts-with CTok:1
>    Wrote keypair to CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1.json

$ mv CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1.json id_dev_token_CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1.json<br>
$ spl-token create-token id_dev_token_CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1.json<br>
>   Creating token CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1<br>
    Address:  CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1<br>
    Decimals:  9<br>
    Signature: 3zqLiQ2W6sHWUEyr5kHu5eXiJ3e5k39eWry65gFCeARVrMFfywMs6XKnphmhic7BzdwLLSrqnWVFGkEwFMY9Pt3J<br>

$ spl-token create-account CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1<br>
>   Creating account DAvwRBSSXbpLKTyFXbYoFV6FkzGP4e9oLfTYzz3WcMN6<br>
    Signature: 59bX1RyJtKvH4tGQTrS1gHgVga4FzWmwLaNsNfV1mTiavzZPhFpx2sitGGUB9EB8e828GeQyzke73hvsyxmkWD4r<br>

$ spl-token mint CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1 10000000000<br>
>   Minting 10000000000 tokens<br>
    Token: CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1<br>
    Recipient: DAvwRBSSXbpLKTyFXbYoFV6FkzGP4e9oLfTYzz3WcMN6<br>
    Signature: 5iG7vs72dEqHyWUXHDHqt9cnHRnkkGjJFiBAAvEEnkgGgN62H8KVRckZg8pwHqVrvDLrsqs6MqA6oSAKUZrASqfG<br>
> https://explorer.solana.com/address/CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1?cluster=devnet<br>

# IPFS
>   For MacOS using Homebrew:<br>
    $ brew install ipfs<br>
    
>   For Linux using snap:<br>
    $ snap install ipfs<br>
    
>   For Windows using Chocolatey:<br>
    $ choco install ipfs<br>

# Init IPFS
>   ### Init IPFS:<br>
>   $ ipfs init<br>
>   ### Staring the daemon:<br>
>   $ ipfs daemon<br>
>   ### Add images:<br>
>>  $ ipfs add crypto.png<br>
>>  added QmYBWbWJWhERZMmXQ1ex4YNLh1ZgVojYBueU9XPKiSm4f4 crypto.png<br>
>>  - https://gateway.ipfs.io/ipfs/QmYBWbWJWhERZMmXQ1ex4YNLh1ZgVojYBueU9XPKiSm4f4<br>
>>  - https://ipfs.io/ipfs/QmYBWbWJWhERZMmXQ1ex4YNLh1ZgVojYBueU9XPKiSm4f4/<br>
>   ### Update metadata:<br>
>   - "image": "https://gateway.ipfs.io/ipfs/QmYBWbWJWhERZMmXQ1ex4YNLh1ZgVojYBueU9XPKiSm4f4"<br>
>   ### Add metadata:<br>
>>  $ ipfs add token_metadata.json<br>
>>  - added QmcwVVMjXshNJXjiYRXgb2SHDL1X1k1zPgXqxDASTFN6bN token_metadata.json<br>
>>  - https://gateway.ipfs.io/ipfs/QmcwVVMjXshNJXjiYRXgb2SHDL1X1k1zPgXqxDASTFN6bN<br>
>>  - https://ipfs.io/ipfs/QmcwVVMjXshNJXjiYRXgb2SHDL1X1k1zPgXqxDASTFN6bN/<br>
>>  - https://cf-ipfs.com/ipfs/QmcwVVMjXshNJXjiYRXgb2SHDL1X1k1zPgXqxDASTFN6bN<br>

# Update Metadata
$ ts-node createToken.ts
>   let's name some tokens!<br>
    4t8g8Sdr2DLYmuecwWmH1kezk5hVbhULbZRBkTuKTmwXLESvGjWZwUhEWQykPjBcTRfVae3SbWFQMeMKAQT1z2sj<br>

# Result:
>   Explorer:<br>
    https://explorer.solana.com/address/CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1/metadata?cluster=devnet<br>

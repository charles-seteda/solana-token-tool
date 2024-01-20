import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import * as web3 from "@solana/web3.js";
import * as anchor from '@project-serum/anchor';

export function loadWalletKey(keypairFile:string): web3.Keypair {
    const fs = require("fs");
    const loaded = web3.Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())),
    );
    return loaded;
}

const INITIALIZE = true;

async function main(){
    console.log("let's name some tokens!");
    const myKeypair = loadWalletKey("keys/id_dev_CharkDuBJruC5pMehKR2sPbD8DR36MS8C7GAi8pag72b.json");
    const mint = new web3.PublicKey("CTokqXQhYeGzma5Jh3GYpCYtzukZxC1JE16v4UdQcWb1"); // For CHLR
    const seed1 = Buffer.from(anchor.utils.bytes.utf8.encode("metadata"));
    const seed2 = Buffer.from(mpl.PROGRAM_ID.toBytes());
    const seed3 = Buffer.from(mint.toBytes());
    const [metadataPDA, _bump] = web3.PublicKey.findProgramAddressSync([seed1, seed2, seed3], mpl.PROGRAM_ID);
    const accounts = {
        metadata: metadataPDA,
        mint,
        mintAuthority: myKeypair.publicKey,
        payer: myKeypair.publicKey,
        updateAuthority: myKeypair.publicKey,
    }
    // For CHLR
    const dataV2 = {
        name: "Charles Dev Token",
        symbol: "CHLR",
        uri: "https://cf-ipfs.com/ipfs/QmcwVVMjXshNJXjiYRXgb2SHDL1X1k1zPgXqxDASTFN6bN", // For CHLR
        // we don't need that
        sellerFeeBasisPoints: 0,
        creators: null,
        collection: null,
        uses: null
    }
    let ix;
    if (INITIALIZE) {
        const args : mpl.CreateMetadataAccountV3InstructionArgs =  {
            createMetadataAccountArgsV3: {
                data: dataV2,
                isMutable: true,
                collectionDetails: null
            }
        };
        ix = mpl.createCreateMetadataAccountV3Instruction(accounts, args);
    } else {
        const args =  {
            updateMetadataAccountArgsV2: {
                data: dataV2,
                isMutable: true,
                updateAuthority: myKeypair.publicKey,
                primarySaleHappened: true
            }
        };
        ix = mpl.createUpdateMetadataAccountV2Instruction(accounts, args)
    }
    const tx = new web3.Transaction();
    tx.add(ix);
    const connection = new web3.Connection("https://api.devnet.solana.com");
    const txid = await web3.sendAndConfirmTransaction(connection, tx, [myKeypair]);
    console.log(txid);

}

main().then();
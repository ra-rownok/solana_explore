const {Connection, PublicKey} = solanaWeb3;

function getSOL() {
    var solanaPublicKey = document.getElementById('name').value;

    const conn = new Connection("https://api.devnet.solana.com")
    let publickeyObject = new PublicKey(solanaPublicKey)

    const fn = (async () => {
        let txhash = await conn.requestAirdrop(publickeyObject, 1e9)
        console.log(txhash)
    })
    fn();
}
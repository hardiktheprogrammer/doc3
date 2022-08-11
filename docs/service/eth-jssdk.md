# ETH on layer 2 - JS SDK Integration

```jsx
Notes: To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://faucet.paradigm.xyz/ to get more credit to test
```

### Install

```bash
$ yarn add @reddio.com/js
```

### Init SDK

```tsx
const initReddio = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return new Reddio({
    provider,
		// get from dashboard
		apiKey: 'xxxxxxxxx'
    // The development environment uses `test`, the production environment uses `main`
    env: 'test',
  });
};
```

## Deposit the ETH to starkex

1. Connect wallet & Generate starkKey

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature('Sign');
};
```

2. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
});
```

3. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

4. Deposit ETH 

```tsx
await reddio.apis.depositETH({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

5. Get balance

```tsx
const { data } = await reddio.apis.getBalances({
  starkKey,
});
```

## Transfer ETH between two layer 2 accounts

To transfer ETH between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
});
```

2. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

3. Transfer ERC20 from one layer 2 account to another

```jsx
const { data: res } = await reddio.apis.transfer({
  // Originator's starkKey and privateKey
  starkKey,
  privateKey,
  // from step1
  assetId,
	amount: "transfer amount",
  // from step2
  vaultId: data.data.vault_ids[0],
  // recipient starkKey
  receiver: transferAddress,
  // from step2
  receiverVaultId: data.data.vault_ids[1],
});
```

## Withdraw ETH from layer 2 to layer 1

To withdraw ETH from layer 2 to layer 1, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
});
```

2. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

3. Funds Move to the Withdrawal Area

```jsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  // small with transfer
  starkKey,
  privateKey,
  assetId,
	amount: "withdrawal amount",
  vaultId: data.data.vault_ids[0],
  receiver: transferAddress,
  receiverVaultId: data.data.vault_ids[1],
  // your layer 1 tokenAddress
  contractAddress,
});
```

4. On-Chain Withdrawal Transaction

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey,
  assetType,
  type: 'ETH'
})
```
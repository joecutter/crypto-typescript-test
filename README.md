# crypto-typescript-test

## Packages

Use command to install

```bash
yarn start
```

## Run

Use command to run

```bash
docker-compose up --build
```

### Test Endpoints

Run the following command to run

- health endpoint

```curl
curl --location --request GET 'http://localhost:4201/api/v1/asset/heathCheck'
```

response

```json
{
  "code": 200,
  "success": true,
  "message": "Health check is ✅"
}
```

- Insert Assets endpoint

```curl
curl --location --request GET 'http://localhost:4201/api/v1/asset'
```

response

```json
{
  "code": 200,
  "success": true,
  "message": "Record(s) have been saved successfully.",
  "assets": [
    {
      "Asset": "AXS",
      "AssetLong": "Axie Infinity Shard",
      "MinConfirmation": 4,
      "WithdrawTxFee": 0,
      "WithdrawTxFeePercent": 0,
      "SystemProtocol": "ETHERC20",
      "IsActive": true,
      "InfoMessage": "",
      "MaintenanceMode": false,
      "MaintenanceMessage": "",
      "FormatPrefix": "",
      "FormatSufix": "",
      "DecimalSeparator": ".",
      "ThousandSeparator": ",",
      "DecimalPlaces": 8,
      "withdrawal_fee_schedule": "",
      "id": 1
    }
  ]
}
```

- Retrieve Stored Assets endpoint

```curl
curl --location --request GET 'http://localhost:4201/api/v1/asset/findAll'
```

response

```json
{
  "code": 200,
  "success": true,
  "message": "Record(s) have been saved successfully.",
  "assets": [
    {
      "Asset": "AXS",
      "AssetLong": "Axie Infinity Shard",
      "MinConfirmation": 4,
      "WithdrawTxFee": 0,
      "WithdrawTxFeePercent": 0,
      "SystemProtocol": "ETHERC20",
      "IsActive": true,
      "InfoMessage": "",
      "MaintenanceMode": false,
      "MaintenanceMessage": "",
      "FormatPrefix": "",
      "FormatSufix": "",
      "DecimalSeparator": ".",
      "ThousandSeparator": ",",
      "DecimalPlaces": 8,
      "withdrawal_fee_schedule": "",
      "id": 1
    }
  ]
}
```

- Get Asset History endpoint

```curl
curl --location --request GET 'http://localhost:4201/api/v1/asset/history?basemarket=USDT'
```

The endpoint used to fetch this data returns an nulls. It seems the maintainers didnt update their endpoint. `URL: https://nova.bitcambio.com.br/api/v3/public/getmarketsummaries`

response

```json
{
  "code": 200,
  "success": true,
  "message": "Record(s) have been found successfully.",
  "data": {
    "success": true,
    "message": "",
    "result": null
  }
}
```

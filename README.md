## What this does
Use your account token to get the list of devices, then go to each device removing the variables you choosed.

## How to run the script on Tago
Do your own modifications if you want.<br>
Upload to Tago analysis, in the admin website.<br>
Add the environment variable `account_token` with the account token of your choice.

## How to run the script from my computer
Make sure you have npm and node installed in your machine.<br>
Add the environment variable `account_token` with the account token of your choice, to the analysis configuration, in the admin website.<br>
Open the analysis.js, change `MY-ANALYSIS-TOKEN-HERE` line for your analysis token.<br>
Open the terminal and run:

`npm install`<br>
`node .`


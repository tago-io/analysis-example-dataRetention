## What this does
Get the list of devices, then go to each device removing the variables you chooses.

## How to run the script on TagoIO
Do your own modifications if you want.<br>
Upload to TagoIO analysis, in the admin website.<br>

## How to run the script from my computer
Make sure you have npm and node installed in your machine.<br>
Open the analysis.js, change `MY-ANALYSIS-TOKEN-HERE` line for your analysis token.<br>
Open the terminal and run:

`npm install`<br>
`node analysis`

## How to use on TagoIO

In order to use this analysis, you must to add a new policy in your account.<br>

Steps to add a new policy:

   1 - Click the button "Add Policy" at this url: https://admin.tago.io/am;

   2 - In the Target selector, select the Analysis with the field set as "ID" and choose your Analysis in the list;

   3 - Click the "Click to add a new permission" element and select "Device" with the rule "Access" with the field as "Any";

   4 - To save your new Policy, click the save button in the bottom right corner;<br>

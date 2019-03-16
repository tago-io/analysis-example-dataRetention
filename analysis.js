/*
 * Analysis Example
 * Custom Data Retention
 *
 * Use your account token to get the list of devices, then go to each device removing the
 * variables you choosed.
 *
 * Instructions
 * To run this analysis you need to add an account token to the environment variables,
 * To do that, go to your account settings, then token and copy your token.
 * Go the the analysis, then environment variables,
 * type account_token on key, and paste your token on value
*/

const TagoAnalysis = require('tago/analysis');
const TagoUtils    = require('tago/utils');
const TagoDevice   = require('tago/device');
const TagoAccount  = require('tago/account');
const moment       = require('moment-timezone');

// The function myAnalysis will run when you execute your analysis
async function myAnalysis(context) {
  // reads the values from the environment and saves it in the variable env_vars
  const env_vars = TagoUtils.env_to_obj(context.environment);
  if (!env_vars.account_token) throw context.log('Missing account_token in the environment variables');

  const account = new TagoAccount(env_vars.account_token);

  // Bellow is an empty filter.
  // Examples of filter:
  // { tags: [{ key: 'tag-key', value: 'tag-value' }]}
  // { name: 'name*' }
  // { name: '*name' }
  // { bucket: 'bucket-id' }
  const filter = {};
  const fields = ['id'];

  // account.devices.list(pages, fields, filter, amount);
  const devices = await account.devices.list(1, fields, filter, 100);
  devices.forEach(async (device_obj) => {
    const token = await TagoUtils.getTokenByName(account, device_obj.id);
    const device = new TagoDevice(token);

    // Delete variables
    // Documentation: http://sdk.js.tago.io/en/latest/device.html#remove
    const variables = ['variable1', 'variable2'];
    const qty = 100; // remove 100 registers of each variable
    const end_date = moment().subtract(1, 'month').toISOString(); // registers old than 1 month

    device.remove({ variables, qty, end_date }).then(context.log, context.log);
  });
}

module.exports = new TagoAnalysis(myAnalysis, 'MY-ANALYSIS-TOKEN-HERE');

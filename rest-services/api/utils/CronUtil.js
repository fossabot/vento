
const APIUtil = require('./APIUtil');

module.exports.notify = async function () {

  sails.log('Check Hardware or Software Asset Expiry.');
  // Get the information of the Hardware or Software that is About to go Out of Warranty
  // and the ones already explired.
  let thirtyDysBeforeNow = (new Date().getTime() - (30 * 1000 * 3600 * 24));

  let assetsExpiry = await Asset.find({
    contract_end_date: { '>=': thirtyDysBeforeNow }
  });

  // TODO: Check if this list the assets got any of the notifications enabled.

  // Get the Owner information of those assets(email id, first name)
  for (let counter = 0; counter <= assetsExpiry.length - 1; counter++) {
    let asset = assetsExpiry[counter];
    // TODO: Check the notification case and call the method accordingly
    nofifyOverEmail(asset);
  }
};

async function nofifyOverEmail(asset) {
  let owner = await User.findOne({ id: asset['owner'] });
  let consumer = await User.findOne({ id: asset['consumer'] });
  let department = await Department.findOne({ id: asset['department_id'] });
  let product = await Product.findOne({ id: asset['product_id'] });
  const assetType = asset['asset_type'];
  // Create an email payload
  let to = owner['email'];
  let subject = `${owner['first_name']}, Expiry Alert for the ${assetType} ${assetType === 'Hardware' ? `${asset['hardware_ip']}` : `${asset['software_name']}`};
                    `;
  let message = `Hello Asset Owner,
                The asset <b>${assetType === 'Hardware' ? asset['hardware_ip'] : asset['software_name']}</b> is set to expire.
                This asset belongs to ${consumer['first_name']}(${consumer['email']}) from ${product['display_name']} of ${department['display_name']} department.`;
  let emailPayload = APIUtil.createEmailPayload(to, subject, message);

  sails.log(emailPayload);

  // Send email
  email.sendEmail(emailPayload);
}

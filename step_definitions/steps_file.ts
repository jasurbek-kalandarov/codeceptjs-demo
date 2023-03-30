const I = actor();
import assert = require("assert");

module.exports = function() {
  return actor({

    checkTextIncluded: async function(text: string, locator: string, isIncluded: boolean): Promise<void> {
      let isTextIncluded = await (await I.grabTextFromAll(locator)).includes(text);
      isIncluded ? assert.equal(isTextIncluded, true) : assert.equal(isTextIncluded, true);
    },

    checkPhoneNumberFormat: async function (locator: string): Promise<void> {
      const phoneNumberFormat = /\+\d\-\d{3}\-\d{3}\-\d{4}/;
      const listOfPhoneNumbers = await I.grabTextFromAll(locator);
      const isMatched = listOfPhoneNumbers.every(phone => phoneNumberFormat.test(phone));
      assert.equal(isMatched, true);
    }
  });
}

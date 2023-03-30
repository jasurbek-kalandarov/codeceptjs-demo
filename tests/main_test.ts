import Main from "../page_objects/Main";

Feature('account');

Scenario('verfiy epam main page',  ({ I }) => {
  I.amOnPage('/');
  I.seeElement(Main.logo);
  I.click('Accept All');
  I.see('© 2023 EPAM Systems, Inc.', Main.copyrightText);
  ['Services', 'Industries', 'Insights', 'About', 'Careers'].forEach(menuName => {
    I.checkTextIncluded(menuName, Main.menuItems);
  });
  I.click('CONTACT US');
  I.checkPhoneNumberFormat(Main.listOfPhoneNumbers);
});

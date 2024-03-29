/**
 * Constants used for parsing information on that is sent from the client-side application.
 */

const popularServicesRefs = {
    ORG_STATEMENT: 'Statement of Organizer',
    EIN_APPLICATION: 'Tax ID Number - EIN Application',
    COMPLIANCE_KIT_SEAl: 'Compliance Kit & Seal'
};

const servicesRef = [
    "package",
    "orgStatement",
    "einApp",
    "complianceKitSeal",
    "certCopy",
    "certCopyApost",
    "certGoodStand",
    "certGoodStandApost",
    "deliveryOption"
];

const ServicesString = {
    "package":"package",
    "orgStatement":"Statement of Organizer ",
    "einApp":"Tax ID Number - EIN Application",
    "complianceKitSeal":"Compliance Kit & Seal",
    "certCopy":"Certified Copies - ",
    "certCopyApost":"Certified Copies with Apostille - ",
    "certGoodStand":"Certificates of Good Standing - ",
    "certGoodStandApost":"Certificates of Good Standing with Apostille - ",
    "deliveryOption":"Delivery Option - "
};

const orderDocuments = [
    "package",
    "orgStatement",
    "einApp",
    "complianceKitSeal",
    "deliveryOption"
];

const enforcedProps = [
    "stateOfIncorporation","type","companyName", "firstName", "lastName", "email",
    "phoneNum", "streetAddress", "city", "usState", "zip", "country", "memberName",
    "llcPackage", "servicesList", "paymentTotal"

]

module.exports = {
    popularServicesRefs,
    servicesRef,
    ServicesString,
    orderDocuments,
    enforcedProps
}
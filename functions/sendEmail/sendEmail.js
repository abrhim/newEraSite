const emailjs = require("emailjs-com");

const { validateEmail, validateLength } = require("./validations");

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 50;
const DETAILS_MIN_LENGTH = 10;
const DETAILS_MAX_LENGTH = 1e3;

const handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log(body);

  try {
    validateLength("body.name", body.name, NAME_MIN_LENGTH, NAME_MAX_LENGTH);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  try {
    validateEmail("body.email", body.email);
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  try {
    validateLength(
      "body.details",
      body.details,
      DETAILS_MIN_LENGTH,
      DETAILS_MAX_LENGTH
    );
  } catch (error) {
    return {
      statusCode: 403,
      body: error.message,
    };
  }

  const descriptor = {
    from: `"${body.email}" <no-reply@gql-modules.com>`,
    to: "abramhimmer@gmail.com",
    subject: `${body.name} sent you a message from gql-modules.com`,
    text: body.details,
  };
};

const emailJsHandler = async (event) => {
  console.log(emailjs);
  emailjs.init("service_ms0k1ki");

  console.log(event.body);
  return { statusCode: 200 };
};

module.exports = { handler: emailJsHandler };

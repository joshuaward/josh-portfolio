
let content = {
  name: "Josh Ward",
  title: "Software Engineering Senior Advisor",
  certifications: [
    "AWS Certified AI Practitioner",
    "AWS Certified Cloud Practitioner"
  ]
};

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return { statusCode: 200, body: JSON.stringify(content) };
  }

  if (event.httpMethod === "PUT") {
    content = JSON.parse(event.body);
    return { statusCode: 200, body: "updated" };
  }

  return { statusCode: 405 };
};

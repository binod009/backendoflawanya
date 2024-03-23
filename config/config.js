const Config = {
  ENVIRONMENT: "dev",
  SMTP: {
    HOST: "sandbox.smtp.mailtrap.io",
    PORT: 465,
    USER: "4fb1987562444a",
    PASS: "344fb5fd56bd7c",
    FROM: "noreply@test.com",
    TLS: false,
  },
  DB: {
    PROTOCOL: "mongodb",
    HOST: "127.0.0.1",
    NAME: "lawanya",
    USER: "",
    PWD: "",
    PORT: 27017,
  },
};

module.exports = Config;

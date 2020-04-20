const PROXY_CONFIG = [
  {
    context: ["/api/v1/auth/login", "/api/v1/auth/register", "/api/v1/wallets"],
    target: "http://localhost:6000",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;

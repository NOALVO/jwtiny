function fromB64(h) {
  if (typeof window === 'undefined') {
    return Buffer.from(h, 'base64').toString('utf8');
  }
  return atob(h);
}

/**
 * Decodifica o payload de um token JWT.
 * @param {string} token Token codificado no protocolo JWT
 */
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(fromB64(base64));
  } catch (e) {
    //
  }
}

/**
 * Verifica se um token JWT está expirado através do seu payload.
 * @param {Object} tokenPayload Payload do token JWT a ser verificado.
 */
function isExpired(tokenPayload) {
  let expired = true;
  if (tokenPayload && tokenPayload.exp) {
    const expMs = tokenPayload.exp * 1000/* milissegundos */;
    expired = expMs <= Date.now();
  }
  return expired;
}

module.exports = {
  parseJwt,
  isExpired,
};

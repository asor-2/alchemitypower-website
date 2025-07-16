// Generate a random CSRF token
export const generateCSRFToken = () => {
  const array = new Uint32Array(8);
  window.crypto.getRandomValues(array);
  return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join(
    "",
  );
};

// Store the token in session storage
export const storeCSRFToken = (token) => {
  sessionStorage.setItem("csrfToken", token);
};

// Get the stored token
export const getCSRFToken = () => {
  return sessionStorage.getItem("csrfToken");
};

// Validate the token
export const validateCSRFToken = (token) => {
  const storedToken = getCSRFToken();
  return token === storedToken;
};

// Generate and store a new token
export const initializeCSRFToken = () => {
  const token = generateCSRFToken();
  storeCSRFToken(token);
  return token;
};

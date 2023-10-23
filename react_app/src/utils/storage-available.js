// ----------------------------------------------------------------------

export function localStorageAvailable() {
  try {
    const key = '__some_random_key_you_are_not_going_to_use__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export function localStorageGetItem(key, defaultValue = '') {
  const storageAvailable = localStorageAvailable();

  let value;

  if (storageAvailable) {
    value = localStorage.getItem(key) || defaultValue;
  }

  return value;
}

export function zohoLinkStorageAvailable() {
  try {
    const key = 'ZOHO_CREATOR_BASE_LINK';
    window.localStorage.setItem(key, window.location.pathname);
    console.log('BASE LINK STORED');
    return true;
  } catch (error) {
    return false;
  }
}

export function zohoLinkStorageGetItem(key) {
  const value = localStorage.getItem(key);

  return value;
}

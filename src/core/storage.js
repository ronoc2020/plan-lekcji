const PREFIX = "planLekcji.";

function canUseStorage() {
  try {
    const key = "__plan_lekcji_test__";
    localStorage.setItem(key, "1");
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export function read(key, fallback) {
  if (!canUseStorage()) return fallback;
  try {
    const value = localStorage.getItem(PREFIX + key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function write(key, value) {
  if (!canUseStorage()) return false;
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function remove(key) {
  if (!canUseStorage()) return false;
  try {
    localStorage.removeItem(PREFIX + key);
    return true;
  } catch {
    return false;
  }
}

export function exportData() {
  if (!canUseStorage()) return {};
  const result = {};
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(PREFIX)) continue;
    try { result[key.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(key)); }
    catch { result[key.slice(PREFIX.length)] = localStorage.getItem(key); }
  }
  return result;
}

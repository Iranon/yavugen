export const isPathValid = (path: string) => /^[a-zA-Z0-9][a-zA-Z0-9_\/-]*$/.test(path);

export const isNameValid = (name: string) => /^[A-Z][a-zA-Z0-9]*$/.test(name);

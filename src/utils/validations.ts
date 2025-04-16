export const onlyAlphabet = (value: string) => {
  return /^[A-Za-zŠšĐđŽžĆćČč'-\s]+$/.test(value);
};

export const onlyNumber = (value: string) => {
  return /^[0-9\s]*$/.test(value);
};

export const onlyAlphanumeric = (value: string) => {
  return /^[0-9A-Za-zŠšĐđŽžĆćČč'-\s]+$/.test(value);
};

export const onlyEmail = (value: string) => {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    value
  );
};

export const checkStringLength = (
  value: string,
  maxLength: number,
  minLength: number = 0
) => {
  return !(value.length <= maxLength && value.length >= minLength);
};

export const checkIfEmpty = (value: string) => {
  return value.length ? false : true;
};

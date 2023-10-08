/**
 * create a random id
 * */  
 function generateRandomId() {
  const timestamp = (new Date().getTime() / 1000 | 0).toString(16); // 4-byte timestamp
  const randomPart = (Math.random() * 16777215 | 0).toString(16);  // 3-byte random value
  const objectId = timestamp + '0'.repeat(8 - timestamp.length) + randomPart;
  return objectId;
}

export const randomId = generateRandomId();

/**
 * create a slug
*/
export const createSlug=(productName)=> {
  // Convert the product name to lowercase
  const lowercaseName = productName.toLowerCase();

  // Replace spaces with hyphens
  const slug = lowercaseName.replace(/\s+/g, '-');

  // Remove any characters that are not letters, numbers, or hyphens
  const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');

  return cleanSlug;
}
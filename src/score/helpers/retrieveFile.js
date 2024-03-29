import { extractStreetName } from './extractStreetName.js';
import fs from 'node:fs/promises';

const UTF_8 = 'utf8';


export const getDriverNames = async (filename) => {
  try {
    const driverNames = await fs.readFile(filename, { encoding: UTF_8 });
    return driverNames.split('\n');
  } catch (err) {
    console.log('Error reading driver file!', err.message);
    return [];
  }
};

export const getDestinationAddresses = async (filename) => {
  try {
    const destinationAddresses = await fs.readFile(filename, { encoding: UTF_8 });
    const addresses = destinationAddresses.split('\n');
    return addresses.map((address) => ({
      address,
      streetName: extractStreetName(address),
    }));
  } catch (err) {
    console.log('Error reading destinationAddress file!', err.message);
    return [];
  }
};



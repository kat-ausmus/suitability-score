import { extractStreetName } from './extractStreetName.js';
import fs from 'node:fs/promises';

const UTF_8='utf8'


export const getDriverNames = async (filename) => {
  const driverNames = await fs.readFile(filename, { encoding: UTF_8 });
  return driverNames.split('\n');
};

export const getDestinationAddresses = async (filename) => {
  const destinationAddresses = await fs.readFile(filename, { encoding: UTF_8 });
  const addresses = destinationAddresses.split('\n');
  return addresses.map((address) => ({
    address,
    streetName: extractStreetName(address),
  }));
};



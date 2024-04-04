# Suitability-Score
Given a set of driver names and destination address, assign the driver with the highest combined score of all pairings to a destination address.
One driver can only be assigned to one address and vice versa.


You can `clone` or `fork` from the repo:`git@github.com:kat-ausmus/suitability-score.git`

This readme assumes you already have npm installed.  This app can run in Node18 and higher. 

In the project directory, you can run:

### `npm install`

To install all dependencies

### `npm start`

To run the application with default values.
Sample output is:

```

? Destination Address pathname: ./resources/destinationAddresses.txt
? Driver pathname: ./resources/driverNames.txt
Results are: {
  totalSuitabilityScore: 776.25,
  driverAssignments: [
    {
      address: '1234 Sample Address drive, CA, 90210',
      driver: 'Olive Aulive',
      suitabilityScore: 15.75
    },
    {
      address: '1 Early Morn Ave. San Diego, CA 92134',
      driver: 'Marcus Aurelius',
      suitabilityScore: 15.75
    },
    {
      address: '44 Faking Dr., San Diego, CA 92122',
      driver: 'Daniel Davidson',
      suitabilityScore: 13.5
    },
    {
      address: '44 Faker Blvd, San Diego, CA 92122',
      driver: 'Clark Kent',
      suitabilityScore: 10.5
    },
    {
      address: '1 1st Ave. San Diego, CA 92134',
      driver: 'Peter Parker',
      suitabilityScore: 10.5
    },
    {
      address: '44 Fake Dr., San Diego, CA 92122',
      driver: 'Charles Darwin',
      suitabilityScore: 9
    },
    {
      address: '12345 King of the Hill street, San Diego, CA 92011',
      driver: 'Jane Doe',
      suitabilityScore: 9
    },
    {
      address: '1 Too Many Addresses Parkway, San Diego, CA 92122',
      driver: 'John Doe',
      suitabilityScore: 6.75
    },
    {
      address: '44 Fake Farm Dr., San Diego, CA 92122',
      driver: 'Bruce Wayne',
      suitabilityScore: 6
    }
  ]
}


```

### `npm test`

Run the test cases with coverage report.
For the next step, we would like for you to parse the attached `data.json` file.

The goal is to turn each element in the JSON array into a type and instance in a language of your choice and place it in a heterogeneous array/list/collection (your choice). Then demonstrate sorting that heterogeneous array on two separate properties, e.g., sort by `weight` or sort by `color`.

## Requirements for setting up this file

## Getting Started

1. Installation of typescript is necessary.
   a. Install via **'npm install typescript'** or **'yarn add typescript'**.
   b. Installation of nodemon is also necessary to run and compile javascript/typescript 'npm install nodemon' or 'yarn add nodemon'.



2. Sample JSON data was provided.
   a. 'tsc --init' is used to create a default tsconfig.json file. "resolveJsonModule": true is added to "compilerOptions" {}
   >   "compilerOptions": {
   "resolveJsonModule": true,
   > }
 
   use:
   > tsc --resolveJsonModule --esModuleInterop --allowSyntheticDefaultImports true saic.ts && node saic.js
   > 
   with these flags to ensure typescript reads json data correctly as a module.

3. In order to have unique classes, children had to inherit from parent Animal class. The constructor for Animal automatically takes care of assigning itself with the correct properties.

4. In order to iterate and output a heterogeneous array, .map() is used for this output.
   a. Within this function, the proper inherited class is created after confirming object type.

5. Lastly, the two sorting functions are for sorting with Weight and Color.
   a. Weight was sorted using a simple default sort().
   b. Color was different. Typescript requires, a number, or even enum datatype in order to sort. The sorting for color as done using an "alphabetical" type of sorting method for Color.

Additional Thoughts:
I did consider using libraries to help out such as: lodash, class-transformer

//if statement is to big so we can use ternary operator
let age = 21;
let name = age > 18 && "Sarad";
let lastname = age > 18 ? "Budhathoki" : "Shrestha";

age > 18
  ? console.log(`${name} ${lastname} is eligible for voting`)
  : console.log(`${name} ${lastname} is not eligible for voting`);

// const Component = () => {
//   return (
//     <div>
//       <h1>{age > 18 ? "Eligible" : "Not eligible"}</h1>
//     </div>
//   );
// };

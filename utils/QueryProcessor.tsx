
import { max } from 'mathjs'

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const addMatch1 = query.match(/What is (\d+) multiplied by (\d+)/);
  if (addMatch1) {
    const x: number = parseInt(addMatch1[1]);
    const y: number = parseInt(addMatch1[2]);
    return (x*y).toString();
  }

  const addMatch2 = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (addMatch2) {
    const x: number = parseInt(addMatch2[1]);
    const y: number = parseInt(addMatch2[2]);
    const z: number = parseInt(addMatch2[3]);
    return (max(x, y, z)).toString();
  }

  const addMatch4 = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)?/);
  if (addMatch4) {
    let s: any;
    var result = "";
    for (s in addMatch4) {
      if (isPrime(s)){
        result.concat(s.toString())
      }
    }
    return result;
  }


  function isPrime(num: number): boolean {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
          return false;
        }
    }
    return num > 1;
  }
  return "";
}

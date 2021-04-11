//STEP 1
// let favMovies = [
//   "Groundhog Day",
//   "Total Recall",
//   "The Matrix",
//   "Rainman",
//   "Hacksaw Ridge",
// ];
// console.log(favMovies[1]);

//STEP 2
//  let movies = new Array(5);
//  movies[0] = favMovies[0];
//  movies[1] = favMovies[1];
//  movies[2] = favMovies[2];
//  movies[3] = favMovies[3];
//  movies[4] = favMovies[4];
//  console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = favMovies[0];
// movies[1] = favMovies[1];
// movies[2] = favMovies[2];
// movies[3] = favMovies[3];
// movies[4] = favMovies[4];

// movies.splice(2, 0, 'Test')
// console.log(movies.length); // 6

//STEP 4
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// for (let i in movies) {
//     console.log(movies[i]);
// }

//STEP 6
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = [ "Groundhog Day", "Total Recall", "The Matrix", "Rainman", "Hacksaw Ridge", "Greyhound", "Terminal"];
// movies.sort();
// console.log(movies)

//STEP 8
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// let leastFavMovies = ['Coming 2 America', 'Dumb and Dumber', 'Test3'];

// console.log('Movies I like:')
// for (let i in movies) {
//     console.log(movies[i], Number(i)+1);
// }

// console.log('Movies I regret watching:')
// for (let i in leastFavMovies) {
//     console.log(leastFavMovies[i], Number(i)+1);
// }

//STEP 9
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// let leastFavMovies = ['Coming 2 America', 'Dumb and Dumber', 'Test3'];

// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse())

//STEP 10
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// let leastFavMovies = ['Coming 2 America', 'Dumb and Dumber', 'Test3'];
// movies = movies.concat(leastFavMovies);

// console.log(movies[movies.length-1])

//STEP 11
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// let leastFavMovies = ['Coming 2 America', 'Dumb and Dumber', 'Test3'];

// movies = movies.concat(leastFavMovies);

// console.log(movies[0])

//STEP 12
// let movies = ['Groundhog Day', 'Total Recall', 'The Matrix', 'Rainman', 'Hacksaw Ridge', 'Greyhound', 'Terminal'];
// let leastFavMovies = ['Coming 2 America', 'Dumb and Dumber', 'Test3'];

// for (let i in leastFavMovies) {
//     leastFavMovies[i] = movies[i]
// }

// console.log(leastFavMovies)

//STEP 13
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// let newArr;

// SOLUTION 1 WITH NESTED ARRAY
// for (let i in movies) { // RETURNS NESTED ARRAY
//     let filtered = movies[i].filter(movie => typeof movie == "string");
//     newArr.push(filtered)
// }
// console.log(newArr);

// SOLUTION 2 WITH FLATTENED ARRAY
// newArr = movies.flat();
// newArr = newArr.filter(movie => typeof movie === 'string')

// console.log(newArr)

//STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

// function showEmployee(arr) {
//     for(let employee of arr) {
//         console.log(employee.toUpperCase() + '\n')
//     }
// }

// showEmployee(employees);

//STEP 15
// function filterValues(arr) {
//     let newArr = arr.filter(value => value );
//     return newArr;
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16

// function randomSelector(arr) {
//     let randomNum = Math.floor(Math.random() * arr.length);
//     // console.log(randomNum);
//     return arr[randomNum];
// }

// console.log(randomSelector([10, 5, 6, 76, 33, 7]))

//STEP 17

// SOLUTION 1 USING FOR LOOP
// function largestNum(arr) {
//     let largest = arr[0];

//     for(let i=1; i<arr.length; i++) {
//         if(arr[i]>largest) largest = arr[i];
//     }
//     return largest;
// }

// SOLUTION 2 USING BUILTIN MEHTOD MAX()
// function largestNum(arr) {
//     return Math.max(...arr);
// }

// console.log(largestNum([10, 5, 6, 76, 33, 7]))

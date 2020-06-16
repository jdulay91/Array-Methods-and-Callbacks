import { fifaData } from './fifa.mjs';
// console.log(fifaData);

// console.log('its working');
// console.log(fifaData[0]);
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data  */

// (a) Home Team name for 2014 world cup final
// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
// })]['Home Team Name']);
// // (b) Away Team name for 2014 world cup final
// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
// })]['Away Team Name']);
// // (c) Home Team goals for 2014 world cup final
// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
// })]['Home Team Goals']);
// // (d) Away Team goals for 2014 world cup final
// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
// })]['Away Team Goals']);
// (e) Winner of 2014 world cup final
// fifaData.filter((element) => element.Year === 2014 && element.Stage === 'Final').map(element => {
//     if(element['Home Team Goals'] > element['Away Team Goals']){
//         console.log(element['Home Team Name']);
//     }else {
//         console.log(element['Away Team Name']);
//     }
// });


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
// 
// function getFinals(data) {
//         const finals =[]; 
//     data.forEach(function(final){
//         if(final.Stage === 'Final'){
//         finals.push(final);            
//         }        
//     });
//     return finals;   
// };
//  console.log(getFinals(fifaData));
function getFinals(data){
    return data.filter(element => element.Stage === 'Final');
}
// console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */




    function getYears(callBack,data){      
        return callBack(data).map(element =>  element.Year);
    }

// console.log(getYears(getFinals,fifaData));

//   




/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// 
// console.log(getWinners(getFinals,fifaData));
    function getWinners(callBack,data){
        const winners =[];
        callBack(data).map(element=>{
            if(element['Home Team Goals' > element['Away Team Goals']]){
                winners.push(element['Home Team Name'])
            }else{
                winners.push(element['Away Team Name']);
            } 
        });
        return winners;
    }

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callBack1,callBack2,data) {
    let years = callBack1(getFinals,data);
    let winners = callBack2(getFinals,data);
    for(let i = 0; i<years.length; i++){
        console.log(`In ${years[i]}, ${winners[i]} won the world cup!`)
    }
};

// getWinnersByYear(getYears,getWinners,fifaData);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeTeamTotal = data.reduce(function(accumulator, x){
        return accumulator + x['Home Team Goals'];
    },0)
    const awayTeamTotal = data.reduce(function(accumulator, x){
        return accumulator + x['Away Team Goals'];
    },0)
    
    return `HomeTeamAverageGoals = ${homeTeamTotal/data.length}
    AwayTeamAverageGoals = ${awayTeamTotal/data.length}`
    

};

// console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

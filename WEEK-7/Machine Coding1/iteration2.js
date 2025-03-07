// ----------------------- 1 ------------------

let expenses = [
    {description: "Groceries" ,amount:50, category: "Food"},
    {description: "Electricity Bill" ,amount:100, category: "Utilities"},
    {description: "Dinner" ,amount:30, category: "Food"},
    {description: "Internet Bill" ,amount:50, category: "Utilities"}
]

// Q -> konsa category ka kitna expense huya hai

let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] +=(report[expense.category] ||0)+ expense.amount;
    return report;
},{Food:0, Utilities:0}
);

// console.log(expenseReport);

// ------------------------- 2 ----------------
let tasks = [
    {description: "Write report",completed:false,priority:2},
    {description: "Send Email",completed:true,priority:3},
    {description: "Prepare presentation",completed:false,priority:1},
]

// Q -> give those task which have not completed and sort them

let pendingSortedtask = tasks
    .filter((task) => !task.completed)
    .sort((a,b) => a.priority-b.priority)

// console.log(pendingSortedtask)

// ----------------  3  -------------------

let movieRatings = [
    {title: "Movie A", ratings: [4,5,3]},
    {title: "Movie B", ratings: [5,5,4]},
    {title: "Movie C", ratings: [3,4,2]},
]

// Q -> Avegrate rating of a movie

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum+rating, 0);
    let average = total / movie.ratings.length;
    // movie.ratings = average;
    // return movie;
    return {title:movie.title, ratings: average.toFixed(2)}

})

console.log(averageRatings);

// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// F

function calculateGrade(score){
    if(score >= 90)
        return 'A'
    else if(score >= 80)
        return 'B'
    else if(score >= 70)
        return 'C'
    else if(score >= 60)
        return 'D'
    else
        return 'F'
}

let marks = 59
let Grade = calculateGrade(marks)

console.log(`Grade ${Grade}`)

console.log(calculateGrade(marks))

console.log(`Grade ${calculateGrade(marks)}`)
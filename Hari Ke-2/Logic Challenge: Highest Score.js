// {
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> },
//   <class>: { name: <name>, score: <score> }
// }

function highestScore(students) {
  
  var output = {};
  
  var rankingkelas = {};
  var kelas = [];
  if(students.length < 1){
    return {};
  }
  if (kelas.length < 1){
    kelas.push(students[0].class)
  }
  for (var i = 0; i < students.length; i++) {
    var temp = '';
    for (var j = 0; j < kelas.length; j++) {
      if (kelas[j] !== students[i].class){
        temp = students[i].class
      }
      else {
        temp = '';
        break;
      }
    }
    if (temp.length > 0){
      kelas.push(temp);
    }
  }
  
  for (var i = 0; i < kelas.length; i ++){
    var temp = 0;
    for (var j = 0; j < students.length; j ++){
      if (kelas[i] === students[j].class && temp < students[j].score){
        temp = students[j].score;
        rankingkelas = {name: students[j].name, score: students[j].score};
      }
    }
    output[kelas[i]] = rankingkelas;
  }
  return output;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

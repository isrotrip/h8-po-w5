// {
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [
//     { name: <name>, score: <score> },
//     ...
//   ],
//   <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
// }

function graduates (students) {
  var jumlahKelas = [];
  var siswaLulus = [];
  var output = {};
  if (students.length < 1){
    return {};
  }
  if(jumlahKelas.length < 1){
    jumlahKelas.push(students[0].class);
  }
  for(var i = 0; i < students.length; i ++){
    var temp = '';
    for(var j = 0; j < jumlahKelas.length; j ++){
      if(jumlahKelas[j] !== students[i].class){
        temp = students[i].class;
      }
      else {
        temp = '';
        break;
      }
    }
    if(temp.length > 0){
      jumlahKelas.push(temp);
    }
  }
  for(var i = 0; i < jumlahKelas.length; i ++){
    for(var j = 0; j < students.length; j ++){
      if(students[j].score > 75 && jumlahKelas[i] === students[j].class){
        siswaLulus.push({name: students[j].name, score: students[j].score});
      }
    }
    output[jumlahKelas[i]] = siswaLulus;
    siswaLulus = [];
  }
  return output;
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}

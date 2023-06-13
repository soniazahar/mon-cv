 /*script 1*/
students =[
    {
   name:"reda",
     notes:[14,15,12,16],
 },
   {
   name:"ahmed",
     notes:[14,10,12,18],
 },
   {
   name:"sihem",
     notes:[9,15,2,16],
 },
   {
   name:"zero",
     notes:[14,5,02,19],
 }
  ] ;
 
   moyen = (notes) => {
     sum = 0;
      for (note of notes){
           sum = sum + note;
 
      }
 return (sum / notes.length)
 };
 
 compareMoyen = (a,b) =>{
   return b.moyen - a.moyen;
 }

 for (student of students){
   student.moyen  = moyen(student.notes);
     student.worst = Math.min(...student.notes);
 student.best = Math.max(...student.notes);
     
 }
 students.sort(compareMoyen);
 triStudent = (student) => {
   return ` ${student.name} avec une moyenne ${student.moyen} avec une meilleure note ${student.best}
 et une mauvaise note de ${student.worst}`;
 };
 console.log(`top 3 students
         1 : ${triStudent(students[0])}
     2 : ${triStudent(students[1])}
     3 : ${triStudent(students[2])}`);
 
 console.log(students)
  
 /*script 2*/
 phrase= "vous savez,moi je ne crois pas a vous discours, vous etes ";
mots = phrase.toLowerCase().replace(',' , '').split(' ');
 frequence =   {};
for (mot of mots){
  if(frequence[mot]){
    frequence[mot]++
  }else{
    frequence[mot] = 1
  }
//console.log(frequence);
freq = [];
for (k in frequence ){
  freq.push({
    mot:k,
        count:frequence[k]
  });
}}
freq.sort((a,b) => a.count - b.count );
console.log(freq) 
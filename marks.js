var g_class = {

'students':[{
  'name':"Leo",
  'marks':"89",
  },
  {
   'name':"Harry",
   'marks':"90",
  },
  {
   'name':"John",
   'marks':"70",
  },
  {
   'name':"Peter",
   'marks':"85",
  }
]
};

for (var i=0; i < g_class.students.length; i++) {
       if(g_class.students[i]['marks']>=85){
         console.log(g_class.students[i]['name'],['marks'])
 }
}
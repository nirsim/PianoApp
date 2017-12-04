pianoApp.factory ("Student",function(){

function Student(name,position,byear){
        this.name = name;
        this.position = position;
        this.byear = byear;
        this.age = function()
            {
               var d = new Date();
               return d.getFullYear() - this.byear ; 
            }

}
return Student;
}) ;


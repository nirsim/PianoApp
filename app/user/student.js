/* Create student service*/

pianoApp.factory ("Student",function(){

function Student(name, email, pass, byear){
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.byear = byear;
        this.age = function()
            {
               var d = new Date();
               return d.getFullYear() - this.byear ; 
            }

}
return Student;

}) ;


pianoApp.factory ("Note",function(){
    
    function Note(composer,compositions){
            this.composer = composer;
            this.compositions = compositions;
            
    }
    return Note;
    
    }) ;
    



/* Active student service*/
pianoApp.factory("activeUser", function(Student){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});


/*Create task service*/

pianoApp.factory("Task", function(){
    function Task(name, payment, yearsPlaying, notes, day, hour){
            this.name = name;
            this.payment = payment;
            this.yearsPlaying = yearsPlaying;
            this.notes = notes;
            this.day = day;
            this.hour = hour;
    }
    
        return Task;
    });

/*Create tasks service*/

    pianoApp.factory("tasks", function(Task) {
        var taskArr = [];
    
        var add = function(task) {
            taskArr.push(task);
        }
    
        var update = function(index, task) {
            taskArr[index] = task;
        }
    
        var remove = function(index) {
            taskArr.splice(index, 1);
        }
    
        var load = function(taskArr) {
            for (var i = 0; i < taskArr.length; i++) {
                taskArr.push(new Task(taskArr[i]))
            }
        }
    
        var getAll = function() {
            return taskArr;
        }
    
        var get = function(index) {
            return taskArr[index];
        }
    
        var removeAll = function() {
            taskArr = [];
        }
    
        return {
            add: add,
            update: update,
            remove: remove,
            load: load,
            getAll: getAll,
            get: get,
            removeAll: removeAll
        }
    })



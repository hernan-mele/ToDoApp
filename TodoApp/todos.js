export default class Todos {
    // Do NOT modify the constructor
    constructor() {
        // we don't capture any parameters here
        // we're defining an array of todos with two example todos
        this.todos = [{
            title: "Learn JavaScript",
            category: "work"
        }, {
            title: "Meditate",
            category: "personal"
        }];
    }

    // TODO: define remaining instance methods
    getAll(){
        return this.todos;
    }

    getCount(){
        let count = 0;
        this.todos.forEach(todo => count++)
        return count;
    }

    add(title, category){
        this.todos.push({title: title, category: category});
    }

    getWork(){
        return this.todos.filter(todo => todo.category === 'work');
    }
    
    getWorkCount(){
        let total = 0;
        this.todos.forEach(todo => {
            if(todo.category === 'work'){
                total++;
            }
        })
        return total;
    }

    getPersonal(){
        return this.todos.filter(todo => todo.category === 'personal');
    }

    getPersonalCount(){
        let total = 0;
        this.todos.forEach(todo => {
            if(todo.category === 'personal'){
                total++;
            }
        })
        return total;
    }
}

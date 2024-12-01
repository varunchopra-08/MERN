export function Todos({todos =[]}) {
    return( <div>
        {todos.map(function(todo){ //iterate over all todos and display all of them
            return (<div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed}</button>
        </div>
            );
        })}
        
    </div>
    );

}
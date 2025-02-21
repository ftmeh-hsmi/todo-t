const TODOS = JSON.parse(localStorage.getItem("todos")) ?? []
let editableItem;
let tryCount = 0


function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(TODOS))
}

function handleDeleteTodo(itemId) {
    try {
        const foundIndex = TODOS.findIndex(item => item.id === itemId)
        TODOS.splice(foundIndex, 1)
        updateLocalStorage();
        renderTodos()
    } catch (error) {
        if (tryCount < 2) {
            tryCount++;
            handleDeleteTodo(itemId)
        } else {
            tryCount = 0
        }
    }
}

function handleEdit(itemId) {
    editableItem = itemId
    renderTodos()
}
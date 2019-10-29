// GET REQUEST
function getTodos() {
    // longer syntax (old way)
    // =======================
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     params: {
    //         _limit: 10
    //     }
    // })
    // .then(res => showOutput(res))
    // .catch(err => console.log(err));

    // shorter syntax
    // ===============
    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
    // longer syntax (old way)
    // =======================
    // axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     data: {
    //         title: 'New toDo',
    //         completed: false
    //     }
    // })
    // .then(res => showOutput(res))
    // .catch(err => console.log(err));

    // shorter syntax
    // ===============
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New toDo',
            completed: false
        }
    )
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

// (update related requests)
// PUT/PATCH REQUEST
// put completely replaces / patch just adds/replaces the desired props
function updateTodo() {
    // put
    // axios
    //     .put('https://jsonplaceholder.typicode.com/todos/3', {
    //         title: 'Updated ToDo with the ID 3',
    //         completed: true
    //     }
    // )
    // .then(res => showOutput(res))
    // .catch(err => console.log(err));

    // patch
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/3', {
            title: 'Updated ToDo with the ID 3',
            completed: true
        }
    )
    .then(res => showOutput(res))
    .catch(err => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/4')
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// SIMULTANEOUS REQUESTS/DATA
function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    .then(
        axios.spread((todos, posts) => showOutput(posts))
    )
    .catch(err => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
    console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
    console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
    console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

    return config;
}, error => {
    return Promise.reject(error);
});

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
        <div class="card card-body mb-4">
            <h5>Status: ${res.status}</h5>
        </div>
        <div class="card mt-3">
            <div class="card-header">
                Headers
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.headers, null, 2)}</pre>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header">
                Data
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.data, null, 2)}</pre>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header">
                Config
            </div>
            <div class="card-body">
                <pre>${JSON.stringify(res.config, null, 2)}</pre>
            </div>
        </div>
    `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
import { addDoc, db, collection, getDocs,doc ,deleteDoc, updateDoc } from "./firebase.js";


const todoCollection = collection(db, "todo")
const parent = document.querySelector("#parent")
// console.log(parent,"parent");

const addTodo = async () => {
    try {
        const todoInput = document.getElementById("todoInput")
        // console.log("todoInput", todoInput.value)

        if (todoInput.value.length <= 0) {
            alert("Enter your task")
            return
        }
    

        const obj = {
            value: todoInput.value
        }

        todoInput.value = ""
        const response = await addDoc(todoCollection, obj)
        todoGet()
        // console.log("res" , response.id);
    } catch (error) {
        console.log("error", error.message);
    }
}


const todoGet = async () => {
    try {
        const querySnapshot = await getDocs(todoCollection);

parent.innerHTML = ""
        querySnapshot.forEach((doc) => {

            const obj = {
                id: doc.id,
                ...doc.data()
            }


            parent.innerHTML += `<div class="card-body">
              <h5 class="card-title">${obj.value}</h5>
              <button id="${obj.id}" onclick="edtTodo(this)">Edit</button>
              <button id="${obj.id}" onclick="dltTodo(this)">Delete</button>
            </div>
          </div>`
        })
    } catch (error) {
        console.log("error", error.message);
    }
}


const dltTodo = async (ele) =>{
    try {
        console.log("ele",ele.id);
        const del = await deleteDoc(doc(db,"todo",ele.id))
        todoGet()
    } catch (error) {
        console.log("error",error.message);
    }
}


const edtTodo = async (ele) =>{

    try {
        console.log("ele",ele.id);
        const editkrdo = prompt("Enter your edit task")
        console.log(editkrdo);
        const obj = {
            value : editkrdo
        }
        // console.log("obj",obj);
        const washington = doc(db,"todo",ele.id)
        console.log(washington,"washington");
        const updateTodo = await updateDoc(washington,obj)
        console.log("updateDoc",updateDoc);
        todoGet()


    } catch (error) {
        console.log("error",error.message);
    }
}

const dltAllTodo = async ()=>{
    
    try {

        const querySnapshot = await getDocs(todoCollection);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
          });

          parent.innerHTML = ""


    } catch (error) {
        console.log("error",error.message);
    }
}

window.addEventListener("load", todoGet)
window.addTodo = addTodo
window.dltTodo = dltTodo
window.edtTodo = edtTodo
window.dltAllTodo = dltAllTodo
import { v4 as uuidv4 } from "uuid";

export const bookReduce=(books,action)=>{
    switch(action.type){
        case 'add-book': return [...books,{id:uuidv4(),title:action.payload.title,author:action.payload.author}]
        
        case 'remove-book' : return books.filter((book) => book.id !== action.payload.id);

        default: return books;
    }

}
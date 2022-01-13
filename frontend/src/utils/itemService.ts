import { v4 as uuidv4 } from "uuid";
import {useState} from "react";

export interface IItemService{
    getItems: () => DataItem[],
    addItem: (item: string, count: number) => void,
    removeItem: (id: string) => void
    addCount: (id:string) => void
    decreaseCount: (id:string) => void
}

export interface DataItem {
    id: string;
    item: string;
    count: number;
    streichen: boolean;
}

const ItemService = ():IItemService => {

    const [items, setItems] = useState<DataItem[]>([]);

    function addData(url:string = '', data = {}, method:string = '') {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),  
        })
        .then(data => data.json())
        .then(data => {
            let tempItems:DataItem[] = []
            for (let i = 0; i < data.length; i++){
                let item:DataItem = {id: data[i].id, item: data[i].name, count: parseInt(data[i].anzahl), streichen: data[i].gestrichen }
                tempItems.push(item)
            }
            setItems(tempItems)
        })
        .catch(err => console.error(err));
    }

    return {
        getItems: () => items,
        addItem: (item:string, count:number) => {
            const id:string = uuidv4()
            addData('http://localhost:8080/list/addItem', {id: id, name: item, anzahl: count, gestrichen: false}, 'POST');
        },
        removeItem: (id:string) => {
            addData('http://localhost:8080/list/removeItem/' + id, {}, 'DELETE');
        },
        addCount: (id:string) => {
            addData('http://localhost:8080/list/addCount/' + id, {}, 'PUT');
        },
        decreaseCount: (id:string) => {
            addData('http://localhost:8080/list/decreaseCount/' + id, {}, 'PUT');
        }
    }
}

export default ItemService
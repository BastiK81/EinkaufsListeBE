import React, {FormEvent, FormEventHandler, useState} from "react";
import {DataItem, IItemService} from "../utils/itemService";
import {Box, Button, Grid, Stack, TextField} from "@mui/material";

interface AppProps{
    addItem: (item: string, count: number) => void;
}

const ItemInput = (props: AppProps) => {
    const [item, setItem] = useState("");
    const [count, setCount] = useState(1);
    const {addItem} = props;


    const add = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!item || count === 0) {
            return;
        }
        addItem(item, count)
        setItem("")
        setCount(1)
    };

    return (
        <div className="App">
            <form onSubmit={add}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        type="text"
                        defaultValue=""
                        size="small"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Count"
                        type="number"
                        defaultValue="0"
                        size="small"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                    />
                    <Button type="submit" variant="contained">add item</Button>
                </Stack>
            </form>
        </div>
    );
}

export default ItemInput
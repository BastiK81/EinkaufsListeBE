import React, {ReactNode, useState} from "react";
import {DataItem, IItemService} from "../utils/itemService";
import {Box, Button, Container, Grid, Stack, TextField} from "@mui/material";


interface AppProps {
    removeItem: (id: string) => void
    addCount: (id:string) => void
    decreaseCount: (id:string) => void
    items: DataItem[]
}

const Einkaufsliste = (props: AppProps) => {

    const {items, removeItem, addCount, decreaseCount} = props;

    const remove = (id:string) => {
        console.log("hold")
        removeItem(id);
    };

    const add = (id:string) => {
        console.log("hold")
        addCount(id);
    };

    const decrease = (id:string) => {
        console.log("hold")
        decreaseCount(id);
    };

    return (
        <div className="App">Einkaufsliste
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {items.map((item:DataItem) => {
                        return (
                            <div key={item.id}>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Button type="submit" variant="contained" onClick={() => decrease(item.id)}>-</Button>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Name"
                                        defaultValue="Item"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                        value={item.item}
                                    />
                                    <TextField
                                        id="standard-number"
                                        label="Count"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                        value={item.count}
                                    />
                                    <Button type="submit" variant="contained"
                                            onClick={() => remove(item.id)}>remove</Button>
                                    <Button type="submit" variant="contained" onClick={() => add(item.id)}>+</Button>
                                </Stack>
                            </div>
                        )
                    }
                )}

            </Stack>
        </div>
    );

}

export default Einkaufsliste
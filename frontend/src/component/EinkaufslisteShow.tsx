import React from "react";
import {DataItem} from "../utils/itemService";
import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";


interface AppProps {
    items: DataItem[]
}

const EinkaufslisteShow = (props: AppProps) => {

    const {items} = props;

    const streichen = (id:string) => {
        console.log('streichen')
    };

    return (
        <div className="App">Einzukaufen
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

                                <Button type="submit" variant="contained" onClick={() => streichen(item.id)}>streichen</Button>
                            </Stack>
                        </div>
                    );
                })}
            </Stack>
        </div>
    );

}

export default EinkaufslisteShow
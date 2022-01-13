import React from "react";
import Einkaufsliste from "../component/Einkaufsliste";
import ItemService, {DataItem, IItemService} from "../utils/itemService";
import ItemInput from "../component/ItemInput";
import {Stack} from "@mui/material";
import EinkaufslisteShow from "../component/EinkaufslisteShow";
import {Routes, Route} from "react-router-dom";


export interface AppProps {

}

const Body = (props: AppProps) => {

    const itemService:IItemService = ItemService();

    return(
        <div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <ItemInput addItem={itemService.addItem} />

                <Routes>
                    <Route path="/admin" element={<Einkaufsliste items={itemService.getItems()} addCount={itemService.addCount} decreaseCount={itemService.decreaseCount} removeItem={itemService.removeItem}/>} />
                    <Route path="/" element={<EinkaufslisteShow items={itemService.getItems()} />} />
                </Routes>

            </Stack>
        </div>
    )

}

export default Body
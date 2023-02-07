import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import ListExpense from './ListExpense'
import PopupForm from './PopupForm'
export const App = () => {
    const [allExpense, setExpense] = useState([])
    const [amount, setAmount] = useState(0)


    console.log(allExpense)
    return (
        <div>
            <TextField label="Amount" variant="standard"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <Button variant="contained"
                onClick={() => {
                    setExpense([...allExpense, amount])
                    setAmount(0)
                }}
            >Add</Button>
            {/* <ListExpense /> */}
            <PopupForm />

        </div >
    )
}
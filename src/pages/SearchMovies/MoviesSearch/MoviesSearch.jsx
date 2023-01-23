import { useState } from "react";
import { Form, Label, Input, Button } from "./MovieSearch.styled";

const MoviesSearch = ({handleSearchParams}) => {
    const [value, setValue] = useState('')
    
    const handleValue = (value) => {
        setValue(value);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        handleSearchParams(e.target.elements.name.value)
        setValue('')
        
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Label>
                <Input value={value}  name='name' onChange={(e) => handleValue(e.target.value)} type="text" placeholder="Search..."/>
                <Button type="submit">Search</Button>
            </Label>
        </Form>
        </>
    )
}

export default MoviesSearch;
import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default function NewGame(props) {

    const [gameName, setGameName] = useState('')

    const handleSubmit = (e) => {        
        e.preventDefault()
        props.createGame(gameName)
    }

    const handleChange = (e) => {
        setGameName(e.target.value)
    }

    return (
       <Form onSubmit={handleSubmit}>
           <FormGroup>
               <Label for="gameName">Название игры</Label>
               <Input type="text" id="gameName" placeholder="введите название игры" value={gameName} onChange={handleChange}></Input>
           </FormGroup>
           <Button type="submit" block>Создать</Button>
       </Form>
    )
}

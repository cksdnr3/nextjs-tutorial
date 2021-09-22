import { Button, Form } from 'semantic-ui-react'

const Login = () => {

    return (
        <div>
            <Form style={{display: 'flex', flexDirection: 'column', width: ' 350px', margin: 'auto', padding: '130px 0'}}>
                <Form.Field>
                <label>ID</label>
                <input placeholder='Enter ID' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='Enter Password' />
                </Form.Field>
                <Button color="blue" type='submit'>Login</Button>
            </Form>
        </div>
    )
} 

export default Login;
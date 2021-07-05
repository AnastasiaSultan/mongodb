
import {Form,Button} from 'react-bootstrap';

const welcome = (props)=>{
    return(
        <>
            <h1>welcome</h1>
            <h3>{props.text}</h3>
            <Button onClick={()=>{props.logout()}} >Logout</Button>
        </>
    )
}

export default welcome
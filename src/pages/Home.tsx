import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if(!loggedIn){
            return alert('Email ou senha icorretos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center marginBottom='10px'>
                    <h1><strong>Faça o login</strong></h1>
                </Center>
                <Input marginBottom='10px' placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input marginBottom='5px' placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <Center>
                    <DButton
                        onClick={() => validateUser(email, password)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;

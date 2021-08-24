
import { Grid, Box, Image, Text, Heading } from "@chakra-ui/react"
import { ButtonComponent } from "../components/Button";
import landingImg from '../img/background_landing.png';

export function Landing() {
    return (
        <Grid 
            border="1px solid black" 
            templateColumns={{
                md: '0.82fr 1fr',
                sm: '1fr'
            }} 
            height="100vh"
        >
            <Box 
                background="light" 
                display={{
                    md: 'flex',
                    sm: 'none',
                    base: 'none',
                }}
                alignItems="center" 
                justifyContent="center"
            >
                <Image src={landingImg} width="100%" objectFit="cover" />
            </Box>
            <Box
                background="purple"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Heading 
                        fontSize="6rem" 
                        color="white" 
                        fontWeight="bold"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        lineHeight="10rem"
                    >to.do</Heading>
                    <Text 
                        color="white" 
                        textAlign="center"
                        fontSize="1rem"
                    >Liste seus afazeres <br /> favoritos agora mesmo</Text>
                    <ButtonComponent>Continuar</ButtonComponent>
                </Box>
            </Box>
        </Grid>
    )
}
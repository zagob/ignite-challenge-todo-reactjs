import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonType extends ButtonProps {
    children: string;
}

export function ButtonComponent({ children, ...rest }: ButtonType) {
    return (
        <Button 
            background="green" 
            borderRadius="none" 
            width="220px"
            marginTop="5rem"
            borderStartRadius="10px"
            borderEndRadius="10px"
            color="white"
            transition="0.2s"
            _hover={{
                filter: 'brightness(0.92)',
            }}
            {...rest}
        >
            {children}
        </Button>
    )
}
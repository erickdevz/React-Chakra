import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    RadioGroup,
    Radio,
    Input,
    InputGroup,
    HStack,
    VStack,
    Box
} from '@chakra-ui/react'

import styles from './Components.module.css'

export function Login() {
    return (

        <div className={styles.mainLogin}>
            <h1>Login</h1>

            <div className={styles.cardLogin}>

                <FormControl height='100%'>
                    <HStack display='flex' justifyContent='center' alignItems='center'>
                        <Box width='20%' margin='30px 0 30px 0'>
                            <FormLabel margin='0 0'>Nome:</FormLabel>
                            <Input id='nome' type='text' _placeholder='Digite seu nome:' />
                        </Box>
                        <Box width='20%' margin='30px 0 30px 0'>
                            <FormLabel margin='0 0'>Data de Nascimento:</FormLabel>
                            <Input id='born' type='date' />
                        </Box>

                    </HStack>

                    <HStack display='flex' justifyContent='center' alignItems='center'>

                        <Box width='20%' margin='30px 0 30px 0'>
                            <FormLabel margin='0 0'>Email:</FormLabel>
                            <Input id='email' type='email' _placeholder='Digite seu email:' />
                        </Box>
                        <Box width='20%' margin='30px 0 30px 0'>
                            <FormLabel margin='0 0'>Senha:</FormLabel>
                            <Input id='senha' type='password' _placeholder='Digite sua senha:' />
                        </Box>

                    </HStack>

                    <HStack display='flex' justifyContent='center' alignItems='center'>
                        <Box width='200px' margin='30px 0 30px 0'>
                            <FormLabel margin='0 0'>Sexo:</FormLabel>
                            <RadioGroup display='flex' justifyContent='space-between'>
                                <Radio value='masculino'>Masculino</Radio>
                                <Radio value='feminino'>Feminino</Radio>
                            </RadioGroup>
                        </Box>
                    </HStack>
                    <HStack display='flex' justifyContent='center' alignItems='center' margin='20px 0 20px 0'>
                        <Button colorScheme='teal' size='md'>Enviar</Button>
                    </HStack>
                </FormControl>
            </div>
        </div>

    )
}

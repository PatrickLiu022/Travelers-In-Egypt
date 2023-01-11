

// import './css/Contact.css';
import React, { useState } from 'react';
// import 'firebase/database';
import { useForm } from 'react-hook-form';
import { useToast, VStack, HStack, Stack, Text, Button, Box, Textarea, Select, Input } from '@chakra-ui/react';


export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [select, setSelect] = useState('')
    const [response, setResponse] = useState('')
    const toast = useToast()
    const handleSubmit = () => {
        toast({
            title: {
                formName: name,
                formEmail: email,
                formSelect: select,
                formResponse: response
            },
            status: 'success',
            duration: 3000
        })
    }

    return (
        <VStack>
            <VStack
                w='100%'
                alignItems='left'
            >
                <Stack>
                    <Box
                        paddingLeft='7%'
                    >
                        <Text
                            bg='#ffc55b'
                            display='inline-flex'
                            paddingLeft='5px'
                            paddingRight='10px'
                            fontWeight='600'
                        >
                            General Contact Information:
                        </Text>
                    </Box>
                </Stack>
                <Stack
                    paddingLeft='8%'
                >
                    <Box
                        h='flex'
                        w='90%'
                        paddingLeft='5px'
                        marginBottom='15px'
                        borderLeft='3px solid #D08800'
                        bg='#ffe2ae'
                    >
                        <Text
                            paddingTop='5px'
                            paddingLeft='5px'
                        >
                            <Text>
                                <em style={{ fontWeight: 600, fontStyle: 'initial' }}>Email: </em>
                                lorem@ipsum.com
                            </Text>
                        </Text>
                        <Text
                            fontStyle='italic'
                            paddingBottom='5px'
                            paddingLeft='5px'>
                            Send any applications, inquiries, or concerns to this email.
                        </Text>
                    </Box>
                </Stack>
            </VStack>
            <form
                onSubmit={handleSubmit}
            >
                <VStack
                    w='100%'
                    alignItems='left'
                >
                    <Stack>
                        <Box
                            paddingLeft='7%'
                        >
                            <Text
                                bg='#ffc55b'
                                display='inline-flex'
                                paddingLeft='5px'
                                paddingRight='10px'
                                fontWeight='600'
                                >
                                Contact Request Form:
                            </Text>
                        </Box>
                    </Stack>
                    <Stack
                        paddingLeft='8%'>
                        <Box
                            h='flex'
                            w='90%'
                            paddingLeft='5px'
                            marginBottom='15px'
                            borderLeft='3px solid #D08800'
                            bg='#ffe2ae' >
                            <Stack direction='row'
                                width='60%'
                                alignItems='center'
                                padding='10px 0px 5px 0px'>
                                <Text
                                    flex={1}
                                    textAlign='center'
                                    height='fit-content'
                                    em style={{ fontWeight: 600, fontStyle: 'initial' }}>
                                    Your Name:
                                </Text>
                                <Input
                                    border='3px solid'
                                    borderColor='#ffc55b'
                                    bg='#FFFFFF'
                                    placeholder='Enter name here'
                                    flex={3}
                                    borderRadius='1px'
                                    onChange={(event) => {
                                        setName(event.currentTarget.value)
                                    }}
                                />
                            </Stack>
                            <Stack
                                direction='row'
                                width='60%'
                                alignItems='center'
                                padding='5px 0px 10px 0px'>
                                <Text
                                    flex={1}
                                    textAlign='center'
                                    height='fit-content'
                                    em style={{ fontWeight: 600, fontStyle: 'initial' }}
                                >
                                    Your Email:
                                </Text>
                                <Input
                                    border='3px solid'
                                    borderColor='#ffc55b'
                                    bg='#FFFFFF'
                                    placeholder='Enter Email here'
                                    flex={4}
                                    borderRadius='1px'
                                    onChange={(event) => {
                                        setEmail(event.currentTarget.value)
                                    }}
                                />
                            </Stack>
                            <Text>
                                Who are you trying to contact?
                            </Text>
                            <Select placeholder='Select option'
                                bg='#FFFFFF'
                                border='3px solid'
                                borderColor='#ffc55b'
                                borderRadius='1px'
                                width='60%'
                                onChange={(event) => {
                                    setSelect(event.currentTarget.value)
                                }}>
                                <option value='option1'>Option1</option>
                                <option value='option2'>Option2</option>
                                <option value='option3'>Option3</option>
                                <option value='option4'>Option4</option>
                            </Select>

                            <Text>
                                Comment, Question, Concerns:
                            </Text>
                            <Textarea
                                bg='#FFFFFF'
                                border='3px solid'
                                borderColor='#ffc55b'
                                placeholder='Enter comments here'
                                borderRadius='1px'
                                onChange={(event) => {
                                    setResponse(event.currentTarget.value)
                                }}
                            />
                            <HStack
                                gap='20px'
                                alignItems='flex-end'
                                padding='25px'>
                                <Text fontStyle='italic'
                                    height='fit-content'
                                >
                                    The individual will be informed of your
                                    contact request once submitted. Your message
                                    will be forwarded to them, and you can expect
                                    a response within 2 - 3 business days.
                                </Text>
                                <Button
                                    height='20px'
                                    bgColor='#ffc55b'
                                    padding='8px 50px 8px 40px'
                                    borderRadius='4px'
                                    type='submit'>
                                    Submit
                                </Button>
                            </HStack>
                        </Box>
                    </Stack>
                </VStack>
            </form>
        </VStack>
    )
}

const form = [
    {
        title: "Name",
        type: "text",
        name: "name"
    },
    {
        title: "Email",
        type: "email",
        name: "email"
    },
];

import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from 'axios'
import {signIn} from 'next-auth/react'
import { useRouter } from "next/router";
import {message} from 'antd'

const AuthPage = () => {

    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [variant, setVariant] = useState('login')

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    // const onSubmit = (data: {username: string, email: string, password: string}) => {
    //     console.log(data)
    // }

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })
            message.success({
                duration: 2,
                content: 'Register Successful'
            })
        }
        catch(e) {
            console.error(e)
            message.error({
                duration: 2,
                content: 'Something went wrong'
            })
        }
    }, [email, name, password])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            })
            router.push('/')
            message.success({
                duration: 2,
                content: 'Login Successful'
            })
        }
        catch(e) {
            console.error(e)
            message.error({
                duration: 2,
                content: 'Something went wrong'
            })
        }
    }, [email, password])

    return ( 
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img className="h-14" src="/images/logo.png" alt="Netflix" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-2xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                             {variant === 'register' && (
                                <Input
                                    label="name"
                                    value={name}
                                    onChange={(e) => setName(e)}
                                    id="name"
                                />
                             )}
                             <Input
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e)}
                                id="email"
                                type="email"
                              />
                             <Input
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e)}
                                id="password"
                                type="password"
                              />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 font-bold transition">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                                {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                                <span onClick={toggleVariant} className="text-white ml-1 font-bold hover:underline cursor-pointer">
                                    {variant === 'login' ? 'Create an account' : 'Login'}
                                </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AuthPage;
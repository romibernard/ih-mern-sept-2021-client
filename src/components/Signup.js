// ./src/Signup.js

import React, { useState, useContext } from 'react'

import UsersContext from '../context/Users/UsersContext'



export default function Signup() {

    // GLOBAL
    const ctxUser = useContext(UsersContext)

    const { registerUser } = ctxUser


    // LOCAL

    const [ newUser, setNewUser ] = useState({
        username: "",
        email: "",
        password: ""
    })


    // FUNCIONES DE LOCAL

    const handleChange = (event) => {

        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })

    }

    const submitData = (event) => {

        event.preventDefault()

        registerUser(newUser)

    } 

    return (
        <>
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 class ="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Crea tu cuenta
                    </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6" onSubmit={ (e) => { submitData(e) } }>
                        <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Escribe un usuario
                                </label>
                                <div class="mt-1">
                                    <input 
                                        name="username" 
                                        type="text" 
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                        onChange={ (e) => { handleChange(e) } }
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Correo electrónico
                                </label>
                                <div class="mt-1">
                                    <input 
                                        name="email" 
                                        type="email"  
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                        onChange={ (e) => { handleChange(e) } }
                                        />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div class="mt-1">
                                    <input 
                                        name="password" 
                                        type="password" 
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                        onChange={ (e) => { handleChange(e) } }
                                    />
                                </div>
                            </div>


                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Crear cuenta
                                </button>
                            </div>
                        </form>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'

const ContactPage = () => {
    return (
        <div className='md:w-3/5 w-11/12 m-auto mt-5'>
            <h1 className='text-4xl font-light mb-10'>Napisz do nas</h1>
            <form className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Twój adres email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" placeholder="jankowalski@email.com" required/>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temat</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:shadow-sm-light" placeholder="Jak możemy Ci pomóc?" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Wiadomość</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-zinc-500 focus:border-zinc-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500" placeholder="Zostaw wiadomość..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-zinc-700 sm:w-fit hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">Wyślij wiadomość</button>
            </form>
        </div>
    )
}

export default ContactPage
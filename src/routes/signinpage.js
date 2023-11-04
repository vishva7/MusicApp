const SignInPage = () => {
    return (

        <div class="bg-black h-screen w-full">
            <div class=" ml-80  pt-20   p-8 pl-60">
                <p class="text-4xl font-bold text-green-400 dark:text-white ">Sign up to</p>
                <p class="text-4xl font-bold text-green-400 dark:text-white ">start Listening</p>
            </div>
            <div class="ml-80 pl-20">

                <div class="ml-28 pl-14 mt-3 mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-[#24292F] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
                </div>
                <div class="ml-64 center mr-28 pl-5 mb-7">
                    <button type="submit" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-10 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Next</button>
                </div>
                <div class="pl-16 ml-20  text-white">-------------------------------or-------------------------------  </div>

                <div class="ml-40 pl-8 pt-7">


                    <div>
                        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-5 mb-2">
                            <svg class="w-20 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                            </svg>
                            Continue with Facebook
                        </button>
                    </div>

                    <div class="mt-2">
                        <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <svg class="w-20 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Continue with Google....
                        </button>
                    </div>
                </div>

                <div class="pl-16 ml-20 mt-4 text-white">----------------------------------------------------------------  </div>
                <div class="ml-49 pl-60 mt-3 text-sm text-white">
                    Already have an account?


                    <a href="#" class="font-medium text-white underline  hover:text-green-400">Log in here</a>
                </div>

                <div class="ml-5 pl-20 mt-2 pt-4 text-white text-sm">
                    This site is protected by reCAPTCHA and the Google
                    <a href="#" class="font-medium text-white  underline  text-sm hover:text-red-400"> Privacy Policy,Terms of Service</a> apply
                </div>








            </div>





        </div>
    );
}

export default SignInPage;
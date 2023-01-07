import { Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/logo.svg"
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import * as yup from 'yup'
import { useLoginCallback } from '../../action/useAuth';
import { IUser, UserContext } from '../../context/userContext';

export default function Index() {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const { handleLogin } = useLoginCallback();
    const userContext: IUser = React.useContext(UserContext);
    const toast = useToast()

    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(6, 'A minimium of 6 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });   


    const submit = async () => {
    
        if (!formik.dirty) { 
            toast({
                title: "You have to fill in th form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
            return;
        }else if (!formik.isValid) { 
            toast({
                title: "You have to fill in th form to continue",
                position: "bottom",
                status: "error",
                isClosable: true,
            })
          return;
        }else {
            setLoading(true);
            const request = await handleLogin(JSON.stringify(formik.values))   
            if (request.status === 200) { 
                localStorage.setItem("token", request?.data?.data?.token)   
                localStorage.setItem("id", request?.data?.data?.user?._id) 
                userContext.setUserInformation(request.data.data.user)
                toast({
                    title: "Login Successfully",
                    position: "bottom",
                    status: "success",
                    isClosable: true,
                })
                const t1 = setTimeout(() => {
                    setLoading(false); 
                    navigate("/dashboard")
                    clearTimeout(t1);
                }, 1000);  
            }else { 

                toast({
                    title: request?.data?.message,
                    position: "bottom",
                    status: "error",
                    isClosable: true,
                }) 
                setLoading(false)  
            }
        }
        setLoading(false);
    }  

    return (
        <div className=' w-screen h-screen overflow-hidden text-white bg-[#1b1c1d] flex justify-center items-center ' >
            <div className=' fixed inset-x-0 top-0 h-[60px] bg-[#252626] py-2 flex items-center justify-center ' >
                <img src={logo} alt="" />
            </div>
            <div className=' font-Inter-Medium mt-[60px] ' >
                <p className=' text-center mb-4 text-[20px] ' >Admin Login</p>
                <div className=' border border-[#444444] ' >
                    <div className=' px-4 w-full flex items-center py-3 border-b border-[#444444]' >
                        <div className=' w-fit pr-4 ' >
                            <p className='  w-[115px] text-[13px] ' >Email Address</p>
                        </div>
                        <div className=' w-[270px] ' > 
                            <input 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                } type="email"
                                className='border w-[270px] text-[13px] font-Inter-Regular border-[#444444] bg-[#252626] h-[45px] px-3 ' placeholder='ispeaklight@gmail.com'/>
                        
                            <div className="w-full h-auto pt-2">
                                {formik.touched.email && formik.errors.email && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div> 
                        </div>

                    </div>
                    <div className=' px-4 w-full flex items-center py-3 border-b border-[#444444]' >
                        <div className=' w-fit pr-4 ' >
                            <p className='  w-[115px] text-[13px] ' >Password</p>
                        </div>
                        <div className='' > 
                            <div className=' relative w-[270px] ' > 
                                <input 
                                    name="password"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("password", true, true)
                                    } 
                                    type={showPassword ? "text": "password" } className='border w-[270px] text-[13px] font-Inter-Regular border-[#444444] bg-[#252626] h-[45px] px-3 pr-12 ' placeholder='ispeaklight@gmail.com'/>                        
                                <button onClick={()=> setShowPassword((prev) => !prev)} className=' text-[13px] font-Inter-Regular text-[#98AD17] absolute right-2 top-0 bottom-0 ' >
                                    {showPassword? "hide":"Show"}
                                </button>
                            </div>
                            <div className="w-full h-auto pt-2">
                                {formik.touched.password && formik.errors.password && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                    >
                                        {formik.errors.password}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div>
                    <div className=' w-full flex justify-end py-3 px-4  ' >
                        <button disabled={loading} onClick={()=> submit()} className=' bg-[#98AD17] text-white w-[90px] px-3 text-[13px] h-[45px] ' >
                            {loading ? "Loading...": "Login"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 
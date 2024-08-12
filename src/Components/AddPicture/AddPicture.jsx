import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase.js';
import PleaseLogin from '../PleaseLogin/PleaseLogin'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../Firebase.js';


const AddPicture = () => {
    const [picture, setPicture] = useState(null)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [getBase64, setGetBase64] = useState(null)
    const [uploads, setUploads] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);



    const handleImage = (event) => {
        const file = event.target.files[0]
        setPicture(file)

        const reader = new FileReader();

        reader.onloadend = () => {
            setGetBase64(reader.result);
        };

        reader.readAsDataURL(file);
    }




    // LOADER
    const [loading, setLoading] = useState(false)



    // LoginToken
    const [loginToken, setLoginToken] = useState('')
    // console.log('-->',loginToken)
    const LoginToken = async () => {
        let TokenFound = await localStorage.getItem('Token')
        if (TokenFound) {
            setLoginToken(TokenFound)
        }
    }

    useEffect(() => {
        LoginToken()
    })
    const navigate = useNavigate()

    // HandleLogout
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success('Logged Out')
            navigate('/login')
            localStorage.setItem('Token', '')
        }).catch((error) => {
            toast.warning('An Error Occured')
        });
    }

    //   Firebase database
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (name === '') {
            toast.console.warn('Please enter tilte');

        }
        if (position === '') {
            toast.console.warn('Please enter description');

        }
        if (!picture) {
            toast.warn("Please select an image");
            setLoading(false);
            return;
        }

        try {
            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append('file', picture);
            formData.append('upload_preset', 'artist_photos');

            const response = await axios.post('https://api.cloudinary.com/v1_1/dnze36w9e/image/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            });
            const imageUrl = response.data.secure_url;

            // Add document to Firebase
            const docRef = await addDoc(collection(db, 'services'), {
                name,
                position,
                imageUrl,
                createdAt: new Date()
            })   // Add new upload to state
            setUploads([...uploads, { id: docRef.id, name, position, imageUrl }]);

            toast.success('Uploaded successfully!');
            setName('');
            setPosition('');
            setPicture(null);
        } catch (error) {
            console.error("Error uploading file:", error);
            toast.error("Error uploading file");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'services'));
                const uploadsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUploads(uploadsData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'services', id));
            toast.success('Deleted successfully')
            setUploads(uploads.filter(upload => upload.id !== id));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };



    return (

        <div className='back4'>
            <div className='flex justify-between items-center'>
                <div >
                    <Link to='/'><img className='w-[100px] md:w-[150px]' src="./3arE.png" alt="" /></Link>
                </div>
                <div className='text-white text-center font-bold text-2xl md:text-4xl ' >&#8517;ASH&#x212C;OARD</div>
                <div>{loginToken !== '' ? <button onClick={handleLogout} className="button-86 w-[30px] md:w-[120px] h-[15px] md:h-[30px] mr-[15px]" role="button">LogOut</button> : null}</div>
            </div>

            {loginToken !== '' ? (<><div className=' flex flex-col justify-center md:flex-row p-4'>
                <div className='flex flex-col mt-[2%] gap-4'>
                    <input className='border p-2 pr-[200px]' type="text" placeholder='Service' value={name} onChange={(e) => setName(e.target.value)} />
                    <textarea rows={5} className='border pr-[200px] p-2' type="text" placeholder='Details' value={position} onChange={(e) => setPosition(e.target.value)} />
                </div>
                <div className='self-center flex flex-col justify-center border-dotted border-8 w-[250px] h-[200px] mt-[2%]  '>
                    <input className='' type="file" accept='image/*' onChange={handleImage} />
                </div>
                <img src={getBase64} alt="" className='self-center w-[200px] h-[200px] border-2 mt-[2%] ml-2' />
            </div>
                <div className='flex justify-center text-center mt-[2%]'>
                    {!loading ? <button className='rounded bg-teal-600 p-2 w-[250px] text-white hover:bg-teal-500' onClick={handleSubmit}> Upload</button>
                        : <div className='flex flex-col mb-4'>
                            <p>Upload Progress: {uploadProgress}%</p>
                            <div className='w-full bg-gray-200 rounded-full h-6'>
                                <div
                                    className='bg-blue-500 h-6 rounded-full'
                                    style={{ width: `${uploadProgress}%` }}
                                />
                            </div>
                        </div>

                    }                </div>
                <div className='text-center mt-[2%]'>
                    <h1 className='font-extrabold text-4xl'>History</h1>
                    <div className=' flex flex-wrap gap-3 items-center justify-center  '>
                        {uploads.map((ln, index) => {
                            return (
                                <div key={index} className='p-4 text-black items-center  '>

                                    <div className='w-[90vw]  md:w-[25vw] lg:w-[25vw] h-auto  border border-gray-400 rounded-lg p-2 m-2 overflow-hidden flex flex-col justify-center items-center '>
                                        <h1 className='my-2 text-center text-lg '>
                                            <strong className='text-black'>Service : {ln.name}</strong>
                                        </h1>
                                        <img src={ln.imageUrl} alt="" className='w-32 h-32 my-3' />
                                        <h1 className='text-center text-lg flex flex-col text-white'>
                                            <strong className='text-center text-xl '> </strong>  {ln.position}</h1>
                                        <div className='flex'>

                                            <button disabled className='w-[150px] ml-6 border my-3 p-2 rounded-lg bg-yellow-500 w-40 text-white hover:bg-yellow-400 hover:border-yellow-800'> Edit
                                            </button>
                                            <button onClick={() => handleDelete(ln.id)} className='w-[150px] ml-6 border my-3 p-2 rounded-lg bg-red-500 w-40 text-white hover:bg-red-400 hover:border-red-800'> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ToastContainer /></>) : <PleaseLogin />
            }
        </div>
    )
}

export default AddPicture
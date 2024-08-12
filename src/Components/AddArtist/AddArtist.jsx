// // UploadForm.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { db } from '../Firebase.js';
// import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { ToastContainer, toast } from 'react-toastify';

// const Artist = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [uploads, setUploads] = useState([]);

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         if (title === '') {
//             toast.warn('Please enter title');
//             setLoading(false);
//             return;
//         }

//         if (description === '') {
//             toast.warn('Please enter description');
//             setLoading(false);
//             return;
//         }

//         if (!image) {
//             toast.warn('Please select an image');
//             setLoading(false);
//             return;
//         }

//         try {
//             // Upload image to Cloudinary
//             const formData = new FormData();
//             formData.append('file', image);
//             formData.append('upload_preset', 'artist_photos');

//             const response = await axios.post('https://api.cloudinary.com/v1_1/dnze36w9e/image/upload', formData);
//             const imageUrl = response.data.secure_url;

//             // Add document to Firebase
//             const docRef = await addDoc(collection(db, 'uploads'), {
//                 title,
//                 description,
//                 imageUrl,
//                 createdAt: new Date()
//             });

//             // Update uploads state with new document
//             setUploads([...uploads, { id: docRef.id, title, description, imageUrl }]);

//             toast.success('Uploaded successfully!');
//             setTitle('');
//             setDescription('');
//             setImage(null);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             toast.error('Error uploading file');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const querySnapshot = await getDocs(collection(db, 'uploads'));
//                 const uploadsData = querySnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data()
//                 }));
//                 setUploads(uploadsData);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await deleteDoc(doc(db, 'uploads', id));
//             toast.success('Deleted successfully');
//             setUploads(uploads.filter(upload => upload.id !== id));
//         } catch (error) {
//             console.error('Error deleting document:', error);
//         }
//     };

//     return (
//         <>
//             <div className='back w-[100%] h-screen flex justify-center items-center'>
//                 <form onSubmit={handleSubmit} className='w-full max-w-lg'>
//                     <div className='flex flex-col'>
//                         <div className='flex flex-col mb-4'>
//                             <label htmlFor='title'>Title:</label>
//                             <input
//                                 type='text'
//                                 id='title'
//                                 value={title}
//                                 className='p-3 border'
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className='flex flex-col mb-4'>
//                             <label htmlFor='description'>Description:</label>
//                             <textarea
//                                 id='description'
//                                 value={description}
//                                 className='p-3 border'
//                                 onChange={(e) => setDescription(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className='flex flex-col mb-4'>
//                             <label htmlFor='image'>Image:</label>
//                             <input
//                                 type='file'
//                                 id='image'
//                                 className='p-3'
//                                 onChange={handleImageChange}
//                                 required
//                             />
//                         </div>
//                         <button
//                             type='submit'
//                             className='bg-blue-500 text-white font-bold hover:bg-blue-400 p-2 rounded-lg w-full'
//                             disabled={loading}
//                         >
//                             {loading ? 'Uploading...' : 'Submit'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             <div className='w-[100%] p-4'>
//                 <h1 className='text-center text-3xl font-bold mb-4'>History</h1>
//                 <div className='flex flex-wrap justify-center'>
//                     {uploads.map((ln) => (
//                         <div className='w-56 h-56 p-4 m-4 flex flex-col items-center border border-gray-300 rounded-lg' key={ln.id}>
//                             <img src={ln.imageUrl} alt={ln.title} className='h-32 mb-2' />
//                             <h1 className='text-xl font-semibold mb-2'>{ln.title}</h1>
//                             <p className='text-md mb-2'>{ln.description}</p>
//                             <button
//                                 onClick={() => handleDelete(ln.id)}
//                                 className='bg-red-500 text-white p-2 rounded-lg'
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <ToastContainer />
//         </>
//     );
// };

// export default Artist;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../Firebase.js';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Artist = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploads, setUploads] = useState([]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setUploadProgress(0);

        if (title === '') {
            toast.warn('Please enter title');
            setLoading(false);
            return;
        }

        if (description === '') {
            toast.warn('Please enter description');
            setLoading(false);
            return;
        }

        if (!image) {
            toast.warn('Please select an image');
            setLoading(false);
            return;
        }

        try {
            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'artist_photos');

            await axios.post('https://api.cloudinary.com/v1_1/dnze36w9e/image/upload', formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percentCompleted);
                }
            }).then(async (response) => {
                const imageUrl = response.data.secure_url;

                // Add document to Firebase
                const docRef = await addDoc(collection(db, 'uploads'), {
                    title,
                    description,
                    imageUrl,
                    createdAt: new Date()
                });

                // Update uploads state with new document
                setUploads([...uploads, { id: docRef.id, title, description, imageUrl }]);

                toast.success('Uploaded successfully!');
                setTitle('');
                setDescription('');
                setImage(null);
                setUploadProgress(0); // Reset progress
            }).catch((err) => {
                console.error('Error uploading file:', err);
                toast.error('Error uploading file');
            });
        } catch (error) {
            console.error('Error uploading file:', error);
            toast.error('Error uploading file');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'uploads'));
                const uploadsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setUploads(uploadsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'uploads', id));
            toast.success('Deleted successfully');
            setUploads(uploads.filter(upload => upload.id !== id));
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };
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

    return (
        <>
        <div className='back'>
        <div className='flex justify-between items-center'>
                <div >
                    <Link to='/'><img className='w-[100px] md:w-[150px]' src="./3arE.png" alt="" /></Link>
                </div>
                <div className='text-white text-center font-bold text-2xl md:text-4xl ' >&#8517;ASH&#x212C;OARD</div>
                <div>{loginToken !== '' ? <button onClick={handleLogout} className="button-86 w-[30px] md:w-[120px] h-[15px] md:h-[30px] mr-[15px]" role="button">LogOut</button> : null}</div>
            </div>
            <div className='back w-[100%] h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='w-full max-w-lg'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='title'>Title:</label>
                            <input
                                type='text'
                                id='title'
                                value={title}
                                className='p-3 border'
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='description'>Description:</label>
                            <textarea
                                id='description'
                                value={description}
                                className='p-3 border'
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='image'>Image:</label>
                            <input
                                type='file'
                                id='image'
                                className='p-3'
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                       
                        {!loading ? <button
                            type='submit'
                            className='bg-blue-500 text-white font-bold hover:bg-blue-400 p-4 rounded-lg w-full'
                            disabled={loading}> 'Submit'
                        </button>
                            :
                            <div className='flex flex-col mb-4'>
                                <p>Upload Progress: {uploadProgress}%</p>
                                <div className='w-full bg-gray-200 rounded-full h-6'>
                                    <div
                                        className='bg-blue-500 h-6 rounded-full'
                                        style={{ width: `${uploadProgress}%` }}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </form>
            </div>
            <div className='w-[100%] p-4'>
                <h1 className='text-center text-3xl font-bold mb-4'>History</h1>
                <div className='flex flex-wrap justify-center'>
                    {uploads.map((ln) => (
                        <div className='w-56 h-56 p-4 m-4 flex flex-col mt-12 items-center border border-gray-300 rounded-lg' key={ln.id}>
                            <img src={ln.imageUrl} alt={ln.title} className='h-32 mb-2' />
                            <h1 className='text-xl font-semibold mb-2'>{ln.title}</h1>
                            <p className='text-md mb-2'>{ln.description}</p>
                            <button
                                onClick={() => handleDelete(ln.id)}
                                className='bg-red-500 text-white p-2 rounded-lg'
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
            </div>
        </>
    );
};

export default Artist;

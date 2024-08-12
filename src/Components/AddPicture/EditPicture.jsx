import React, { useState } from 'react'

const EditPicture = ({ isOpen, onClose, onSave, imageData }) => {
    const [name, setName] = useState(imageData.name || '');
    const [position, setPosition] = useState(imageData.position || '');
    const [image, setImage] = useState(imageData.image || '');
    const [file, setFile] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        const updatedData = {
            name,
            position,
            image: file ? image : imageData.image, // Use new image if file is uploaded
        };
        onSave(updatedData);
    };

    return (
        isOpen ? (
            <div className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>
                <div className='bg-white p-4 rounded-lg shadow-lg z-10'>
                    <h2 className='text-xl mb-4'>Edit Details</h2>
                    <input
                        className='border p-2 w-full mb-2'
                        type="text"
                        placeholder='Service'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className='border p-2 w-full mb-2'
                        rows={5}
                        placeholder='Details'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <input
                        className='border p-2 w-full mb-2'
                        type="file"
                        accept='image/*'
                        onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="Preview" className='w-32 h-32 mb-2' />}
                    <div className='flex justify-end'>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2' onClick={handleSave}>Save</button>
                        <button className='bg-gray-500 text-white px-4 py-2 rounded' onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default EditPicture

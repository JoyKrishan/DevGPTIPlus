export const UpdateUser = ({formData, handleUpdate, handleSubmit, handleDeregisterUser}) => {
                placeholder='Enter new username'
                type="password"   
                placeholder='Must be at least 8 characters long'                
                type="email"          
                placeholder='Enter new email address'                
                type="date"           
                value={formData.birthday/*.slice(0, 10)*/}
            onClick={() => handleDeregisterUser()}
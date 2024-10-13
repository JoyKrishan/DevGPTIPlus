import * as React from 'react';
import { useState, forwardRef } from 'react';
import styles from './CreatePost.module.scss';
import CustomButton from '../CustomButton/CustomButton.tsx';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import { Fab, IconButton, InputAdornment } from '@mui/material';
import TextField from '../TextField/TextField.tsx';
import cone from '../../assets/markers/Cone.svg';
import pothole from '../../assets/markers/Pothole.svg';
import roadDamage from '../../assets/markers/RoadDamage.svg';
import carAccident from '../../assets/markers/CarAccident.svg';
import warning from '../../assets/markers/WarningSign.svg';
import { MoreHoriz } from '@mui/icons-material';
import TextFieldMulti from '@mui/material/TextField';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

// Transition component for the MUI Dialog component animation
const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Type for the marker IDs
type MarkerId = 'cone' | 'pothole' | 'roadDamage' | 'carAccident' | 'warningSign' | 'etc'

export default function CreatePost() {
    // State Variables
    const [open, setOpen] = useState(false);
    const [postName, setPostName] = useState('');
    const [marker, setMarker] = useState<MarkerId | null>(null);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    // Function to handle opening CreatePost component
    const handleClickOpen = () => {
        setOpen(true);
        setPostName('');
        setMarker(null);
        setDate('');
        setDescription('');
        setLocation('');
    }
    // Function to handle closing CreatePost component
    const handleClose = () => setOpen(false);

    // Functions to handle input changes to each data point 
    // (postName, marker, date, description, and location)
    const handlePostNameChange = (value: string) => setPostName(value);
    const handleDateChange = (value: string) => setDate(value);
    const handleDescriptionChange = (value: string) => setDescription(value);
    const handleLocationChange = (value: string) => setLocation(value);
    const markerClick = (id: string) => setMarker(id as MarkerId);

    // Function to handle post submission
    const handlePost = () => {
        // For now it console logs the data points
        // May need to refactor for backend
        if (postName && description && date && location && marker) {
            console.log('Post Name:', postName);
            console.log('Description:', description);
            console.log('Date:', date);
            console.log('Selected Marker:', marker);
            console.log('Location:', location);
            handleClose();
        }
    }

    return (
        <React.Fragment>
            <div className={styles['CreatePost__postContainer']}>
                {/* Button to open dialog */}
                <CustomButton
                    onClick={handleClickOpen}>
                    Create Post
                </CustomButton>
            </div>
            {/* MUI Dialog for creating post */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={styles['CreatePost__dialog']}
            >
                <div className={styles['CreatePost__container']}>
                    <div className={styles['CreatePost__first']}>
                        {/* The title: CREATING POST */}
                        <p className={styles['CreatePost__title']}>
                            CREATE POST
                        </p>
                        {/* Button to close dialog (CloseIcon) */}
                        <IconButton
                            className={styles['CreatePost__backButton']}
                            onClick={handleClose}
                            size="small">
                            <CloseIcon
                                className={styles['CreatePost__close']}
                            />
                        </IconButton>
                    </div>
                    <div className={styles['CreatePost__second']}>
                        {/* Custom TextField for the post name */}
                        <TextField
                            header="Post Name"
                            setInputValue={handlePostNameChange}
                            type="postName"
                        />
                    </div>
                    <div>
                        <p className={styles['CreatePost__text']}>
                            Select Marker
                        </p>
                        <div className={styles['CreatePost__buttons']}>
                            {/* MUI FAB components for markers */}
                            {['cone', 'pothole', 'roadDamage', 'carAccident', 'warningSign'].map(id => (
                                <Fab key={id} className={`${styles['CreatePost__fab']} ${marker === id ? styles['CreatePost__active'] : ''}`}
                                    size="large"
                                    aria-label={id}
                                    onClick={() => markerClick(id)}>
                                    <img
                                        className={`${styles['CreatePost__images']} ${id === 'carAccident' ? styles['CreatePost__images2'] : ''}`}
                                        src={id === 'cone' ? cone
                                            : id === 'pothole' ? pothole
                                                : id === 'roadDamage' ? roadDamage
                                                    : id === 'carAccident' ? carAccident
                                                        : id === 'warningSign' ? warning : ''}
                                        alt="" />
                                </Fab>
                            ))}
                            {/* Separate FAB to use MoreHoriz the (...) icon for etc problems */}
                            <Fab
                                className={`${styles['CreatePost__fab']} ${marker === 'etc' ? styles['CreatePost__active'] : ''}`}
                                size="large"
                                aria-label="etc"
                                onClick={() => markerClick('etc')}
                            >
                                <MoreHoriz className={styles['CreatePost__images']} />
                            </Fab>
                        </div>
                    </div>
                    <div className={styles['CreatePost__third']}>
                        <p className={styles['CreatePost__text']}>
                            Date
                        </p>
                        {/* Date text field using input tag to capture date of post */}
                        <input
                            type="date"
                            className={styles['CreatePost__date']}
                            onChange={(change) => handleDateChange(change.target.value)}
                        >
                        </input>
                    </div>
                    <div className={styles['CreatePost__fourth']}>
                        <p className={styles['CreatePost__text']}>
                            Description
                        </p>
                        {/* Description field which uses MUI Multiline textfield */}
                        <TextFieldMulti
                            id="outlined-multiline-flexible"
                            label="Description..."
                            multiline
                            rows={4}
                            className={styles['CreatePost__multi']}
                            onChange={(change) => handleDescriptionChange(change.target.value)}
                        />
                    </div>
                    <div>
                        <p className={styles['CreatePost__text3']}>
                            Address
                        </p>
                        {/* Address field which uses MUI TextField but adds the RoomOutlinedIcon to the start */}
                        <TextFieldMulti
                            className={styles['CreatePost__multi2']}
                            label="Location"
                            id="input-with-icon-textfield"
                            onChange={(change) => handleLocationChange(change.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <RoomOutlinedIcon />
                                    </InputAdornment>
                                )
                            }} />
                    </div>
                    <div className={styles['CreatePost__lastButton']}>
                        <CustomButton
                            onClick={handlePost}>
                            POST
                        </CustomButton>
                    </div>
                </div>
            </Dialog >
        </React.Fragment >
    );
}
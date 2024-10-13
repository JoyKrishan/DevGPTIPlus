import styles from './CommunityPost.module.scss';
import { Card, CardContent, Typography, Avatar} from '@mui/material';
import { CustomButton } from "@/components";
import { styled } from '@mui/system';
import Cone from '../../assets/markers/Cone.svg';
import CarAccident from '../../assets/markers/CarAccident.svg';
import Pothole from '../../assets/markers/Pothole.svg';
import RoadDamage from '../../assets/markers/RoadDamage.svg';
import WarningSign from '../../assets/markers/WarningSign.svg';
import Logo from '../../assets/Updated_RoadWatch_Logo.svg';

/** Parameters for the CommunityPost */
interface CommunityPostProps {
    /** Boolean which tells if its a marker post or text post*/
    isMarker: boolean;
    /** Content of the post, Title and Body */
    content: Content;
    /** User information of post creater */
    user: string; //change this to our user. 
    /** If marker post, pass in the marker information */
    marker?: Marker;
}

/** Marker model */
interface Marker {
    longitude: number;
    latitude: number;
    type: string;
}

/** Content model */
interface Content {
    /** String of the Title of the post */
    title: string;
    /** String of the body of the post*/
    body: string;
}

/** This allows custom styling of the MUI Typography component 
 *  Specifically, the body text preview.
*/
const StyledTypography = styled(Typography)()

/** Creates a CommunityPost component */
const CommunityPost: React.FC<CommunityPostProps> = ({isMarker, content, user, marker}: CommunityPostProps )  => {
    /** OnClick function to view post
     *  Need to update so that the full post is shown when this is called
    */
    const viewPost = ()=> {
        console.log("View Post")
    }
    const {title, body} = content;

    //Variable to store marker icon
    let markerIcon=""
    switch (marker?.type) {
        case 'CarAccident':
            markerIcon = CarAccident;
            break;
        case 'pothole':
            markerIcon = Pothole;
            break;
        case 'RoadDamage':
            markerIcon = RoadDamage;
            break;
        case 'WarningSign':
            markerIcon = WarningSign;
            break;
        default:
            markerIcon = Cone;
            break;
    }

    return (
        <div className={styles['CommunityPost']}>
            {/* // ai-gen start (ChatGPT-3.5, 2) */}
            <div className={styles['CommunityPost__card']}>
                <Card>
                    <div>
                        <CardContent className={styles['CommunityPost__contentContainer']}>
                            <div className={styles['CommunityPost__header']}>
                                <div className={styles['CommunityPost__headerLeft']}>
                                    {isMarker ? (
                                        <img className={styles['CommunityPost__markerIcon']} height={"50px"} src={markerIcon} alt={"Marker Type"}/>
                                        ) : (
                                            null
                                        )
                                    }
                                    <Typography variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                </div>
                                <div className={styles['CommunityPost__headerRight']}>
                                    {/* Replace with user profile */}
                                    <Avatar>{user}</Avatar> 
                                </div>
                            </div>
                            <div className={styles['CommunityPost__bodyPreview']}>
                                {isMarker ? (   
                                    // This is the preview of a marker post
                                    <img src={Logo} height={"100px"} alt="Roadwatch Logo" />
                                ) : ( 
                                    // This is the preview of a text post
                                    <StyledTypography variant="body2" color="text.secondary" className={styles['CommunityPost__textBody']}>
                                        {body}
                                    </StyledTypography>
                                )}
                            </div>
                            <div>
                                <CustomButton onClick={viewPost}>
                                    View Post
                                </CustomButton>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
            {/* // ai-gen end */}
        </div>
    );
};

export default CommunityPost;
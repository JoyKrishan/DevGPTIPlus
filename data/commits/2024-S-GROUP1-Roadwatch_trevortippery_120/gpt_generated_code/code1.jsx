const markers = [
    { name: 'cone', icon: cone },
    { name: 'pothole', icon: pothole },
    { name: 'roadDamage', icon: roadDamage },
    { name: 'carAccident', icon: carAccident },
    { name: 'warningSign', icon: warning },
    { name: 'etc', icon: MoreHoriz },
];

return (
    <>
        {markers.map((marker, index) => (
            <Fab
                key={index}
                className={`${styles['CreatePost__fab']} ${selectedMarker === marker.name ? styles['CreatePost__active'] : ''}`}
                size="large"
                aria-label={marker.name}
                onClick={() => markerClick(marker.name)}
            >
                {typeof marker.icon === 'string' ? (
                    <img
                        className={styles['CreatePost__images']}
                        src={marker.icon}
                        alt=""
                    />
                ) : (
                    <marker.icon className={styles['CreatePost__images']} />
                )}
            </Fab>
        ))}
    </>
);
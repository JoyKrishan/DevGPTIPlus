import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const PostCard = ({ title, body, onViewPost }) => {
  return (
    <Card variant="outlined" style={{ margin: '10px', maxWidth: '400px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {body.length > 100 ? `${body.substring(0, 100)}...` : body}
        </Typography>
        <Button variant="contained" color="primary" onClick={onViewPost} style={{ marginTop: '10px' }}>
          View Post
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;
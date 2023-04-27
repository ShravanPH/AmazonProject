import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Query12(data) {

  return (
    <React.Fragment>
    <Card sx={{ maxWidth: 345,backgroundColor:"#ff9900"  }}>
   
    <CardMedia component="img" height="194" image={require("../warehouse.jpg")}/>
    <CardContent>

    Location :
      <Typography variant="h3" color="text.primary">
      {data.props.Location}
      </Typography>

    </CardContent>

    <CardActions disableSpacing>
      
      <ExpandMore
        aria-label="show more"
      >
      </ExpandMore>
    </CardActions>
  </Card>  
  </React.Fragment>
);}
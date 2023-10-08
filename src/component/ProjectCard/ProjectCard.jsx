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
import styles from '/src/component/ProjectCard/projectCard.module.css';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({ data }) {
  const theme = useTheme();
  const { title, description, requested_date, completed_date, location, status, requirements } =
    data;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={styles.cardWrapper} sx={{ maxWidth: 345 }}>
      <div className={styles['titleButtonWrapper']}>
        <div className={styles['titleWrapper']}>
          <CardHeader
            className={styles['titleText']}
            title={title}
            subheader={'Date Posted: ' + requested_date}
          />
          <span className={styles.pill}>{'New York, NY ' + location}</span>
          <span className={`${styles.pill} ${styles.status}`}>{status}</span>
        </div>
        <div className={styles.detailsButtonWrapper}>
          <CardActions disableSpacing>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-label="show more">
              <Button
                className={styles.detailsButton}
                sx={{ background: theme.palette.primary.main }}
              >
                More Details <ExpandMoreIcon />
              </Button>
            </ExpandMore>
          </CardActions>
        </div>
      </div>
      <CardContent>
        <div></div>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p>About the role:</p>
          <p>{description}</p>
          <p>Responsibilites:</p>
          <ul>
            {requirements.map((req) => (
              <li key={crypto.randomUUID()}>{req}</li>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    requested_date: PropTypes.string.isRequired,
    completed_date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

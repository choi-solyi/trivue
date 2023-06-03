import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SampleImg from './../assets/img/weare/1.jpg'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ImgCard = props => {
  const [expanded, setExpanded] = React.useState(false)
  const { name, item } = props

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const updated =
    'Updated ' +
    new Date(item.updated.seconds * 1000).toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  const handleClick = () => {
    window.open(item.url, '_blank')
  }
  const handleGithubIcon = () => {
    window.open(item.github, '_blank')
  }
  const skill = item.skill
    ? Object.keys(item.skill).map(key => (
        <Chip
          key={key}
          label={key}
          size="small"
        />
      ))
    : null
  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={handleClick}
          >
            {item.url && <LaunchIcon />}
          </IconButton>
        }
        title={item.title}
        subheader={updated.toString() + ', ' + item.team}
      ></CardHeader>
      <CardMedia
        component="img"
        height="400"
        image={SampleImg}
        alt="Paella dish"
        className="h-72"
      />
      <CardContent>
        <Stack
          direction="row"
          spacing={1}
        >
          {skill}
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleGithubIcon}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
        {item.detail && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{
              __html: item.detail,
            }}
          ></Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ImgCard

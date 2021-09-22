import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Box,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import Apps from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';

import {
  AccountCircle,
  MoreVert,
  VideoCall,
  Subscriptions,
  Whatshot,
  AddCircle,
  History,
  QueueMusic,
  SportsBaseball,
  SportsEsports,
  Movie,
  Book,
  LiveTv,
  Highlight,
  VideoLibrary,
  SlowMotionVideo
} from '@material-ui/icons';

import { Player} from '@lottiefiles/react-lottie-player';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
  checkAnimation: {
    width: '100%',
    height: '300px',
    paddingBottom: '2rem',
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    paddingRight: '4px',
  },
}));

const videos = [
  {
    id: 1,
    title: 'REACTJS | Criando site com ReactJS',
    channel: 'Code Lorem Ipsum',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube1.json',
  },
  {
    id: 2,
    title: 'JAVASCRIPT | Melhorar desempenho do site | Dicas e Truques',
    channel: 'Code Lorem Ipsum',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube2.json',
  },
  {
    id: 3,
    title: 'DOCKER | Criar banco de dados MongoDB utilizando Docker',
    channel: 'Code Lorem Ipsum',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube3.json',
  },
  {
    id: 4,
    title: 'ANGULAR | Criando componentes',
    channel: 'Code Lorem Ipsum',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube4.json',
  },
  {
    id: 5,
    title: 'HOOKS | Uso dos recursos de state e ciclo de vida do React  ',
    channel: 'Code Lorem Ipsum',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube5.json',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques',
    channel: 'Code Lorem Ipsum',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube6.json',
  },
  {
    id: 7,
    title: 'JEST | Como utilizar a ferramenta de testes',
    channel: 'Code Lorem Ipsum',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube7.json',
  },
  {
    id: 8,
    title: 'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core',
    channel: 'Code Lorem Ipsum',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/video-youtube8.json',
  },
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' className={classes.menuIcon} aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark'
                ? '/images/branco.png'
                : '/images/preto.png'
            }
            alt='logo'
            className={classes.logo}
          />
          <div className={classes.grow} />
          
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons} />
          <IconButton className={classes.icons}><VideoCall /></IconButton>
          <IconButton className={classes.icons}><Apps /></IconButton>
          <IconButton className={classes.icons}><MoreVert /></IconButton>
          
          <Button startIcon={<AccountCircle />} variant='outlined' color='secondary'>
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>

      <Box display='flex'>
        <Hidden mdDown>
          <Drawer className={classes.drawer} variant='permanent' classes={{ paper: classes.drawerPaper }}>
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Início'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Em alta'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Inscrições'} />
                </ListItem>
              </List>
              
              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><VideoLibrary /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Biblioteca'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Histórico'} />
                </ListItem>
              </List>

              <Divider />
              
              <Box p={7}>
                <Typography variant='body2'>
                  Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button variant='outlined' color='secondary' startIcon={<AccountCircle />}>
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><QueueMusic /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Música'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><SportsBaseball /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Esportes'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><SportsEsports /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Jogos'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><Movie /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Filmes'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><Book /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Notícias'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><LiveTv /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Ao vivo'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon><Highlight /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Destaques'} />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon><SlowMotionVideo /></ListItemIcon>
                  <ListItemText classes={{ primary: classes.listItemText, }} primary={'Videos 360'} />
                </ListItem>
              </List>

              <Divider />
              
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon><AddCircle /></ListItemIcon>
                <ListItemText classes={{ primary: classes.listItemText, }} primary={'Procurar mais'} />
              </ListItem>

              <Divider />
            </div>
          </Drawer>
        </Hidden>

        <Box p={8}>
          <Toolbar />
          <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <Player 
                    autoplay 
                    loop 
                    alt={item.title}
                    src={item.thumb}
                    className={classes.checkAnimation}
                  > 
                  </Player>
                  <Box display='flex'>
                    <img className={classes.avatar} alt={item.title} src={item.avatar} />
                    <Box>
                      <Typography style={{ fontWeight: 600 }} gutterBottom variant='body1' color='textPrimary'>
                        {item.title}
                      </Typography>

                      <Typography display='block' variant='body2' color='textSecondary'>
                        {item.channel}
                      </Typography>
                      
                      <Typography variant='body2' color='textSecondary'>
                        {`${item.views} • ${item.date}`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Pileta de Lona Pelopincho 4500Lts 300 x 200 x 75 cm',
        price: 199999,
        image: 'https://images.fravega.com/f300/41e25ecb1192a1069e316e227636e1e7.jpg.webp',
    },
    {
        id:2,
        name:"Auriculares Inalambricos Bluetooth Sony Wf-c500 Tactil",
        price:189999,
        image:'https://images.fravega.com/f300/7dddcf9e27e4e970b3edb3e6c249898a.jpg.webp',
    },
    {
        id:3,
        name:"Aire Acondicionado Split Frio/Calor Sansei 2800F 3300W SAS32HA3AN",
        price:764999,
        image:"https://images.fravega.com/f300/e3c5874e72104793c3c23c650af27388.jpg.webp",
    }
];


function ProductList() {
    const [expanded, setExpanded] = React.useState(false);

    const navegate = useNavigate();

    const ExpandMore = () => { };

    const handleProductclick = (id) => {
        navegate(`/product/${id}`)
    }

    return (
        <div>
            {products.map((product) => (
                <Card sx={{ maxWidth: 345 }} onClick={() => handleProductclick(product.id)}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={product.name}
                        subheader={<>{`Precio: ${product.price}`}</>}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            // expand={expanded}
                            // onClick={handleExpandClick}
                            // aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    )
}

export default ProductList
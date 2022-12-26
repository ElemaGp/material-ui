import "./practice.css"
import React, { useEffect, useState } from 'react'
import { Box, Button, FormControlLabel, Rating, Stack, Switch, Typography, Card, CardContent, CardActions } from "@mui/material"

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Practice = () => {
    const [ratingValue, setRatingValue] = useState(null);
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        console.log(`rating value is ${ratingValue}`);
        console.log(`checked value is ${checked}`);
    },[ratingValue, checked]);

    const handleChange = (e) =>{
        setRatingValue(e.target.value);
        notify();

    }

    const notify = () => {
        toast.success("Thanks for your feedback!", {     
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); 
    }

  return (
    <Box>
        <Stack spacing={5} direction="row"
        sx={{
            width: 300,
            height: 300,
            marginLeft: 40,
            backgroundColor: 'primary.dark',
            '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
            },
        }}
        >
            <Button variant="contained" color="secondary" size="large" sx={{height:40}}>
                <Typography variant="h5" color="yellow">Click Me</Typography>
            </Button>
            <Button variant="contained" size="large" sx={{height:40}}>
                <Typography size="medium" >Login</Typography>
            </Button>
        </Stack>

        {/* rating */}
        <Stack spacing={2}>
            <Rating value={ratingValue} onChange={handleChange}/>
            
        </Stack>
        <ToastContainer /> {/*you can also style this toast container component if you want it to affect all the toast alerts in this component (unless you then style that alert seperately) */}

        {/* Switch slide */}
        <FormControlLabel label="Dark mode" control={<Switch size="large" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>} /> {/*Getting the value from the "switch" element (note that whenever the switch is switched on, the "checked" prop value is true and whenever it is switched off, the "checked" prop value is false. I'm simply grabbing that value using my own "checked" useState. ) */}
    
        {/*Card component*/}
    <Box border="solid" display="flex" justifyContent="center">
        <Stack width="600px" spacing={6} direction="row">
            <Card variant="elevation" >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Elema</Typography>
                    <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed, ex dolore esse maxime fuga cum quae alias assumenda obcaecati maiores ducimus animi ipsum necessitatibus debitis harum numquam, delectus corrupti.</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{fontWeight: 'bold'}}>Share</Button>
                    <Button size="small" sx={{fontWeight: 'bold'}}>Learn more</Button>
                </CardActions>
            </Card>
            <Card variant="outlined" >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Elema</Typography>
                    <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sed, ex dolore esse maxime fuga cum quae alias assumenda obcaecati maiores ducimus animi ipsum necessitatibus debitis harum numquam, delectus corrupti.</Typography>
                </CardContent>
            </Card>
        </Stack>
    </Box>

    </Box>
  )
}

export default Practice

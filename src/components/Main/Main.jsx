import React from 'react'
import { Card, CardHeader, Typography, CardContent, Grid, Divider } from '@material-ui/core'
import Form from './Form/Form'
import useStyles from './styles'


const Main = () => {
    
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title='Expenses Tracker' subheader="Powered by speechly"/>
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    Try Saying: Add Income for $100 in Category shopping for Monday...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* <List /> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main

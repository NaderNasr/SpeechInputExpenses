import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'
import useStyles from './styles'

const List = () => {
    const classes = useStyles()
    //const globalState = useContext(ExpenseTrackerContext)
    const {deleteTrans, transactions} = useContext(ExpenseTrackerContext)

    
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((trans) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={trans.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={trans.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={trans.category} secondary={`$${trans.amount} - ${trans.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTrans(trans.id)}>
                                <Delete  />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List

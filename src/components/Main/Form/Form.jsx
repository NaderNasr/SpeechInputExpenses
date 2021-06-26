import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formateDate from '../../../utils/formateDate'

import useStyles from './styles';

const initialState = {
	amount: '',
	category: '',
	type: 'Income',
	date: formateDate(new Date())
};

const Form = () => {
	const classes = useStyles();
	const [ formData, setFormData ] = useState(initialState);
	console.log(formData);
	const { addTrans } = useContext(ExpenseTrackerContext);

	const createTrans = () => {
		const trans = { ...formData, amount: Number(formData.amount), id: uuidv4() };
		addTrans(trans);
		setFormData(initialState);
	};

    const selectedCategories = formData.type === 'Income' ? incomeCategories  : expenseCategories

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="subtitle2" align="center" gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item x={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Category</InputLabel>
					<Select
						value={formData.category}
						onChange={(e) => setFormData({ ...formData, category: e.target.value })}
					>
						{selectedCategories.map((cat) => <MenuItem key={cat.type} value={cat.type}>{cat.type}</MenuItem>)}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="number"
					label="Amount"
					fullWidth
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type="date"
					label="Date"
					fullWidth
					value={formData.date}
					onChange={(e) => setFormData({ ...formData, date: formateDate(e.target.value) })}
				/>
			</Grid>
			<Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTrans}>
				Create
			</Button>
		</Grid>
	);
};

export default Form;

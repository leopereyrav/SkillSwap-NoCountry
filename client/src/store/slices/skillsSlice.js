"use client"

import {createSlice} from '@reduxjs/toolkit';


export const skillsSlice = createSlice({

    name:"skills",
    initialState:{
        skillToTeach: "",
        skillToLearn:"",
        othersSkills: [],
        
    },
    reducers:{
        addToTeach: (state, {payload}) =>{
            state.skillToTeach = payload;
            console.log(payload)
        },
        addToLearn: (state, {payload}) =>{
            state.skillToLearn = payload;
            console.log(payload)
        },
        addOthersSkills: (state, {payload})=>{
            state.othersSkills = [...payload]
            console.log(payload)
        },
        restartAll:(state) =>{
            state.skillToLearn = "";
            state.skillToTeach = "";
            state.othersSkills = [];
        }
    }
})

export const {
    addToLearn, addToTeach , addOthersSkill, restartAll
} = skillsSlice.actions;
export default skillsSlice.reducer;
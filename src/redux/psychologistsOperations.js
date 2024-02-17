import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase.js';
import { ref } from 'firebase/database';

// export const fetchAll = createAsyncThunk(
//   'psychologists/fetchAll',

//   async (_, thunkAPI) => {
//     try {
//       const psychoRef = ref(db, 'psychologists/');
//       onValue(psychoRef, snapshot => {
//         const data = snapshot.val();
//         console.log(data);
//       });
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchAll = createAsyncThunk(
  'psychologists/fetchAll',
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, 'psychologists/');
      const snapshot = await dbRef.once('value');
      const data = snapshot.val();
      console.log('hello');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

fetchAll();

// export const fetchAll = createAsyncThunk(
//   'psychologists/fetchAll',

//   async (_, thunkAPI) => {
//     try {
//       const recentPostsRef = query(ref(db, 'psychologists'), limitToFirst(3));
//       console.log(recentPostsRef);
//       const snapshot = await get(recentPostsRef);
//       console.log(snapshot.val());
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase.js';
import {
  limitToFirst,
  onValue,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';

// export const createAll = createAsyncThunk(
//   'psychologists/createall',

//   async (_, thunkAPI) => {
//     try {
//       console.log('start psycho');
//       const itemPsyho = {
//         name: 'Dr. Sarah Davis',
//         avatar_url: 'https://ftp.goit.study/img/avatars/23.jpg',
//         experience: '12 years',
//         reviews: [
//           {
//             reviewer: 'Michael Brown',
//             rating: 4.5,
//             comment:
//               'Dr. Davis has been a great help in managing my depression. Her insights have been valuable.',
//           },
//           {
//             reviewer: 'Linda Johnson',
//             rating: 5,
//             comment:
//               "I'm very satisfied with Dr. Davis's therapy. She's understanding and empathetic.",
//           },
//         ],
//         price_per_hour: 120,
//         rating: 4.75,
//         license: 'Licensed Psychologist (License #67890)',
//         specialization: 'Depression and Mood Disorders',
//         initial_consultation: 'Free 45-minute initial consultation',
//         about:
//           'Dr. Sarah Davis is a highly experienced and licensed psychologist specializing in Depression and Mood Disorders. With 12 years of practice, she has helped numerous individuals overcome their depression and regain control of their lives. Dr. Davis is known for her empathetic and understanding approach to therapy, making her clients feel comfortable and supported throughout their journey to better mental health.',
//       };
//       const postListRef = ref(db, 'psychologists');
//       const newPostRef = push(postListRef);
//       set(newPostRef, itemPsyho);
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
      return new Promise((resolve, reject) => {
        onValue(
          dbRef,
          snapshot => {
            const data = snapshot.val();
            console.log('Data:', data);
            resolve(data);
          },
          error => {
            console.error('Error fetching data:', error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFirstPage = createAsyncThunk(
  'psychologists/fetchFirstPage',
  async (_, thunkAPI) => {
    try {
      const recentRef = query(ref(db, 'psychologists'), limitToFirst(3));
      return new Promise((resolve, reject) => {
        onValue(
          recentRef,
          snapshot => {
            const data = snapshot.val();
            resolve(data);
          },
          error => {
            console.error('Error fetching data:', error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotal = createAsyncThunk(
  'psychologists/fetchFirstPage',
  async (_, thunkAPI) => {
    try {
      const recentRef = query(ref(db, 'psychologists'), limitToFirst(3));
      return new Promise((resolve, reject) => {
        onValue(
          recentRef,
          snapshot => {
            const data = snapshot.val();
            resolve(data);
          },
          error => {
            console.error('Error fetching data:', error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMorePages = createAsyncThunk(
  'psychologists/fetchMorePage',
  async (currentPage, thunkAPI) => {
    try {
      console.log(' load more items');
      const per_page = 3;
      const startKey = currentPage * per_page;
      const loadMore = query(
        ref(db, 'psychologists'),
        orderByKey(),
        startAt(startKey.toString()),
        limitToFirst(per_page)
      );
      return new Promise((resolve, reject) => {
        onValue(
          loadMore,
          snapshot => {
            const data = snapshot.val();
            console.log('Data:', data);
            const dataArray = Object.values(data);
            // console.log('Data:', dataArray);
            resolve(dataArray);
          },
          error => {
            console.error('Error fetching data:', error);
            reject(error);
          }
        );
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

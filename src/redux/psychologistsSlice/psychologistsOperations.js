import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase.js';
import {
  endBefore,
  limitToFirst,
  onValue,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';

export const fetchTotalHits = createAsyncThunk(
  'psychologists/fetchAll',
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, 'psychologists/');
      return new Promise((resolve, reject) => {
        onValue(
          dbRef,
          snapshot => {
            const totalHits = snapshot.size;
            resolve(totalHits);
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

export const loadMorePages = createAsyncThunk(
  'psychologists/fetchMorePage',
  async (currentPage, thunkAPI) => {
    try {
      const per_page = 3;
      const startKey = (currentPage - 1) * per_page;
      const endKey = currentPage * per_page;
      const loadMore = query(
        ref(db, 'psychologists'),
        orderByKey(),
        startAt(startKey.toString()),
        endBefore(endKey.toString())
      );
      return new Promise((resolve, reject) => {
        onValue(
          loadMore,
          snapshot => {
            const data = snapshot.val();
            const dataArray = Object.values(data);
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

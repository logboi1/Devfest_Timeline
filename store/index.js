import {create} from 'zustand';
import {profileStoreSlice} from './profileStoreSlice';

const useStore = create((...a) => ({
  ...profileStoreSlice(...a),
}));

export default useStore;

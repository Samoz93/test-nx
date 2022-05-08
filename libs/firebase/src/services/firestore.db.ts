import { collection, query, addDoc, onSnapshot } from 'firebase/firestore';
import { fireStore } from './db';
import { collectionData } from 'rxfire/firestore';
import { EVENTS_COLLECTION } from '../constants/collections.constant';
import type { IEvent } from '../interfaces';

const Events_Ref = query(collection(fireStore, EVENTS_COLLECTION));

export const events$ = collectionData(Events_Ref);

export const addEvent = (data: IEvent) =>
  addDoc(collection(fireStore, EVENTS_COLLECTION), data);

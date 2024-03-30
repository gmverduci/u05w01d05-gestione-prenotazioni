import { initializeApp, FirebaseOptions } from 'firebase/app';
import { environment } from './environments/environment';

import 'firebase/database';

const firebaseConfig = environment.firebase as FirebaseOptions;

const firebaseApp = initializeApp(firebaseConfig, '[YOUR_APP_NAME]');

export { firebaseApp };

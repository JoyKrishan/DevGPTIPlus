import { sessionStore } from '../../_common/utils/storage.js';
    const sessionColor = sessionStore.get(REMOTE_COLOR_KEY);
    sessionStore.set(REMOTE_COLOR_KEY, pickColor);
    const sessionColor = sessionStore.get(REMOTE_COLOR_KEY);
    sessionStore.set(REMOTE_COLOR_KEY, pickColor);
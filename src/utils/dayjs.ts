import dayjsDefault from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjsDefault.extend(relativeTime);
dayjsDefault.extend(LocalizedFormat);
dayjsDefault.extend(duration);

export const dayjs = dayjsDefault;

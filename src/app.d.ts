interface Activity {
  title: string;
  color: string;
  icon: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

interface Timeframe {
  current: number;
  previous: number;
}

type TimeframeKey = keyof Activity['timeframes'];

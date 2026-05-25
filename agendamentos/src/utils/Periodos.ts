const getTime = (time: string): number => parseInt(time.split(":")[0], 10);

export const isMorning = (time: string) => {
  const morningTime = getTime(time);
  return morningTime >= 9 && morningTime <= 12;
};

export const afternoonTime = (time: string) => {
  const isAfternoon = getTime(time);
  return isAfternoon >= 13 && isAfternoon <= 18;
};

export const isNight = (time: string) => {
  const nightTime = getTime(time);
  return nightTime >= 19 && nightTime <= 21;
};

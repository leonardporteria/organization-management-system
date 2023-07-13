const generateRandomNumber = () => {
  const min = 10;
  const max = 99;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export const generateClubId = (uid) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString().slice(-2);
  const currentDayOfYear = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  )
    .toString()
    .padStart(3, '0');

  const applicantNumber = uid.padStart(1, '0');
  const randomNum = generateRandomNumber();

  // YYDDDRRRR
  // Y-year D-day R-random(auto-increment)
  const uniqueId =
    'CLUB' + currentYear + currentDayOfYear + randomNum + applicantNumber;
  return uniqueId;
};

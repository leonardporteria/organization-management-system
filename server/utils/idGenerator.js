export const generateMemberId = (uid) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString().slice(-2);
  const currentDayOfYear = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  )
    .toString()
    .padStart(3, '0');

  // change random number to autoincrement
  // select count(member_id) from member_informaiton
  // where member_id like <id_today>____

  const applicantNumber = uid.padStart(4, '0');

  const uniqueId = currentYear + currentDayOfYear + applicantNumber;
  return uniqueId;
};

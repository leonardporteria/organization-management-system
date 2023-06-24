export const generateMemberId = (uid) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString().slice(-2);
  const currentDayOfYear = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  )
    .toString()
    .padStart(3, '0');

  const applicantNumber = uid.padStart(4, '0');

  // YYDDDRRRR
  // Y-year D-day R-random(auto-increment)
  const uniqueId = currentYear + currentDayOfYear + applicantNumber;
  return uniqueId;
};

export const concatenateMemberId = (memberId, tag, index) => {
  const multivalueId = `${memberId}-${index.padStart(2, `${tag}`)}`;
  return multivalueId;
};

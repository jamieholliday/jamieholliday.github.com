export function fromIso(isodate) {
  if (!isodate) return '';
  let dt = new Date(isodate);
  let dd = dt.getDate();
  let mm = dt.getMonth() + 1;
  let yyyy = dt.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}

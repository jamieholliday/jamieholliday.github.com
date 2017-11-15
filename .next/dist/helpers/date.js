'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIso = fromIso;
function fromIso(isodate) {
  if (!isodate) return '';
  var dt = new Date(isodate);
  var dd = dt.getDate();
  var mm = dt.getMonth() + 1;
  var yyyy = dt.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}
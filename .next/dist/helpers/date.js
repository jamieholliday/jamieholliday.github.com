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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvZGF0ZS5qcyJdLCJuYW1lcyI6WyJmcm9tSXNvIiwiaXNvZGF0ZSIsImR0IiwiRGF0ZSIsImRkIiwiZ2V0RGF0ZSIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQU8sQUFBUztBQUFULGlCQUFBLEFBQWlCLFNBQVMsQUFDL0I7TUFBSSxDQUFKLEFBQUssU0FBUyxPQUFBLEFBQU8sQUFDckI7TUFBSSxLQUFLLElBQUEsQUFBSSxLQUFiLEFBQVMsQUFBUyxBQUNsQjtNQUFJLEtBQUssR0FBVCxBQUFTLEFBQUcsQUFDWjtNQUFJLEtBQUssR0FBQSxBQUFHLGFBQVosQUFBeUIsQUFDekI7TUFBSSxPQUFPLEdBQVgsQUFBVyxBQUFHLEFBQ2Q7TUFBSSxLQUFKLEFBQVMsSUFBSSxBQUNYO1NBQUssTUFBTCxBQUFXLEFBQ1o7QUFDRDtNQUFJLEtBQUosQUFBUyxJQUFJLEFBQ1g7U0FBSyxNQUFMLEFBQVcsQUFDWjtBQUNEO1NBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE1BQXZCLEFBQTZCLEFBQzlCIiwiZmlsZSI6ImRhdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZm94L0RvY3VtZW50cy9qYW1pZWhvbGxpZGF5LmNvbSJ9
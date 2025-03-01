export const getPublishDate = (date) => {
    // check if data is only year like 2011, 2012 etc then return as it is
    if (date.includes(".")) {
      date = date.split(".")[0];
    }

    if (date.length === 4) {
      return date;
    }

    // else check if it is a valid date format
    var d = new Date(date);
    if (d instanceof Date && !isNaN(d)) {
      // return as September 19, 2023 also handel if it is January 1, 2023 make it January 01, 2023
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
    }
  };
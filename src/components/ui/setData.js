export function SetPageTitle(slug) {
  if (slug.length > 2) {
    const word = slug.split("-");
    for (let i = 0; i < word.length; i++) {
      const title = word[i];
      word[i] = title.charAt(0).toUpperCase() + title.slice(1);
    }
    return word.join(" ");
  } else {
    let title = "";
    if (slug === "1") {
      title = "PC";
    } else if (slug === "2") {
      title = "PlayStation";
    } else if (slug === "3") {
      title = "Xbox";
    } else if (slug === "4") {
      title = "iOS";
    } else if (slug === "8") {
      title = "Android";
    } else if (slug === "5") {
      title = "Apple Macintosh";
    } else if (slug === "6") {
      title = "Linux";
    } else if (slug === "7") {
      title = "Nintendo";
    } else if (slug === "9") {
      title = "Atari";
    } else if (slug === "10") {
      title = "Commodre / Amiga";
    } else if (slug === "11") {
      title = "SEGA";
    } else if (slug === "12") {
      title = "3DO";
    } else if (slug === "13") {
      title = "Neo Neo";
    } else if (slug === "14") {
      title = "Web";
    }
    return title;
  }
}

export function setDate(date) {
  const newDate = new Date(date);
  const localDate = newDate.toLocaleString("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return localDate;
}

const doTextSearch = (entries: any[], searchString: string) => {
  // Filter the entries based on the search string
  const filteredEntries = entries.filter((entry) => {
    const label = entry.label.toLowerCase();
    const search = searchString.toLowerCase();
    return label.includes(search);
  });

  // Return the filtered entries
  return filteredEntries;
};

export { doTextSearch };

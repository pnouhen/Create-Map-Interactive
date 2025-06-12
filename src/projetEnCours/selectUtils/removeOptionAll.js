export function removeOptionAll(select, value) {
  const data = [...select.options];

  if (data.length === 2) {
    data.forEach((option) => {
      if (option.value === value) {
        option.remove();
      }
    });
  }
}

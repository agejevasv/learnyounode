console.log(
  process.argv
    .slice(2)
    .map(x => Number(x))
    .reduce((sum, val) => sum + val)
)
export function generateProgressPercentage(amount = 0, completed = 0) {
  const percentage = Math.round((completed / amount) * 100)
  return isNaN(percentage) ? 0 : percentage
}

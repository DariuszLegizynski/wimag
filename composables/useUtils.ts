export const useUtils = () => {
  let isBurgerActive = false
  const useToggle = () => {
    isBurgerActive = !isBurgerActive
  }
  
  return { useToggle }
  
}